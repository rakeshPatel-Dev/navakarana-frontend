import { Music2, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { AdminShell } from "@/features/admin/components/AdminShell"
import { FilterPanel, FilterSelect, StatusPill } from "@/features/admin/components/UiBlocks"
import { artists } from "@/features/admin/data/mockData"

function ArtistsPage() {
  return (
    <AdminShell
      title="Artists"
      subtitle="Manage music artists"
      action={
        <Button className="bg-red-600 text-white hover:bg-red-500">
          <Plus /> Add New Artist
        </Button>
      }
    >
      <FilterPanel>
        <div className="grid gap-3 md:grid-cols-[1.9fr_0.9fr]">
          <Input className="bg-slate-900" placeholder="Search artists..." />
          <FilterSelect placeholder="All Status" options={["All Status"]} />
        </div>
        <div className="mt-4 flex items-center gap-3">
          <Button className="bg-red-600 text-white hover:bg-red-500">Apply Filters</Button>
          <Button variant="secondary" className="bg-slate-600 text-white hover:bg-slate-500">Clear</Button>
        </div>
      </FilterPanel>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {artists.map((artist) => (
          <Card key={artist.name} className="border border-blue-900/30 bg-slate-950/85">
            <CardContent className="p-0">
              <div className="relative">
                <img src={artist.cover} alt={artist.name} className="h-72 w-full rounded-t-xl object-cover" />
                <StatusPill label={artist.status} className="absolute right-3 top-3" />
              </div>
              <div className="space-y-2 p-4">
                <h3 className="line-clamp-1 text-xl font-bold tracking-tight text-white md:text-2xl">{artist.name}</h3>
                <p className="line-clamp-2 text-sm text-zinc-300 md:text-base">{artist.bio}</p>
                <p className="inline-flex items-center gap-1 text-sm text-zinc-400 md:text-base">
                  <Music2 className="size-4" /> {artist.tracks} tracks
                </p>
                <Button variant="secondary" className="mt-2 w-full bg-slate-600 text-white hover:bg-slate-500">
                  Deactivate
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
    </AdminShell>
  )
}

export default ArtistsPage
