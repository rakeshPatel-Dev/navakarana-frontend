import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home.jsx"
import Albums from "./pages/Albums.jsx"
import Coupons from "./pages/Coupons.jsx"
import Genres from "./pages/Genres.jsx"
import Artists from "./pages/Artists.jsx"
import MusicLibrary from "./pages/MusicLibrary.jsx"
import Purchases from "./pages/Purchases.jsx"
import SubscriptionPlans from "./pages/SubscriptionPlans.jsx"
import Subscriptions from "./pages/Subscriptions.jsx"
import Users from "./pages/Users.jsx"
import VideoLibrary from "./pages/VideoLibrary.jsx"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/music-library" element={<MusicLibrary />} />
      <Route path="/artists" element={<Artists />} />
      <Route path="/albums" element={<Albums />} />
      <Route path="/genres" element={<Genres />} />
      <Route path="/users" element={<Users />} />
      <Route path="/subscriptions" element={<Subscriptions />} />
      <Route path="/subscription-plans" element={<SubscriptionPlans />} />
      <Route path="/purchases" element={<Purchases />} />
      <Route path="/coupons" element={<Coupons />} />
      <Route path="/video-library" element={<VideoLibrary />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}