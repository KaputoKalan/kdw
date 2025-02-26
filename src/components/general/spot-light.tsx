"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Image from "next/image";

export function ScrollControl() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Engineering Tomorrow&apos;s World
              <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                with Excellence
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/images/civil-engineering.jpg`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
