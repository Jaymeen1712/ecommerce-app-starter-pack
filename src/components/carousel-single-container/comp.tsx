import Image from "next/image";
import Link from "next/link";

const CarouselSingleContainer = () => {
  return (
    <Link href="">
      <div className="relative h-[140px] w-full rounded-md">
        <Image
          src="/wallhaven-m95x7k.jpg"
          alt="logo-maker"
          fill
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <div className="font-semibold">Title</div>
      <div>Desc</div>
      <div>Price</div>
    </Link>
  );
};

export default CarouselSingleContainer;
