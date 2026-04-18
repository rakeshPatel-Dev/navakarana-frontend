import { useLocation } from "react-router-dom"
import { ChevronRight, MoreHorizontal, Play, Users2, Music3 } from "lucide-react"

import { AppSidebar } from "@/components/layout/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { navigationItems } from "@/data/navItems"

const stats = [
  { label: "Total Revenue", value: "$148.50", note: "+$67.50 this week", tone: "from-red-950/80 to-red-900/40", icon: Music3 },
  { label: "Monthly Recurring Revenue", value: "$82.40", note: "9 active subscribers", tone: "from-emerald-950/80 to-emerald-900/40", icon: Users2 },
  { label: "Total Users", value: "23", note: "+0 this week", tone: "from-zinc-900 to-zinc-800/70", icon: Users2 },
  { label: "Total Music", value: "8", note: "8 active", tone: "from-zinc-900 to-zinc-800/70", icon: Music3 },
]

const recentItems = [
  { title: "Premium Monthly", subtitle: "7 subscribers", value: "77.8%" },
  { title: "Premium Yearly", subtitle: "3 subscribers", value: "33.3%" },
]

function Home() {
  const location = useLocation()
  const activeSection = navigationItems.find((item) => item.href === "/" ? location.pathname === "/" : location.pathname.startsWith(item.href)) ?? navigationItems[0]

  return (
    <>
      <AppSidebar />
      <SidebarInset>
        <div className="flex min-h-svh flex-col">
          <header className="flex items-center justify-between gap-4 border-b px-6 py-4 max-md:px-4">
            <div className="flex min-w-0 items-center gap-3">
              <SidebarTrigger className="shrink-0 md:hidden" />
              <div className="min-w-0">
                <p className="text-sm text-muted-foreground">Welcome back, Admin</p>
                <h1 className="truncate font-heading text-2xl font-semibold tracking-tight">
                  {activeSection.label}
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="hidden rounded-full border px-3 py-1.5 sm:inline-flex">
                Monday, April 18, 2026
              </span>
              <Button variant="ghost" size="icon-sm">
                <MoreHorizontal />
              </Button>
            </div>
          </header>

          <main className="flex-1 space-y-6 p-6 max-md:p-4">
            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => {
                const Icon = stat.icon

                return (
                  <Card key={stat.label}>
                    <CardContent className="flex items-start justify-between gap-4 px-4 py-4">
                      <div>
                        <CardDescription className="text-xs uppercase tracking-[0.18em]">
                          {stat.label}
                        </CardDescription>
                        <CardTitle className="mt-2 text-3xl font-semibold">
                          {stat.value}
                        </CardTitle>
                        <p className="mt-2 text-sm text-muted-foreground">{stat.note}</p>
                      </div>
                      <div className="grid size-11 shrink-0 place-items-center rounded-2xl bg-muted text-muted-foreground">
                        <Icon className="size-5" />
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </section>

            <section className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
              <Card>
                <CardHeader className="flex-row items-start justify-between gap-4 border-b pb-4">
                  <div>
                    <CardTitle className="text-lg">Active Subscriptions by Plan</CardTitle>
                    <CardDescription>Snapshot of paid plans currently driving recurring revenue.</CardDescription>
                  </div>
                  <Button variant="ghost" size="sm">
                    View report <ChevronRight />
                  </Button>
                </CardHeader>
                <CardContent className="space-y-3 px-4 py-4">
                  {recentItems.map((item) => (
                    <div key={item.title} className="flex items-center justify-between rounded-2xl border px-4 py-3">
                      <div>
                        <div className="text-sm font-medium">{item.title}</div>
                        <div className="text-xs text-muted-foreground">{item.subtitle}</div>
                      </div>
                      <div className="text-sm font-semibold">{item.value}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex-row items-start justify-between gap-4 border-b pb-4">
                  <div>
                    <CardTitle className="text-lg">Most Played Songs</CardTitle>
                    <CardDescription>Trending tracks from the current session.</CardDescription>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Play /> Preview
                  </Button>
                </CardHeader>
                <CardContent className="space-y-3 px-4 py-4">
                  {["Hifumi", "Kuyo Prakriya", "Kyorei", "Kuyo Suizen", "Tamuke"].map((song, index) => (
                    <div key={song} className="flex items-center gap-3 rounded-2xl border px-3 py-3">
                      <div className="grid size-12 place-items-center rounded-xl bg-muted text-xs text-muted-foreground">
                        {index + 1}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="truncate text-sm font-medium">{song}</div>
                        <div className="truncate text-xs text-muted-foreground">Dario Calvaruso</div>
                      </div>
                      <div className="text-right text-sm font-semibold">0</div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </section>
          </main>
        </div>
      </SidebarInset>
    </>
  )
}

export default Home
