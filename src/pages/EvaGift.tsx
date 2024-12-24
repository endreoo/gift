import React, { useState } from 'react';
import { Gift, PiggyBank } from 'lucide-react';
import Countdown from '../components/Countdown';
import Snowfall from '../components/Snowfall';

export default function EvaGift() {
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
              God Jul, Kjære Eva!
            </h1>
            <h2 className="text-2xl text-center mb-4 text-yellow-300">
              Vår Fantastiske Datter
            </h2>
            <div className="space-y-6 text-center">
              <p className="text-xl animate-fade-in">
                Her er 30,000 KES som du kan bruke akkurat som du vil! 
                Kanskje starte en sparekonto for fremtiden, eller unne 
                deg noe gøy? Valget er ditt! 🎄
              </p>
              <p className="text-lg animate-fade-in">
                Om du velger å spare litt og kose deg litt, eller gjøre 
                noe helt annet - vi støtter deg! Det er så fint å se 
                hvor ansvarsfull og reflektert du er! ✨
              </p>
              <div className="flex justify-center gap-4">
                <PiggyBank className="w-8 h-8 animate-sway" />
              </div>
              <p className="text-lg italic mt-8">
                Med masse kjærlighet,<br/>
                Pappa og Mamma ❤️
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}