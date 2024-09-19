import { Header } from "@/components";
import DashboardPage from "./(public)/dashboard/page";

export default function HomePage() {
  return (
    <div className="relative h-[5000px]">
      <Header />
      <DashboardPage />
    </div>
  );
}
