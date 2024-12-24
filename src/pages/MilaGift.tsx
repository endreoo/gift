import React, { useState } from 'react';
import { Gift, Briefcase } from 'lucide-react';
import Countdown from '../components/Countdown';
import Snowfall from '../components/Snowfall';

export default function MilaGift() {
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
              God Jul, Kjære Mila!
            </h1>
            <h2 className="text-2xl text-center mb-4 text-yellow-300">
              Min Flotte Datter
            </h2>
            <div className="space-y-6 text-center">
              <p className="text-xl animate-fade-in">
                Her er 2000 NOK til å investere i din profesjonelle garderobe! 
                Det gjør meg utrolig stolt å se deg ta dette steget inn i arbeidslivet. 
                Du har jobbet så hardt for dette, og nå er tiden inne for å skinne! 🌟
              </p>
              <p className="text-lg animate-fade-in">
                Måtte disse klærne gi deg den ekstra selvtilliten du fortjener 
                når du tar fatt på denne spennende nye delen av livet ditt. 
                Du kommer til å gjøre det fantastisk! 👔✨
              </p>
              <div className="flex justify-center gap-4">
                <Briefcase className="w-8 h-8 animate-fly" />
              </div>
              <p className="text-lg italic mt-8">
                Med stor kjærlighet og stolthet,<br/>
                Pappa ❤️
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}