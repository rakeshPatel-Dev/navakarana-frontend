import { Search, ShoppingCart, CreditCard } from "lucide-react"

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
import { purchases } from "@/features/admin/data/mockData"

const purchaseStats = [
  { label: "Total Purchases", value: "4", tone: "red" },
  { label: "Completed", value: "4", tone: "green" },
  { label: "Refunded", value: "0", tone: "blue" },
  { label: "Revenue", value: "$27.00", tone: "slate" },
]

function PurchasesPage() {
  return (
    <AdminShell
      title="Purchases"
      subtitle="Review one-time music sales and transactions"
      action={
        <Button className="bg-red-600 text-white hover:bg-red-500">
          <CreditCard /> Export Sales
        </Button>
      }
    >
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {purchaseStats.map((stat) => (
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
            <Input className="bg-slate-900 pl-9" placeholder="Search transactions..." />
          </div>
          <FilterSelect placeholder="All Status" options={["All Status"]} />
          <FilterSelect placeholder="Recent First" options={["Recent First"]} />
        </div>
      </FilterPanel>

      <Card className="border border-blue-900/30 bg-slate-950/85">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="px-4 py-4 text-sm font-medium uppercase tracking-wide text-zinc-300">Transaction</TableHead>
                <TableHead className="px-4 py-4 text-sm font-medium uppercase tracking-wide text-zinc-300">Customer</TableHead>
                <TableHead className="px-4 py-4 text-sm font-medium uppercase tracking-wide text-zinc-300">Music</TableHead>
                <TableHead className="px-4 py-4 text-sm font-medium uppercase tracking-wide text-zinc-300">Artist</TableHead>
                <TableHead className="px-4 py-4 text-sm font-medium uppercase tracking-wide text-zinc-300">Amount</TableHead>
                <TableHead className="px-4 py-4 text-sm font-medium uppercase tracking-wide text-zinc-300">Date</TableHead>
                <TableHead className="px-4 py-4 text-sm font-medium uppercase tracking-wide text-zinc-300">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {purchases.map((purchase) => (
                <TableRow key={purchase.id}>
                  <TableCell className="px-4 py-4">
                    <p className="text-sm font-semibold text-white md:text-base">{purchase.id}</p>
                    <p className="text-sm text-zinc-400">{purchase.time}</p>
                  </TableCell>
                  <TableCell className="px-4 py-4">
                    <p className="text-sm font-semibold text-white md:text-base">{purchase.user}</p>
                    <p className="text-sm text-zinc-400">{purchase.email}</p>
                  </TableCell>
                  <TableCell className="px-4 py-4 truncate max-w-50 text-sm text-zinc-300 md:text-base">{purchase.music}</TableCell>
                  <TableCell className="px-4 py-4 truncate max-w-50 text-sm text-zinc-300 md:text-base">{purchase.artist}</TableCell>
                  <TableCell className="px-4 py-4 text-sm font-semibold text-emerald-400 md:text-base">{purchase.amount}</TableCell>
                  <TableCell className="px-4 py-4 text-sm text-zinc-300 md:text-base">{purchase.date}</TableCell>
                  <TableCell className="px-4 py-4">
                    <StatusPill label={purchase.status} tone="green" />
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

export default PurchasesPage
