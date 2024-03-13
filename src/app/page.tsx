import Header from "@/components/Header";
import ParentBox from "@/components/ParentBox";

export default function Home() {
  return (
    <div className="bg-zinc-900 m-2 md:p-2 mon font-semibold md:overflow-y-hidden">
      <Header />
      <ParentBox />
    </div>
  );
}
