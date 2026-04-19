import heroImage from "@/assets/hero.png"

const dashboardStats = [
  { label: "Total Revenue", value: "$148.50", note: "+$0.00 this week", tone: "red" },
  { label: "Monthly Recurring Revenue", value: "$90.60", note: "8 active subscribers", tone: "green" },
  { label: "Total Users", value: "24", note: "+2 this week", tone: "blue" },
  { label: "Total Music", value: "19", note: "19 active", tone: "slate" },
]

const activeSubscriptionsByPlan = [
  { title: "Premium Monthly", subtitle: "8 subscribers", value: "100.0%" },
  { title: "Premium Yearly", subtitle: "3 subscribers", value: "37.5%" },
]

const mostPlayedSongs = [
  { title: "Hifumi", artist: "Dario Calvaruso", plays: 0, cover: heroImage },
  { title: "Kuyo Prakriya", artist: "Dario Calvaruso", plays: 0, cover: heroImage },
  { title: "Kyorei", artist: "Dario Calvaruso & Andrea Fernandez", plays: 0, cover: heroImage },
  { title: "Kuyo Suizen", artist: "Dario Calvaruso & Andrea Fernandez", plays: 0, cover: heroImage },
  { title: "Tamuke", artist: "Dario Calvaruso", plays: 0, cover: heroImage },
]

const recentSubscriptions = [
  { name: "test", email: "test98@gmail.com", plan: "Premium Monthly", when: "1 day ago" },
  { name: "test", email: "test98@gmail.com", plan: "Premium Monthly", when: "2 weeks ago" },
  { name: "vdvdvd", email: "ggg@gmail.com", plan: "Premium Monthly", when: "1 month ago" },
  { name: "hey", email: "hey@gmail.com", plan: "Premium Monthly", when: "2 months ago" },
  { name: "test", email: "test98@gmail.com", plan: "Premium Monthly", when: "2 months ago" },
  { name: "dummy", email: "dymmy@gmail.com", plan: "Premium Monthly", when: "2 months ago" },
  { name: "some", email: "some@gmail.com", plan: "Premium Yearly", when: "2 months ago" },
  { name: "something", email: "something@gmail.com", plan: "Premium Monthly", when: "2 months ago" },
  { name: "demo123", email: "demo124@gmail.com", plan: "Premium Yearly", when: "2 months ago" },
  { name: "testing", email: "payment@gmail.com", plan: "Premium Yearly", when: "2 months ago" },
]

const topSellingSongs = [
  { title: "Suddhikarana - Continuous Stream - F-432Hz", price: "$13.50", sales: 4, cover: heroImage },
  { title: "Kuyo Suizen", price: "$4.50", sales: 3, cover: heroImage },
  { title: "Tamuke", price: "$4.50", sales: 3, cover: heroImage },
  { title: "Tengokuhenokaidan", price: "$4.50", sales: 3, cover: heroImage },
  { title: "Hifumi", price: "$4.50", sales: 2, cover: heroImage },
]

const videoItems = [
  {
    title: "Tengokuhe no kaidan",
    artist: "Dario Calvaruso",
    quality: "1080p",
    status: "Active",
    views: 3,
    price: "$0.00",
    cover: heroImage,
  },
]

const artists = [
  {
    name: "Dario Calvaruso & Andrea Fernandez",
    bio: "Shakuhachi: Dario Calvaruso Cello: Andrea Fernandez",
    tracks: 4,
    status: "Active",
    cover: heroImage,
  },
  {
    name: "Dario Calvaruso",
    bio: "Musician and Composer",
    tracks: 4,
    status: "Active",
    cover: heroImage,
  },
  {
    name: "Navakarana",
    bio: "Navakarana, Dario Calvaruso",
    tracks: 0,
    status: "Active",
    cover: heroImage,
  },
]

