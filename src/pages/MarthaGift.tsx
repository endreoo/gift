import React, { useState } from 'react';
import { Gift, Plane, Map, Compass } from 'lucide-react';
import Countdown from '../components/Countdown';
import Snowfall from '../components/Snowfall';

export default function MarthaGift() {
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
              Merry Christmas, My Dear Martha!
            </h1>
            <h2 className="text-2xl text-center mb-4 text-yellow-300">
              To My Amazing Partner in Life and Adventure
            </h2>
            <div className="space-y-6 text-center">
              <p className="text-xl animate-fade-in">
                Here is 50,000 KES for your travel fund! Let's explore the world 
                together - whether it's just us two on a romantic getaway or a 
                family adventure with Tor. The world is waiting for us! 🌎
              </p>
              <p className="text-lg animate-fade-in">
                I can't wait to plan our next adventures together. Whether we're 
                discovering new places as a couple or sharing the joy of travel 
                with Tor, every journey is special because I get to share it 
                with you! ✨
              </p>
              <div className="flex justify-center gap-6">
                <Plane className="w-8 h-8 animate-fly" />
                <Map className="w-8 h-8 animate-sway" />
                <Compass className="w-8 h-8 animate-spin-slow" />
              </div>
              <p className="text-lg italic mt-8">
                With all my love and wanderlust,<br/>
                Your Travel Partner Forever ❤️
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}