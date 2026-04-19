import { useLocation } from "react-router-dom"
import { MoreHorizontal } from "lucide-react"

import { AppSidebar } from "@/components/layout/sidebar"
import { Button } from "@/components/ui/button"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { navigationItems } from "@/data/navItems"

function AdminShell({
  title,
  subtitle,
  action,
  dateLabel = "Monday, April 6, 2026",
  children,
}) {
  const location = useLocation()
  const activeSection =
    navigationItems.find((item) =>
      item.href === "/"
        ? location.pathname === "/"
        : location.pathname.startsWith(item.href)
    ) ?? navigationItems[0]

  const pageTitle = title || activeSection.label

  return (
    <>
      <AppSidebar />
      <SidebarInset>
        <div className="flex min-h-svh flex-col">
          <header className="flex items-center justify-between gap-4 border-b border-white/5 px-6 py-4 max-md:px-4">
            <div className="flex min-w-0 items-center gap-3">
              <SidebarTrigger className="shrink-0 md:hidden" />
              <div className="min-w-0">
                <h1 className="truncate font-heading text-5xl font-bold tracking-tight text-white max-md:text-3xl">
                  {pageTitle}
                </h1>
                <p className="mt-1 text-lg text-zinc-400 max-md:text-sm">{subtitle}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {action}
              <span className="hidden rounded-md border border-white/10 bg-slate-700/30 px-4 py-2 text-base text-zinc-300 lg:inline-flex">
                {dateLabel}
              </span>
              <Button variant="ghost" size="icon-sm" className="text-zinc-300 lg:hidden">
                <MoreHorizontal />
              </Button>
            </div>
          </header>

          <main className="flex-1 space-y-6 p-6 max-md:p-4">{children}</main>
        </div>
      </SidebarInset>
    </>
  )
}

export { AdminShell }
