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
    <Sidebar variant="inset" collapsible="icon" className="border-r border-red-950/70 bg-[#140809] text-red-50">
      <SidebarHeader className="gap-2 px-4 py-4">
        <div className="flex flex-col gap-0.5">
          <div className="font-heading text-base font-semibold tracking-tight text-red-50">
            Navakarana
          </div>
          <div className="text-xs text-red-200/75">Admin Panel</div>
        </div>
      </SidebarHeader>
      <SidebarSeparator className="bg-red-950/70" />

      <SidebarContent className="px-2 py-3">
        <SidebarGroup className="p-0">
          <SidebarGroupLabel className="px-4 text-red-200/75">
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
        <div className="rounded-lg border border-red-900/70 bg-red-950/60 p-3">
          <div className="flex items-center gap-3">
            <div className="grid size-9 place-items-center rounded-full bg-red-800/80 text-sm font-medium text-white">
              A
            </div>
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-medium text-red-50">Admin</div>
              <div className="truncate text-xs text-red-200/75">Administrator</div>
            </div>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

export { AppSidebar }