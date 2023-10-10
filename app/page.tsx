import NaverMap from "@/components/Naver-map";
import SideBar from "@/components/Side-bar";

export default function Home() {
  return (
    <div className="flex w-screen">
      <SideBar />
      <NaverMap />
    </div>
  );
}
