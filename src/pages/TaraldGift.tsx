import React, { useState } from 'react';
import { Gift, Code2 } from 'lucide-react';
import Countdown from '../components/Countdown';
import Snowfall from '../components/Snowfall';

export default function TaraldGift() {
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
              God Jul!
            </h1>
            <h2 className="text-2xl text-center mb-4">
              Til Tarald
            </h2>
            <div className="space-y-6 text-center">
              <p className="text-xl animate-fade-in">
                Her er 500 NOK til programmeringsverktøy som bolt.new eller Cursor! 
                Håper disse verktøyene vil gjøre kodingen din enda mer effektiv 
                og morsom! 🎄💻
              </p>
              <div className="flex justify-center gap-4">
                <Code2 className="w-8 h-8 animate-fly" />
              </div>
              <p className="text-lg italic mt-8">
                Med kjærlig hilsen fra Opdal-familien i Kenya ❤️
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}