import { CarouselWithTitle, Header } from "@/components";
import Image from "next/legacy/image";

export default function HomePage() {
  return (
    <div className="relative h-[5000px]">
      <Header />
      <div className="relative h-[80vh] w-full bg-black">
        <Image
          src="/wallhaven-m95x7k.jpg"
          layout="fill"
          alt="everything"
          objectFit="cover"
        />
      </div>

      <CarouselWithTitle title={"Recent"} items={[]} />
    </div>
  );
}
