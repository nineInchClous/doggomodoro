import { Dog } from 'lucide-react';

import { Separator } from '@/components/ui/separator';
import { SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';

const headerItem = {
  title: 'Doggomodoro',
  url: '#',
  icon: Dog,
};

export default function AppSidebarHeader() {
  return (
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton asChild>
            <a href={headerItem.url}>
              <headerItem.icon />
              <h1 className={'text-2xl font-bold truncate'}>{headerItem.title}</h1>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
      <Separator />
    </SidebarHeader>
  );
}
