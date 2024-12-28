import { DashboardNavBar } from "@/components/nav-bar";
import { DashboardSideBar } from "@/components/side-bar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-[#e7edfa]">
      <DashboardSideBar />
      <div className="flex flex-col flex-1">
        <DashboardNavBar />
        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  );
}
