import { BadgeDollarSign, RefreshCcw, Search, Users2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { AdminShell } from "@/features/admin/components/AdminShell"
import { FilterPanel, FilterSelect, StatusPill } from "@/features/admin/components/UiBlocks"
import { activeSubscriptionsByPlan, recentSubscriptions, subscriptionPlanStats } from "@/features/admin/data/mockData"

const subscriptionHistory = [
  { name: "Anjali Shah", email: "anjali.shah@gmail.com", plan: "Premium Monthly", amount: "$9.99", cycle: "Monthly", started: "Apr 18, 2026", status: "Active" },
  { name: "Rahul Desai", email: "rahul.desai@gmail.com", plan: "Premium Yearly", amount: "$89.00", cycle: "Yearly", started: "Apr 17, 2026", status: "Active" },
  { name: "Poojan Rawal", email: "poojan.rawal@gmail.com", plan: "Free", amount: "$0.00", cycle: "Free", started: "Apr 16, 2026", status: "Invited" },
  { name: "Vikram Patel", email: "vikram.patel@gmail.com", plan: "Premium Monthly", amount: "$9.99", cycle: "Monthly", started: "Apr 15, 2026", status: "Paused" },
]

function SubscriptionsPage() {
  return (
    <AdminShell
      title="Subscriptions"
      subtitle="Monitor active members and recurring billing"
      action={
        <Button className="bg-red-600 text-white hover:bg-red-500">
          <RefreshCcw /> Sync Billing
        </Button>
      }
    >
      <section className="grid gap-4 md:grid-cols-3">
        {subscriptionPlanStats.map((stat) => (
          <Card key={stat.label} className="border border-blue-900/30 bg-slate-950/85">
            <CardContent className="p-5">
              <p className="text-sm text-zinc-400">{stat.label}</p>
              <p className="mt-2 text-4xl font-bold text-white">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="grid gap-4 xl:grid-cols-[1fr_0.85fr]">
        <Card className="border border-blue-900/30 bg-slate-950/85">
          <CardContent className="p-5">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <h2 className="text-3xl font-bold text-white">Active subscriptions by plan</h2>
                <p className="text-base text-zinc-400">Current plan distribution across subscribers</p>
              </div>
              <StatusPill label="Live" tone="green" />
            </div>
            <div className="space-y-3">
              {activeSubscriptionsByPlan.map((item) => (
                <div key={item.title} className="rounded-xl border border-white/10 bg-slate-900/70 px-4 py-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xl font-semibold text-white">{item.title}</p>
                      <p className="text-sm text-zinc-400">{item.subtitle}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-white">{item.value}</p>
                      <p className="text-sm text-zinc-400">share of active base</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border border-blue-900/30 bg-slate-950/85">
          <CardContent className="p-5">
            <div className="flex items-center gap-3">
              <div className="grid size-12 place-items-center rounded-2xl bg-red-950/70 text-white">
                <BadgeDollarSign className="size-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">Revenue snapshot</p>
                <p className="text-base text-zinc-400">Latest subscriber activity</p>
              </div>
            </div>
            <div className="mt-5 space-y-3">
              {recentSubscriptions.map((item) => (
                <div key={item.email} className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-900/70 px-4 py-4">
                  <div>
                    <p className="text-base font-semibold text-white">{item.name}</p>
                    <p className="text-sm text-zinc-400">{item.plan}</p>
                  </div>
                  <p className="text-sm text-zinc-400">{item.when}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <FilterPanel>
        <div className="grid gap-3 lg:grid-cols-[1.8fr_0.8fr_0.8fr]">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-zinc-500" />
            <Input className="bg-slate-900 pl-9" placeholder="Search by subscriber, email, or plan..." />
          </div>
          <FilterSelect placeholder="All Plans" options={["All Plans"]} />
          <FilterSelect placeholder="All Status" options={["All Status"]} />
        </div>
      </FilterPanel>

      <Card className="border border-blue-900/30 bg-slate-950/85">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="px-4 py-4 text-base text-zinc-300">Subscriber</TableHead>
                <TableHead className="px-4 py-4 text-base text-zinc-300">Plan</TableHead>
                <TableHead className="px-4 py-4 text-base text-zinc-300">Amount</TableHead>
                <TableHead className="px-4 py-4 text-base text-zinc-300">Cycle</TableHead>
                <TableHead className="px-4 py-4 text-base text-zinc-300">Started</TableHead>
                <TableHead className="px-4 py-4 text-base text-zinc-300">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {subscriptionHistory.map((subscription) => (
                <TableRow key={subscription.email}>
                  <TableCell className="px-4 py-4">
                    <p className="text-base font-semibold text-white">{subscription.name}</p>
                    <p className="text-sm text-zinc-400">{subscription.email}</p>
                  </TableCell>
                  <TableCell className="px-4 py-4 text-base text-zinc-300">{subscription.plan}</TableCell>
                  <TableCell className="px-4 py-4 text-base font-semibold text-emerald-400">{subscription.amount}</TableCell>
                  <TableCell className="px-4 py-4 text-base text-zinc-300">{subscription.cycle}</TableCell>
                  <TableCell className="px-4 py-4 text-base text-zinc-300">{subscription.started}</TableCell>
                  <TableCell className="px-4 py-4">
                    <StatusPill
                      label={subscription.status}
                      tone={subscription.status === "Active" ? "green" : subscription.status === "Invited" ? "blue" : "yellow"}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </AdminShell>
  )
}

export default SubscriptionsPage
