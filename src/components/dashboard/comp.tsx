"use client";

import { CarouselWithTitle } from "@/components";
import Image from "next/image";
import useDashboardController from "./comp-controller";

const DashboardComp = () => {
  const { products } = useDashboardController();

  return (
    <>
      <div className="relative h-[80vh] w-full bg-black">
        <Image
          src="/wallhaven-m95x7k.jpg"
          layout="fill"
          alt="everything"
          objectFit="cover"
        />
      </div>

      <CarouselWithTitle title={"Recent"} products={products} />
    </>
  );
};

export default DashboardComp;
