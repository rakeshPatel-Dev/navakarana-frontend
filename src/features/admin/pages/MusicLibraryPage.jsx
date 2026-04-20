import { Filter, Plus, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { AdminShell } from "@/features/admin/components/AdminShell"
import { FilterPanel, FilterSelect, StatusPill } from "@/features/admin/components/UiBlocks"
import { mostPlayedSongs, topSellingSongs } from "@/features/admin/data/mockData"

const libraryTracks = [
  {
    title: "Suddhikarana - Continuous Stream - F-432Hz",
    artist: "Dario Calvaruso & Andrea Fernandez",
    album: "Suddhikarana - Continuous Stream",
    genre: "Frequency",
    duration: "05:26",
    price: "$13.50",
    status: "Published",
    cover: topSellingSongs[0].cover,
  },
  {
    title: "Kuyo Suizen",
    artist: "Dario Calvaruso & Andrea Fernandez",
    album: "Suddhikarana - Continuous Stream",
    genre: "Fuke-suizen",
    duration: "04:20",
    price: "$4.50",
    status: "Published",
    cover: topSellingSongs[1].cover,
  },
  {
    title: "Tamuke",
    artist: "Dario Calvaruso",
    album: "Music Clip",
    genre: "Song",
    duration: "03:44",
    price: "$4.50",
    status: "Draft",
    cover: mostPlayedSongs[4].cover,
  },
]

function MusicLibraryPage() {
  return (
    <AdminShell
      title="Music Library"
      subtitle="Manage songs, albums, and publishing status"
      action={
        <Button className="bg-red-600 text-white hover:bg-red-500">
          <Plus /> Add Track
        </Button>
      }
    >
      <section className="grid gap-4 md:grid-cols-3">
        <Card className="border border-blue-900/30 bg-slate-950/85">
          <CardContent className="p-5">
            <p className="text-sm text-zinc-400">Total tracks</p>
            <p className="mt-2 text-2xl font-bold tracking-tight text-white md:text-3xl">8</p>
          </CardContent>
        </Card>
        <Card className="border border-blue-900/30 bg-slate-950/85">
          <CardContent className="p-5">
            <p className="text-sm text-zinc-400">Published</p>
            <p className="mt-2 text-2xl font-bold tracking-tight text-white md:text-3xl">7</p>
          </CardContent>
        </Card>
        <Card className="border border-blue-900/30 bg-slate-950/85">
          <CardContent className="p-5">
            <p className="text-sm text-zinc-400">Drafts</p>
            <p className="mt-2 text-2xl font-bold tracking-tight text-white md:text-3xl">1</p>
          </CardContent>
        </Card>
      </section>

      <FilterPanel>
        <div className="grid gap-3 lg:grid-cols-[1.8fr_0.8fr_0.8fr_0.8fr]">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-zinc-500" />
            <Input className="bg-slate-900 pl-9" placeholder="Search tracks, artists, albums..." />
          </div>
          <FilterSelect placeholder="All Genres" options={["All Genres"]} />
          <FilterSelect placeholder="All Status" options={["All Status"]} />
          <FilterSelect placeholder="All Albums" options={["All Albums"]} />
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Button className="bg-red-600 text-white hover:bg-red-500">
            <Filter className="size-4" /> Apply Filters
          </Button>
          <Button variant="secondary" className="bg-slate-600 text-white hover:bg-slate-500">
            Clear Filters
          </Button>
        </div>
      </FilterPanel>

      <section className="grid gap-4 xl:grid-cols-3">
        {libraryTracks.map((track) => (
          <Card key={track.title} className="border border-blue-900/30 bg-slate-950/85">
            <CardContent className="p-0">
              <img src={track.cover} alt={track.title} className="h-64 w-full rounded-t-xl object-cover" />
              <div className="space-y-3 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="truncate text-lg font-bold tracking-tight text-white md:text-xl">{track.title}</h3>
                    <p className="mt-1 text-sm text-zinc-400 md:text-base">{track.artist}</p>
                  </div>
                  <StatusPill label={track.status} tone={track.status === "Published" ? "green" : "yellow"} />
                </div>
                <p className="text-sm text-zinc-300 md:text-base">Album: {track.album}</p>
                <div className="flex items-center justify-between text-sm text-zinc-400">
                  <span>{track.genre}</span>
                  <span>{track.duration}</span>
                  <span className="font-semibold text-emerald-400">{track.price}</span>
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

export default MusicLibraryPage
