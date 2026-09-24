import { AppSidebar } from "@/components/shared/app_sidebar/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <main className="flex flex-1">
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <div className="h-4 w-px bg-border" aria-hidden="true" />
            <h1 className="font-heading text-lg uppercase tracking-wider">
              siddharth
            </h1>
          </header>
          <div className="flex flex-1 flex-col p-4">{children}</div>
        </SidebarInset>
      </main>
    </SidebarProvider>
  );
}
