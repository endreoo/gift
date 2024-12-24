import React, { useState } from 'react';
import { Gift, Baby, Sparkles } from 'lucide-react';
import Countdown from '../components/Countdown';
import Snowfall from '../components/Snowfall';

export default function TorGift() {
  const [showGift, setShowGift] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-600 to-green-700 text-white">
      {!showGift ? (
        <Countdown onComplete={() => setShowGift(true)} />
      ) : (
        <div className="container mx-auto px-4 py-12 relative">
          <Snowfall />
          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-xl animate-fade-in">
            <div className="flex justify-center mb-6">
              <Gift className="w-16 h-16 animate-bounce text-yellow-300" />
            </div>
            <h1 className="text-4xl font-bold text-center mb-6 animate-slide-up">
              Merry First Christmas, Sweet Tor!
            </h1>
            <h2 className="text-2xl text-center mb-4 text-yellow-300">
              Our Precious Little Boy
            </h2>
            <div className="space-y-6 text-center">
              <p className="text-xl animate-fade-in">
                Here is 30,000 KES for your future! Mummy will help decide 
                whether to save it for something special later or get you 
                something wonderful that you need right now. 🎄
              </p>
              <p className="text-lg animate-fade-in">
                At just one year old, you're already bringing so much joy 
                to our lives. Whether this becomes part of your savings 
                or gets you something special, know that it comes with 
                all our love! ✨
              </p>
              <div className="flex justify-center gap-6">
                <Baby className="w-8 h-8 animate-sway" />
                <Sparkles className="w-8 h-8 animate-spin-slow" />
              </div>
              <p className="text-lg italic mt-8">
                With endless love,<br/>
                Mummy and Daddy ❤️
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}