import { Plus, Search, Album } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { AdminShell } from "@/features/admin/components/AdminShell"
import { FilterPanel, FilterSelect, StatusPill } from "@/features/admin/components/UiBlocks"
import { albums } from "@/features/admin/data/mockData"

const albumStats = [
  { label: "Total Albums", value: "4", tone: "red" },
  { label: "Published", value: "4", tone: "green" },
  { label: "Drafts", value: "0", tone: "blue" },
  { label: "Total Tracks", value: "5", tone: "slate" },
]

function AlbumsPage() {
  return (
    <AdminShell
      title="Albums"
      subtitle="Organize releases and publishing status"
      action={
        <Button className="bg-red-600 text-white hover:bg-red-500">
          <Plus /> Add Album
        </Button>
      }
    >
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {albumStats.map((stat) => (
          <Card key={stat.label} className="border border-blue-900/30 bg-slate-950/85">
            <CardContent className="p-5">
              <p className="text-sm text-zinc-400">{stat.label}</p>
              <p className="mt-2 text-2xl font-bold tracking-tight text-white md:text-3xl">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <FilterPanel>
        <div className="grid gap-3 lg:grid-cols-[1.9fr_0.8fr_0.8fr]">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-zinc-500" />
            <Input className="bg-slate-900 pl-9" placeholder="Search albums..." />
          </div>
          <FilterSelect placeholder="All Status" options={["All Status"]} />
          <FilterSelect placeholder="Newest First" options={["Newest First"]} />
        </div>
      </FilterPanel>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {albums.map((album) => (
          <Card key={album.title} className="border border-blue-900/30 bg-slate-950/85">
            <CardContent className="p-0">
              <img src={album.cover} alt={album.title} className="h-64 w-full rounded-t-xl object-cover" />
              <div className="space-y-3 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="truncate text-lg font-bold tracking-tight text-white md:text-xl">{album.title}</h3>
                    <p className="mt-1 text-sm text-zinc-400 md:text-base">{album.description}</p>
                  </div>
                  <StatusPill label={album.status} />
                </div>
                <div className="flex items-center justify-between text-sm text-zinc-300 md:text-base">
                  <span className="inline-flex items-center gap-1"><Album className="size-4" /> {album.tracks} tracks</span>
                  <span className="font-semibold text-emerald-400">Published</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <Button className="bg-blue-600 text-white hover:bg-blue-500">View</Button>
                  <Button className="bg-amber-500 text-white hover:bg-amber-400">Edit</Button>
                  <Button className="bg-red-600 text-white hover:bg-red-500">Delete</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
    </AdminShell>
  )
}

export default AlbumsPage
