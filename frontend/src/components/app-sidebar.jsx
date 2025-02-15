import { Calendar, Home, Inbox, Search, Settings, Wallet, UserCog, User } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
    {
        title: "Home",
        url: "dashboard",
        icon: Home,
    },
    {
        title: "Manage",
        url: "admin",
        icon: UserCog,
    },
    {
        title: "Wallet",
        url: "wallet",
        icon: Wallet,
    }
]

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    {/* <SidebarGroupLabel>LogOff</SidebarGroupLabel> */}
                    <SidebarGroupContent>
                        <SidebarMenu className="flex w-full py-24 pl-4">
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url} className="my-3">
                                            <item.icon />
                                            <span className="text-xl">{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
