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
    <Sidebar variant="inset" collapsible="icon">
      <SidebarHeader className="gap-2 px-4 py-4">
        <div className="flex flex-col gap-0.5">
          <div className="font-heading text-base font-semibold tracking-tight">
            Navakarana
          </div>
          <div className="text-xs text-muted-foreground">Admin Panel</div>
        </div>
      </SidebarHeader>
      <SidebarSeparator className="" />


      <SidebarContent className="px-2 py-3">
        <SidebarGroup className="p-0">
          <SidebarGroupLabel className="px-4">
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
        <div className="rounded-lg border p-3">
          <div className="flex items-center gap-3">
            <div className="grid size-9 place-items-center rounded-full bg-muted text-sm font-medium">
              A
            </div>
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-medium">Admin</div>
              <div className="truncate text-xs text-muted-foreground">Administrator</div>
            </div>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

export { AppSidebar }