const users = [
  {
    name: "Anjali Shah",
    email: "anjali.shah@gmail.com",
    role: "Customer",
    plan: "Premium Monthly",
    lastActive: "2 minutes ago",
    status: "Active",
    revenue: "$9.99",
  },
  {
    name: "Rahul Desai",
    email: "rahul.desai@gmail.com",
    role: "Customer",
    plan: "Premium Yearly",
    lastActive: "14 minutes ago",
    status: "Active",
    revenue: "$89.00",
  },
  {
    name: "Poojan Rawal",
    email: "poojan.rawal@gmail.com",
    role: "Editor",
    plan: "Free",
    lastActive: "1 day ago",
    status: "Invited",
    revenue: "$0.00",
  },
  {
    name: "Vikram Patel",
    email: "vikram.patel@gmail.com",
    role: "Customer",
    plan: "Premium Monthly",
    lastActive: "3 days ago",
    status: "Inactive",
    revenue: "$9.99",
  },
]

const albums = [
  {
    title: "Suddhikarana - Continuous Stream",
    description: "F-432Hz uninterrupted continuous streaming.",
    tracks: 1,
    status: "Active",
    cover: heroImage,
  },
  {
    title: "Suddhikarana - Continuous Stream A#",
    description: "A#-432Hz uninterrupted continuous streaming.",
    tracks: 1,
    status: "Active",
    cover: heroImage,
  },
  {
    title: "Music Clip",
    description: "No description available",
    tracks: 0,
    status: "Active",
    cover: heroImage,
  },
  {
    title: "Suddhikarana F-432Hz",
    description: "Music for emotional catharsis",
    tracks: 3,
    status: "Active",
    cover: heroImage,
  },
]

const genres = [
  {
    name: "Fuke-suizen",
    description: "Zen Koten Kyoku - ancient musical piece for Zen practices",
    tracks: 8,
    color: "#96191a",
    status: "Active",
  },
  {
    name: "Frequency",
    description: "Dario Calvaruso's selected frequencies for Navakarana Prakriya-s",
    tracks: 0,
    color: "#96191a",
    status: "Active",
  },
  {
    name: "Song",
    description: "No description available",
    tracks: 0,
    color: "#d62626",
    status: "Active",
  },
]

const subscriptionPlanStats = [
  { label: "Total Plans", value: "3", tone: "purple" },
  { label: "Active Plans", value: "3", tone: "green" },
  { label: "Total Subscribers", value: "10", tone: "blue" },
]

const subscriptionPlans = [
  {
    name: "Premium Monthly",
    description: "Access to all music with monthly billing",
    price: "$8.20",
    period: "Monthly",
    activeSubscribers: 7,
    trial: "7 days",
    billingPeriod: "Month",
    features: [
      "Unlimited access to all music",
      "Download for offline listening",
      "Ad-free experience",
      "High quality audio",
      "Cancel anytime",
    ],
    featured: false,
  },
  {
    name: "Premium Yearly",
    description: "Access to all music with yearly billing (Save 17%)",
    price: "$99.99",
    period: "Yearly",
    activeSubscribers: 3,
    trial: "7 days",
    billingPeriod: "Year",
    features: [
      "Unlimited access to all music",
      "Download for offline listening",
      "Ad-free experience",
      "High quality audio",
      "Save $20 per year",
      "Cancel anytime",
    ],
    featured: true,
  },
  {
    name: "Premium Lifetime",
    description: "One-time payment for lifetime access",
    price: "$199.99",
    period: "One-time",
    activeSubscribers: 0,
    trial: "0 days",
    billingPeriod: "Lifetime",
    features: [
      "Lifetime unlimited access",
      "Download for offline listening",
      "Ad-free experience",
      "High quality audio",
      "All future features included",
      "Best value for long-term users",
    ],
    featured: false,
  },
]

const couponStats = [
  { label: "Total Coupons", value: "2", tone: "purple" },
  { label: "Active", value: "0", tone: "green" },
  { label: "Redeemed", value: "2", tone: "blue" },
  { label: "Expired", value: "2", tone: "slate" },
]

