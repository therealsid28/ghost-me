import { ScrollDownIndicator } from "./_components/scroll-down-indicator";
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
        <SidebarInset className="h-svh overflow-hidden">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <div className="h-4 w-px bg-border" aria-hidden="true" />
            <h1 className="font-heading text-lg uppercase tracking-wider">
              siddharth
            </h1>
          </header>
          <div className="relative flex min-h-0 flex-1 flex-col">
            <div
              id="page-scroll"
              className="scrollbar-hide flex min-h-0 flex-1 flex-col overflow-y-auto p-4"
            >
              {children}
            </div>
            <ScrollDownIndicator />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-background/60 to-transparent"
            />
              </div>
        </SidebarInset>
      </main>
    </SidebarProvider>
  );
}
