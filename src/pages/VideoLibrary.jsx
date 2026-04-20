import { Eye, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { AdminShell } from "@/features/admin/components/AdminShell"
import { FilterPanel, FilterSelect, StatusPill } from "@/features/admin/components/UiBlocks"
import { videoItems } from "@/features/admin/data/mockData"

function VideoLibrary() {
  return (
    <AdminShell
      title="Video Library"
      subtitle="Manage your video content"
      action={
        <Button className="bg-red-600 text-white hover:bg-red-500">
          <Plus /> Upload New Video
        </Button>
      }
    >
      <FilterPanel>
        <div className="grid gap-3 md:grid-cols-[1.8fr_0.9fr_0.9fr]">
          <Input className="bg-slate-900" placeholder="Search by title, artist, or album..." />
          <FilterSelect placeholder="All Genres" options={["All Genres"]} />
          <FilterSelect placeholder="All Status" options={["All Status"]} />
        </div>

        <div className="mt-4 flex items-center gap-3">
          <Button className="bg-red-600 text-white hover:bg-red-500">Apply Filters</Button>
          <Button variant="secondary" className="bg-slate-600 text-white hover:bg-slate-500">
            Clear
          </Button>
        </div>
      </FilterPanel>

      <section className="grid gap-4 xl:grid-cols-3">
        {videoItems.map((video) => (
          <Card key={video.title} className="border border-blue-900/30 bg-slate-950/85">
            <CardContent className="p-0">
              <div className="relative">
                <img src={video.cover} alt={video.title} className="h-72 w-full rounded-t-xl object-cover" />
                <span className="absolute left-3 top-3 rounded-md bg-blue-700 px-2 py-1 text-xs text-white">{video.quality}</span>
                <StatusPill label={video.status} className="absolute right-3 top-3" />
              </div>

              <div className="space-y-3 p-4">
                <h3 className="text-xl font-bold tracking-tight text-white md:text-2xl">{video.title}</h3>
                <p className="text-sm text-zinc-300 md:text-base">{video.artist}</p>
                <div className="flex items-center justify-between text-zinc-300">
                  <span className="inline-flex items-center gap-1 text-sm md:text-base"><Eye className="size-4" /> {video.views}</span>
                  <span className="text-lg font-bold tracking-tight text-emerald-400 md:text-xl">{video.price}</span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <Button className="bg-blue-600 text-white hover:bg-blue-500">View</Button>
                  <Button className="bg-amber-500 text-white hover:bg-amber-400">Edit</Button>
                  <Button className="bg-red-600 text-white hover:bg-red-500">Delete</Button>
                </div>
                <Button variant="secondary" className="w-full bg-slate-600 text-white hover:bg-slate-500">
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

export default VideoLibrary
