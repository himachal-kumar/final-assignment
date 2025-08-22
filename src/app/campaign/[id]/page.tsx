"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { Campaign } from "@/models/campaign";
import { FundingPlan } from "@/models/fundingPlan";
import Script from "next/script";
import Link from "next/link";

interface Campaign {
  _id: string;
  title: string;
  description: string;
  image?: string;
  goal_amount: number;
  collected_amount: number;
  ngo_name?: string;
}

interface FundingPlan {
  _id: string;
  title: string;
  amount_cents: number;
  interval: string;
  ps_provider_plan_id: string;
}

const CampaignDetailsPage = () => {
  const { id } = useParams();
  const [campaign, setCampaign] = useState<Campaign | null>(null);
  const [plans, setPlans] = useState<FundingPlan[]>([]);
  const [userId, setUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const [campaignRes, plansRes] = await Promise.all([
          fetch(`/api/campaigns/${id}`),
          fetch(`/api/funding-plans?campaign_id=${id}`),
        ]);

        if (campaignRes.ok) {
          const campaignData = await campaignRes.json();
          setCampaign(campaignData);
        }

        if (plansRes.ok) {
          const plansData = await plansRes.json();
          setPlans(plansData);
        }

        // get user id from localStorage
        const storedUserId = localStorage.getItem("userId");
        if (storedUserId) {
          setUserId(storedUserId);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleChoosePlan = async (plan: FundingPlan) => {
    if (!userId) {
      alert("⚠️ Please login first!");
      return;
    }

    setSelectedPlan(plan._id);
    setIsProcessing(true);

    try {
      // Create Razorpay order
      const res = await fetch("/api/razorpay/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: userId,
          campaignId: campaign?._id,
          fundingPlanId: plan._id,
          totalAmount: plan.amount_cents, // Convert from paise to rupees
        }),
      });

      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.message || "Failed to create payment");
      }
      
      // Initialize Razorpay payment
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: data.razorpayOrder.amount,
        currency: "INR",
        name: "NGO Crowdfunding",
        description: `Donation for ${campaign?.title}`,
        order_id: data.razorpayOrder.id,
        handler: async function (response: any) {
          try {
            // Verify payment
            const verifyRes = await fetch("/api/razorpay/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                orderId: data.orderId,
                userId: userId,
              }),
            });

            const verifyData = await verifyRes.json();
            
            if (verifyRes.ok) {
              alert("✅ Payment successful! Thank you for your donation.");
              // Refresh campaign data to show updated amount
              window.location.reload();
            } else {
              alert("❌ Payment verification failed: " + verifyData.message);
            }
          } catch (err) {
            console.error("Error verifying payment:", err);
            alert("❌ Payment verification failed. Please contact support.");
          } finally {
            setIsProcessing(false);
            setSelectedPlan(null);
          }
        },
        prefill: {
          name: "",
          email: "",
          contact: "",
        },
        theme: {
          color: "#4F46E5", // Indigo color for better UI
        },
        modal: {
          ondismiss: function() {
            setIsProcessing(false);
            setSelectedPlan(null);
          }
        }
      };

      // @ts-ignore - Razorpay is loaded via script
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
      
    } catch (err) {
      console.error("Error initiating payment:", err);
      alert("❌ Something went wrong. Try again later.");
      setIsProcessing(false);
      setSelectedPlan(null);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-50">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-16 w-16 rounded-full bg-indigo-200 mb-4"></div>
          <div className="h-6 w-48 bg-indigo-200 rounded mb-4"></div>
          <div className="h-4 w-64 bg-gray-200 rounded mb-3"></div>
          <div className="h-4 w-56 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (!campaign) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-50">
        <div className="bg-white p-8 rounded-xl shadow-md max-w-md w-full text-center">
          <div className="text-red-500 text-5xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Campaign Not Found</h2>
          <p className="text-gray-600 mb-6">The campaign you're looking for doesn't exist or has been removed.</p>
          <Link href="/campaign" className="inline-flex items-center justify-center bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
            Browse Campaigns
          </Link>
        </div>
      </div>
    );
  }

  const percentFunded = Math.round(
    (campaign.collected_amount / campaign.goal_amount) * 100
  );

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-8 lg:px-20">
      {/* Razorpay Script */}
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="lazyOnload"
      />
      
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link href="/campaigns" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors">
            <span className="mr-2">←</span>
            Back to Campaigns
          </Link>
        </div>
        
        <div className="bg-white p-8 rounded-2xl shadow-md mb-8">
          <h1 className="text-3xl font-bold mb-2">{campaign.title}</h1>
          {campaign.ngo_name && (
            <p className="text-sm text-gray-500 mb-4">By {campaign.ngo_name}</p>
          )}
          
          <div className="bg-indigo-50 rounded-xl p-6 mb-6">
            <div className="flex flex-wrap items-end justify-between mb-2">
              <div>
                <span className="block text-3xl font-bold text-indigo-600">₹{campaign.collected_amount.toLocaleString()}</span>
                <span className="text-sm text-gray-500">raised of ₹{campaign.goal_amount.toLocaleString()} goal</span>
              </div>
              <div className="text-right">
                <span className={`text-2xl font-bold ${percentFunded >= 100 ? 'text-green-600' : 'text-indigo-600'}`}>
                  {percentFunded}%
                </span>
                <span className="block text-sm text-gray-500">funded</span>
              </div>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-3 mb-4 overflow-hidden">
              <div
                className={`h-3 rounded-full ${percentFunded >= 100 ? 'bg-green-500' : 'bg-indigo-600'}`}
                style={{ width: `${Math.min(percentFunded, 100)}%` }}
              ></div>
            </div>
          </div>
          
          <div className="prose max-w-none mb-8">
            <p className="text-gray-700 text-lg leading-relaxed">{campaign.description}</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose a Funding Plan</h2>
          
          {plans.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {plans.map((plan) => (
                <div key={plan._id} className="border border-gray-200 rounded-xl p-6 hover:border-indigo-300 hover:shadow-md transition-all">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                  <div className="flex justify-between items-end mb-6">
                    <span className="text-3xl font-bold text-indigo-600">₹{plan.amount_cents.toLocaleString()}</span>
                    <span className="text-gray-500">{plan.interval}</span>
                  </div>
                  <button
                    onClick={() => handleChoosePlan(plan)}
                    disabled={isProcessing}
                    className={`w-full flex items-center justify-center py-3 px-4 rounded-lg font-medium transition-colors ${isProcessing && selectedPlan === plan._id
                      ? 'bg-indigo-100 text-indigo-400 cursor-not-allowed'
                      : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                    }`}
                  >
                    {isProcessing && selectedPlan === plan._id ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      'Choose Plan'
                    )}
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8">No funding plans available for this campaign.</p>
          )}
          
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              Your donation is secure and will directly support this campaign. Once payment is complete, you'll receive a confirmation email with details of your contribution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetailsPage;
