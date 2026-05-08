import { NavLink, useLocation } from "react-router-dom"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { navigationItems } from "@/data/navItems"

function AppSidebar() {
  const location = useLocation()

  return (
    <Sidebar variant="inset" collapsible="icon" className="border-r border-white/10 bg-sidebar text-sidebar-foreground">
      <SidebarHeader className="gap-2 px-4 py-4">
        <div className="flex flex-col gap-0.5">
          <div className="font-heading text-base font-semibold tracking-tight text-sidebar-foreground">
            Navakarana
          </div>
          <div className="text-xs text-sidebar-foreground/70">Admin Panel</div>
        </div>
      </SidebarHeader>
      <SidebarSeparator className="bg-sidebar-border" />

      <SidebarContent className="px-2 py-3">
        <SidebarGroup className="p-0">
          <SidebarGroupLabel className="px-4 text-sidebar-foreground/70">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1 px-2 pb-2">
              {navigationItems.map((item) => {
                const isActive = item.href === "/" ? location.pathname === "/" : location.pathname.startsWith(item.href)

                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      className="data-[active=true]:bg-red-950/80 data-[active=true]:text-red-50 data-[active=true]:shadow-[0_0_0_1px_rgba(127,29,29,0.9)]"
                    >
                      <NavLink to={item.href}>
                        <item.icon />
                        <span>{item.label}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <div className="rounded-lg border border-sidebar-border bg-black/20 p-3">
          <div className="flex items-center gap-3">
            <div className="grid size-9 place-items-center rounded-full bg-red-950/75 text-sm font-medium text-red-50">
              A
            </div>
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-medium text-sidebar-foreground">Admin</div>
              <div className="truncate text-xs text-sidebar-foreground/70">Administrator</div>
            </div>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

export { AppSidebar }