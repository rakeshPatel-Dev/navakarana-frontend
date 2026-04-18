import {
  BadgeDollarSign,
  CircleUserRound,
  DiscAlbum,
  LayoutDashboard,
  LibraryBig,
  Music2,
  ShoppingCart,
  Tags,
  Ticket,
  Users,
  Video,
} from "lucide-react"

const navigationItems = [
  { label: "Dashboard", href: "/", icon: LayoutDashboard },
  { label: "Music Library", href: "/music-library", icon: Music2 },
  { label: "Video Library", href: "/video-library", icon: Video },
  { label: "Artists", href: "/artists", icon: Users },
  { label: "Albums", href: "/albums", icon: DiscAlbum },
  { label: "Genres", href: "/genres", icon: Tags },
  { label: "Users", href: "/users", icon: CircleUserRound },
  { label: "Subscriptions", href: "/subscriptions", icon: BadgeDollarSign },
  { label: "Subscription Plans", href: "/subscription-plans", icon: LibraryBig },
  { label: "Purchases", href: "/purchases", icon: ShoppingCart },
  { label: "Coupons", href: "/coupons", icon: Ticket },
]

export { navigationItems }