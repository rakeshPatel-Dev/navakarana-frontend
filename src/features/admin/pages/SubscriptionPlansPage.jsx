import { Check, Crown, Plus, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { AdminShell } from "@/features/admin/components/AdminShell"
import { FilterPanel, FilterSelect, StatusPill } from "@/features/admin/components/UiBlocks"
import { subscriptionPlanStats, subscriptionPlans } from "@/features/admin/data/mockData"

function SubscriptionPlansPage() {
  return (
    <AdminShell
      title="Subscription Plans"
      subtitle="Design pricing tiers and manage plan features"
      action={
        <Button className="bg-red-600 text-white hover:bg-red-500">
          <Plus /> Create Plan
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

      <FilterPanel>
        <div className="grid gap-3 lg:grid-cols-[1.8fr_0.8fr]">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-zinc-500" />
            <Input className="bg-slate-900 pl-9" placeholder="Search subscription plans..." />
          </div>
          <FilterSelect placeholder="All Billing Cycles" options={["All Billing Cycles", "Monthly", "Yearly", "Lifetime"]} />
        </div>
      </FilterPanel>

      <section className="grid gap-4 xl:grid-cols-3">
        {subscriptionPlans.map((plan) => (
          <Card
            key={plan.name}
            className={`border bg-slate-950/85 ${plan.featured ? "border-red-500/60 shadow-[0_0_0_1px_rgba(239,68,68,0.35)]" : "border-blue-900/30"}`}
          >
            <CardContent className="space-y-4 p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-3xl font-bold text-white">{plan.name}</h3>
                  <p className="mt-1 text-base text-zinc-400">{plan.description}</p>
                </div>
                {plan.featured ? <StatusPill label="Featured" tone="yellow" /> : <StatusPill label="Live" tone="green" />}
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                <p className="text-sm text-zinc-400">Price</p>
                <p className="mt-1 text-4xl font-bold text-white">{plan.price}</p>
                <p className="text-base text-zinc-400">{plan.period} billing</p>
              </div>

              <div className="flex flex-wrap gap-3 text-sm text-zinc-300">
                <span className="rounded-full border border-white/10 px-3 py-1">{plan.activeSubscribers} active subscribers</span>
                <span className="rounded-full border border-white/10 px-3 py-1">Trial: {plan.trial}</span>
                <span className="rounded-full border border-white/10 px-3 py-1">Cycle: {plan.billingPeriod}</span>
              </div>

              <div className="space-y-2 rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-base text-zinc-200">
                    <Check className="size-4 text-emerald-400" />
                    {feature}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-2">
                <Button className="bg-blue-600 text-white hover:bg-blue-500">View</Button>
                <Button className="bg-amber-500 text-white hover:bg-amber-400">Edit</Button>
              </div>
              <Button variant="secondary" className="w-full bg-slate-600 text-white hover:bg-slate-500">
                {plan.featured ? <Crown className="size-4" /> : null}
                {plan.featured ? "Promote" : "Deactivate"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>
    </AdminShell>
  )
}

export default SubscriptionPlansPage
