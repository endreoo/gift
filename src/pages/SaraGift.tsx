import React, { useState } from 'react';
import { Gift, Sparkles } from 'lucide-react';
import Countdown from '../components/Countdown';
import Snowfall from '../components/Snowfall';

export default function SaraGift() {
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
              God Jul, Kjære Sara!
            </h1>
            <h2 className="text-2xl text-center mb-4 text-yellow-300">
              Min Fantastiske Datter
            </h2>
            <div className="space-y-6 text-center">
              <p className="text-xl animate-fade-in">
                Her er 2000 NOK til å fylle dagene dine med glede og energi! 
                Jeg vet at den siste delen av studiene kan være krevende, 
                men du er så utrolig sterk og dyktig. 🌟
              </p>
              <p className="text-lg animate-fade-in">
                Bruk denne gaven til å gjøre noe gøy som gir deg påfyll av energi 
                - enten det er en aktivitet du elsker, noe godt å spise, eller 
                bare noe som får deg til å smile. Du fortjener det! ✨
              </p>
              <div className="flex justify-center gap-4">
                <Sparkles className="w-8 h-8 animate-fly" />
              </div>
              <p className="text-lg italic mt-8">
                Med stor kjærlighet og tro på deg,<br/>
                Pappa ❤️
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}