const coupons = [
  {
    code: "abc11",
    name: "fff",
    assignedTo: "demo",
    email: "demo1234@gmail.com",
    songs: 2,
    access: "1 days",
    expires: "Feb 24, 2026",
    status: "Redeemed",
  },
  {
    code: "poojan1234",
    name: "Poojan Rawal",
    assignedTo: "test",
    email: "test66@test.com",
    songs: 2,
    access: "5 days",
    expires: "Feb 24, 2026",
    status: "Redeemed",
  },
]

const purchases = [
  {
    id: "TXN-CPNJSMAL5KAN",
    user: "vdvdvd",
    email: "ggg@gmail.com",
    music: "Kuyo Suizen",
    artist: "Dario Calvaruso & Andrea Fernandez",
    amount: "$4.50",
    status: "Completed",
    date: "2 weeks ago",
    time: "07:54 AM",
  },
  {
    id: "TXN-ARANZ4H15ZBT",
    user: "vdvdvd",
    email: "ggg@gmail.com",
    music: "Tamuke",
    artist: "Dario Calvaruso",
    amount: "$4.50",
    status: "Completed",
    date: "2 weeks ago",
    time: "07:50 AM",
  },
  {
    id: "TXN-LQEPWLTCEDWT",
    user: "vdvdvd",
    email: "ggg@gmail.com",
    music: "Tengokuhenokaidan",
    artist: "Dario Calvaruso",
    amount: "$4.50",
    status: "Completed",
    date: "2 weeks ago",
    time: "07:47 AM",
  },
  {
    id: "TXN-QKSW0J3R3KE6",
    user: "vdvdvd",
    email: "ggg@gmail.com",
    music: "Suddhikarana - Continuous Stream - F-432Hz",
    artist: "Dario Calvaruso & Andrea Fernandez",
    amount: "$13.50",
    status: "Completed",
    date: "2 weeks ago",
    time: "07:44 AM",
  },
  {
    id: "TXN-C052D81IUXXH",
    user: "hey",
    email: "hey@gmail.com",
    music: "Kuyo Prakriya",
    artist: "Dario Calvaruso",
    amount: "$4.50",
    status: "Completed",
    date: "2 weeks ago",
    time: "07:41 AM",
  },
  {
    id: "TXN-ZTGJ5I3NWIEX",
    user: "hey",
    email: "hey@gmail.com",
    music: "Hifumi",
    artist: "Dario Calvaruso",
    amount: "$4.50",
    status: "Completed",
    date: "2 weeks ago",
    time: "07:37 AM",
  },
  {
    id: "TXN-1XCAQM6YF14D",
    user: "hey",
    email: "hey@gmail.com",
    music: "Kyorei",
    artist: "Dario Calvaruso & Andrea Fernandez",
    amount: "$4.50",
    status: "Completed",
    date: "2 weeks ago",
    time: "07:33 AM",
  },
  {
    id: "TXN-XHXYCUE4ANZA",
    user: "hey",
    email: "hey@gmail.com",
    music: "Kuyo Suizen",
    artist: "Dario Calvaruso & Andrea Fernandez",
    amount: "$4.50",
    status: "Completed",
    date: "2 weeks ago",
    time: "07:31 AM",
  },
  {
    id: "TXN-PA60WJZZCIOI",
    user: "hey",
    email: "hey@gmail.com",
    music: "ASharp432Hz Suddhikarana Continuous Streaming",
    artist: "Dario Calvaruso",
    amount: "$13.50",
    status: "Completed",
    date: "2 weeks ago",
    time: "07:25 AM",
  },
  {
    id: "TXN-KAEDE35SRWIU",
    user: "hey",
    email: "hey@gmail.com",
    music: "Tamuke",
    artist: "Dario Calvaruso",
    amount: "$4.50",
    status: "Completed",
    date: "2 weeks ago",
    time: "07:21 AM",
  },
]

export {
  activeSubscriptionsByPlan,
  albums,
  artists,
  couponStats,
  coupons,
  dashboardStats,
  genres,
  mostPlayedSongs,
  purchases,
  recentSubscriptions,
  subscriptionPlanStats,
  subscriptionPlans,
  users,
  topSellingSongs,
  videoItems,
}
