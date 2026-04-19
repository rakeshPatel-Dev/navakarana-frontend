import { Plus, Search, UserRound } from "lucide-react"

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
import { users } from "@/features/admin/data/mockData"

const userStats = [
  { label: "Total Users", value: "23", tone: "red" },
  { label: "Active Users", value: "19", tone: "green" },
  { label: "Invited Users", value: "2", tone: "blue" },
  { label: "Inactive Users", value: "2", tone: "slate" },
]

function UsersPage() {
  return (
    <AdminShell
      title="Users"
      subtitle="Manage platform access and subscriber accounts"
      action={
        <Button className="bg-red-600 text-white hover:bg-red-500">
          <Plus /> Add User
        </Button>
      }
    >
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {userStats.map((stat) => (
          <Card key={stat.label} className="border border-blue-900/30 bg-slate-950/85">
            <CardContent className="p-5">
              <p className="text-sm text-zinc-400">{stat.label}</p>
              <p className="mt-2 text-4xl font-bold text-white">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <FilterPanel>
        <div className="grid gap-3 lg:grid-cols-[1.8fr_0.7fr_0.7fr]">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-zinc-500" />
            <Input className="bg-slate-900 pl-9" placeholder="Search by name or email..." />
          </div>
          <FilterSelect placeholder="All Roles" options={["All Roles", "Customer", "Editor"]} />
          <FilterSelect placeholder="All Status" options={["All Status", "Active", "Invited", "Inactive"]} />
        </div>
      </FilterPanel>

      <Card className="border border-blue-900/30 bg-slate-950/85">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="px-4 py-4 text-base text-zinc-300">User</TableHead>
                <TableHead className="px-4 py-4 text-base text-zinc-300">Role</TableHead>
                <TableHead className="px-4 py-4 text-base text-zinc-300">Plan</TableHead>
                <TableHead className="px-4 py-4 text-base text-zinc-300">Last Active</TableHead>
                <TableHead className="px-4 py-4 text-base text-zinc-300">Revenue</TableHead>
                <TableHead className="px-4 py-4 text-base text-zinc-300">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.email}>
                  <TableCell className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="grid size-11 place-items-center rounded-2xl border border-white/10 bg-red-950/60 text-sm font-semibold text-white">
                        <UserRound className="size-5" />
                      </div>
                      <div>
                        <p className="text-base font-semibold text-white">{user.name}</p>
                        <p className="text-sm text-zinc-400">{user.email}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-4 py-4 text-base text-zinc-300">{user.role}</TableCell>
                  <TableCell className="px-4 py-4 text-base text-zinc-300">{user.plan}</TableCell>
                  <TableCell className="px-4 py-4 text-base text-zinc-300">{user.lastActive}</TableCell>
                  <TableCell className="px-4 py-4 text-base font-semibold text-emerald-400">{user.revenue}</TableCell>
                  <TableCell className="px-4 py-4">
                    <StatusPill
                      label={user.status}
                      tone={user.status === "Active" ? "green" : user.status === "Invited" ? "blue" : "slate"}
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

export default UsersPage
