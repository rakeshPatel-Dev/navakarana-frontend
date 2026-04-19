import { BarChart3, CalendarClock, DollarSign, Music2, ScrollText } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { AdminShell } from "@/features/admin/components/AdminShell"
import { MetricCard } from "@/features/admin/components/UiBlocks"
import {
  activeSubscriptionsByPlan,
  dashboardStats,
  mostPlayedSongs,
  purchases,
  recentSubscriptions,
  topSellingSongs,
} from "@/features/admin/data/mockData"

function DashboardPage() {
  return (
    <AdminShell
      title="Welcome back, Admin"
      subtitle="Here's what's happening with your music today"
      dateLabel="Sunday, April 19, 2026"
    >
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((stat) => (
          <MetricCard key={stat.label} label={stat.label} value={stat.value} tone={stat.tone} />
        ))}
      </section>

      <section className="grid gap-4 xl:grid-cols-[1.05fr_1fr]">
        <Card className="border border-blue-900/30 bg-slate-950/85">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-4xl font-bold text-white max-md:text-2xl">
              <BarChart3 className="size-6 text-fuchsia-400" />
              Active Subscriptions by Plan
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {activeSubscriptionsByPlan.map((item) => (
              <div key={item.title} className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-900/70 px-4 py-4">
                <div className="min-w-0">
                  <p className="truncate text-3xl font-semibold text-white max-md:text-xl">{item.title}</p>
                  <p className="text-base text-zinc-400">{item.subtitle}</p>
                </div>
                <p className="text-3xl font-bold text-white max-md:text-xl">{item.value}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border border-blue-900/30 bg-slate-950/85">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-4xl font-bold text-white max-md:text-2xl">
              <Music2 className="size-6 text-red-400" />
              Most Played Songs
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {mostPlayedSongs.map((song) => (
              <div key={song.title} className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-900/70 px-3 py-3">
                <img src={song.cover} alt={song.title} className="size-14 rounded-lg object-cover" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-3xl font-semibold text-white max-md:text-xl">{song.title}</p>
                  <p className="truncate text-base text-zinc-400">{song.artist}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-white">{song.plays}</p>
                  <p className="text-sm text-zinc-400">plays</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-4 xl:grid-cols-[1.05fr_1fr]">
        <Card className="border border-blue-900/30 bg-slate-950/85">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-4xl font-bold text-white max-md:text-2xl">
              <CalendarClock className="size-6 text-emerald-400" />
              Recent Subscriptions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentSubscriptions.map((item) => (
              <div key={item.email} className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-900/70 px-4 py-4">
                <div className="min-w-0">
                  <p className="truncate text-xl font-semibold text-white">{item.name}</p>
                  <p className="text-base text-zinc-400">{item.email}</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-semibold text-emerald-400">{item.plan}</p>
                  <p className="text-base text-zinc-400">{item.when}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border border-blue-900/30 bg-slate-950/85">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-4xl font-bold text-white max-md:text-2xl">
              <DollarSign className="size-6 text-emerald-400" />
              Top Selling Songs
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {topSellingSongs.map((song) => (
              <div key={song.title} className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-900/70 px-3 py-3">
                <img src={song.cover} alt={song.title} className="size-14 rounded-lg object-cover" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-3xl font-semibold text-white max-md:text-xl">{song.title}</p>
                  <p className="text-base text-zinc-400">{song.price}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-white">{song.sales}</p>
                  <p className="text-sm text-zinc-400">sales</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <Card className="border border-blue-900/30 bg-slate-950/85">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-4xl font-bold text-white max-md:text-2xl">
            <ScrollText className="size-6 text-blue-400" />
            Recent Purchases
          </CardTitle>
        </CardHeader>
        <CardContent className="px-0 pb-2">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="px-4 py-4 text-base text-zinc-300">User</TableHead>
                <TableHead className="px-4 py-4 text-base text-zinc-300">Music</TableHead>
                <TableHead className="px-4 py-4 text-base text-zinc-300">Amount</TableHead>
                <TableHead className="px-4 py-4 text-base text-zinc-300">Transaction ID</TableHead>
                <TableHead className="px-4 py-4 text-base text-zinc-300">Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {purchases.map((purchase) => (
                <TableRow key={purchase.id}>
                  <TableCell className="px-4 py-4">
                    <p className="text-xl font-semibold text-white">{purchase.user}</p>
                    <p className="text-sm text-zinc-400">{purchase.email}</p>
                  </TableCell>
                  <TableCell className="px-4 py-4 text-2xl font-semibold text-white max-md:text-base">{purchase.music}</TableCell>
                  <TableCell className="px-4 py-4 text-3xl font-semibold text-emerald-400 max-md:text-xl">{purchase.amount}</TableCell>
                  <TableCell className="px-4 py-4">
                    <span className="rounded-md bg-blue-500/20 px-3 py-1 text-sm text-blue-200">{purchase.id}</span>
                  </TableCell>
                  <TableCell className="px-4 py-4 text-base text-zinc-300">{purchase.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </AdminShell>
  )
}

export default DashboardPage
