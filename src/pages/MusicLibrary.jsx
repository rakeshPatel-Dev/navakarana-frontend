import { Filter, Plus, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { AdminShell } from "@/features/admin/components/AdminShell"
import { FilterPanel, FilterSelect, StatusPill } from "@/features/admin/components/UiBlocks"
import {useDispatch, useSelector} from "react-redux"
import { fetchMusic } from "@/redux/features/musicSlice";
import { useEffect, useState } from "react";

function MusicLibrary() {

  const [searchQuery, setSearchQuery] = useState('')
  const [filter, setFilter] = useState({
    genre: 'All Genres',
    artist: 'All Artists',
  })

  const dispatch = useDispatch()

  const { music, loading, error } = useSelector((state) => state.music)

  useEffect(() => {
    dispatch(fetchMusic());
  }, [dispatch]);   

  // Extract unique genres and artists from music list
  const genres = ['All Genres', ...music.map((m) => m.genre).filter((val, idx, arr) => val && arr.indexOf(val) === idx)]
  const artists = ['All Artists', ...music.map((m) => m.artist).filter((val, idx, arr) => val && arr.indexOf(val) === idx)]

  // Apply search and filters to music list
  const filteredMusic = music.filter((m) => {
    const matchesSearch = m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.album?.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesGenre = filter.genre === 'All Genres' || m.genre === filter.genre
    const matchesArtist = filter.artist === 'All Artists' || m.artist === filter.artist
    return matchesSearch && matchesGenre && matchesArtist
  })

  const freeMusic = filteredMusic.filter((m) => m.is_free === true)
  const paidMusic = filteredMusic.filter((m) => m.is_free === false)

  const handleClearFilters = () => {
    setSearchQuery('')
    setFilter({ genre: 'All Genres', artist: 'All Artists' })
  }


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
            <p className="mt-2 text-2xl font-bold tracking-tight text-white md:text-3xl">{music.length}</p>
          </CardContent>
        </Card>
        <Card className="border border-blue-900/30 bg-slate-950/85">
          <CardContent className="p-5">
            <p className="text-sm text-zinc-400">Free tracks</p>
            <p className="mt-2 text-2xl font-bold tracking-tight text-white md:text-3xl">{freeMusic.length}</p>
          </CardContent>
        </Card>
        <Card className="border border-blue-900/30 bg-slate-950/85">
          <CardContent className="p-5">
            <p className="text-sm text-zinc-400">Paid tracks</p>
            <p className="mt-2 text-2xl font-bold tracking-tight text-white md:text-3xl">{paidMusic.length}</p>
          </CardContent>
        </Card>
      </section>

      <FilterPanel>
        <div className="grid gap-3 lg:grid-cols-[1.8fr_0.8fr_0.8fr]">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-zinc-500" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-slate-900 pl-9"
              placeholder="Search tracks, artists, albums..."
            />
          </div>
          <FilterSelect
            onChange={(value) => setFilter({ ...filter, genre: value })}
            placeholder="All Genres"
            value={filter.genre}
            options={genres}
          />
          <FilterSelect
            onChange={(value) => setFilter({ ...filter, artist: value })}
            placeholder="All Artists"
            value={filter.artist}
            options={artists}
          />
        </div>
      </FilterPanel>

      <section className="grid gap-4 xl:grid-cols-3">
        {loading && <p className="text-sm text-zinc-400">Loading music...</p>}
        {!loading && error && <p className="text-sm text-red-400">Failed to load music.</p>}
        {!loading && !error && filteredMusic.length === 0 && <p className="text-sm text-zinc-400">No music found.</p>}
        {!loading && !error && filteredMusic.map((m) => (
          <Card key={m.id ?? m.title} className="border border-blue-900/30 bg-slate-950/85">
            <CardContent className="p-0">
              <img src={m.cover_image} alt={m.title} className="h-64 w-full rounded-t-xl object-cover" />
              <div className="space-y-3 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="truncate text-lg font-bold tracking-tight text-white md:text-xl">{m.title}</h3>
                    <p className="mt-1 text-sm text-zinc-400 md:text-base">{m.artist}</p>
                  </div>
                  <StatusPill label={m.is_free ? "Free" : "Paid"} tone={m.is_free === true ? "green" : "red"} />
                </div>
                <p className="text-sm text-zinc-300 md:text-base">Album: {m.album}</p>
                <div className="flex items-center justify-between text-sm text-zinc-400">
                  <span>{m.genre}</span>
                  <span>{m.duration ?? "-"}</span>
                  <span className="font-semibold text-emerald-400">{m.price}</span>
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

export default MusicLibrary
