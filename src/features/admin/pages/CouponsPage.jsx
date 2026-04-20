import { Search, Ticket } from "lucide-react"

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
import { couponStats, coupons } from "@/features/admin/data/mockData"

function CouponsPage() {
  return (
    <AdminShell
      title="Coupons"
      subtitle="Track discount codes, assignments, and redemption"
      action={
        <Button className="bg-red-600 text-white hover:bg-red-500">
          <Ticket /> Create Coupon
        </Button>
      }
    >
      <section className="grid gap-4 md:grid-cols-4">
        {couponStats.map((stat) => (
          <Card key={stat.label} className="border border-blue-900/30 bg-slate-950/85">
            <CardContent className="p-5">
              <p className="text-sm text-zinc-400">{stat.label}</p>
              <p className="mt-2 text-2xl font-bold tracking-tight text-white md:text-3xl">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <FilterPanel>
        <div className="grid gap-3 lg:grid-cols-[1.8fr_0.8fr_0.8fr]">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-zinc-500" />
            <Input className="bg-slate-900 pl-9" placeholder="Search coupons or recipients..." />
          </div>
          <FilterSelect placeholder="All Status" options={["All Status", "Redeemed", "Active", "Expired"]} />
          <FilterSelect placeholder="Newest First" options={["Newest First"]} />
        </div>
      </FilterPanel>

      <Card className="border border-blue-900/30 bg-slate-950/85">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="px-4 py-4 text-sm font-medium uppercase tracking-wide text-zinc-300">Code</TableHead>
                <TableHead className="px-4 py-4 text-sm font-medium uppercase tracking-wide text-zinc-300">Recipient</TableHead>
                <TableHead className="px-4 py-4 text-sm font-medium uppercase tracking-wide text-zinc-300">Assigned To</TableHead>
                <TableHead className="px-4 py-4 text-sm font-medium uppercase tracking-wide text-zinc-300">Songs</TableHead>
                <TableHead className="px-4 py-4 text-sm font-medium uppercase tracking-wide text-zinc-300">Access</TableHead>
                <TableHead className="px-4 py-4 text-sm font-medium uppercase tracking-wide text-zinc-300">Expires</TableHead>
                <TableHead className="px-4 py-4 text-sm font-medium uppercase tracking-wide text-zinc-300">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {coupons.map((coupon) => (
                <TableRow key={coupon.code}>
                  <TableCell className="px-4 py-4 text-sm font-semibold text-white md:text-base">{coupon.code}</TableCell>
                  <TableCell className="px-4 py-4">
                    <p className="text-sm font-semibold text-white md:text-base">{coupon.name}</p>
                    <p className="text-sm text-zinc-400">{coupon.email}</p>
                  </TableCell>
                  <TableCell className="px-4 py-4 text-sm text-zinc-300 md:text-base">{coupon.assignedTo}</TableCell>
                  <TableCell className="px-4 py-4 text-sm text-zinc-300 md:text-base">{coupon.songs}</TableCell>
                  <TableCell className="px-4 py-4 text-sm text-zinc-300 md:text-base">{coupon.access}</TableCell>
                  <TableCell className="px-4 py-4 text-sm text-zinc-300 md:text-base">{coupon.expires}</TableCell>
                  <TableCell className="px-4 py-4">
                    <StatusPill label={coupon.status} tone="green" />
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

export default CouponsPage
