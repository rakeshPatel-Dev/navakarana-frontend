import { Plus, Search, Tag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { AdminShell } from "@/features/admin/components/AdminShell"
import { FilterPanel, FilterSelect, StatusPill } from "@/features/admin/components/UiBlocks"
import { genres } from "@/features/admin/data/mockData"

const genreStats = [
  { label: "Total Genres", value: "3", tone: "red" },
  { label: "Active Genres", value: "3", tone: "green" },
  { label: "Total Tracks", value: "8", tone: "blue" },
  { label: "Empty Genres", value: "2", tone: "slate" },
]

function GenresPage() {
  return (
    <AdminShell
      title="Genres"
      subtitle="Curate genre collections and metadata"
      action={
        <Button className="bg-red-600 text-white hover:bg-red-500">
          <Plus /> Add Genre
        </Button>
      }
    >
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {genreStats.map((stat) => (
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
            <Input className="bg-slate-900 pl-9" placeholder="Search genres..." />
          </div>
          <FilterSelect placeholder="All Status" options={["All Status"]} />
        </div>
      </FilterPanel>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {genres.map((genre) => (
          <Card key={genre.name} className="border border-blue-900/30 bg-slate-950/85">
            <CardContent className="space-y-4 p-5">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className="grid size-14 place-items-center rounded-2xl text-white shadow-lg"
                    style={{ backgroundColor: genre.color }}
                  >
                    <Tag className="size-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{genre.name}</h3>
                    <p className="text-sm text-zinc-400">{genre.tracks} tracks</p>
                  </div>
                </div>
                <StatusPill label={genre.status} />
              </div>

              <p className="text-base leading-7 text-zinc-300">{genre.description}</p>

              <div className="grid grid-cols-3 gap-2">
                <Button className="bg-blue-600 text-white hover:bg-blue-500">View</Button>
                <Button className="bg-amber-500 text-white hover:bg-amber-400">Edit</Button>
                <Button className="bg-red-600 text-white hover:bg-red-500">Delete</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
    </AdminShell>
  )
}

export default GenresPage
