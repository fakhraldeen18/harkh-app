import { DashboardNavBar } from "@/components/nav-bar";
import { DashboardSideBar } from "@/components/side-bar";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-body-foreground">
      <DashboardSideBar />
      <div className="flex flex-col flex-1">
        <DashboardNavBar />
        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  );
}
