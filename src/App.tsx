import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import OddHaraldGift from './pages/OddHaraldGift';
import TonjeGift from './pages/TonjeGift';
import TorsteinGift from './pages/TorsteinGift';
import TaraldGift from './pages/TaraldGift';
import MilaGift from './pages/MilaGift';
import SaraGift from './pages/SaraGift';
import EstherGift from './pages/EstherGift';
import ChristofferGift from './pages/ChristofferGift';
import EvaGift from './pages/EvaGift';
import MarthaGift from './pages/MarthaGift';
import TorGift from './pages/TorGift';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/odd-harald" element={<OddHaraldGift />} />
      <Route path="/tonje" element={<TonjeGift />} />
      <Route path="/torstein" element={<TorsteinGift />} />
      <Route path="/tarald" element={<TaraldGift />} />
      <Route path="/mila" element={<MilaGift />} />
      <Route path="/sara" element={<SaraGift />} />
      <Route path="/esther" element={<EstherGift />} />
      <Route path="/christoffer" element={<ChristofferGift />} />
      <Route path="/eva" element={<EvaGift />} />
      <Route path="/martha" element={<MarthaGift />} />
      <Route path="/tor" element={<TorGift />} />
    </Routes>
  );
}