import Link from "next/link";
import React from "react";
import ButtonGroup from "./Buttongroup";

export default function CTABanner() {
  return (
    <div className="bg-[#231F20] px-4">
      <div className="max-w-screen-xl mx-auto py-3 flex items-center w-full justify-between text-[#e3e3e3] md:px-8 text-sm">
        <p className="">&#9742; Call 855-648-2459</p>

        <ButtonGroup />

        <p className="hidden sm:block">&#9992; Locate Us</p>
      </div>
    </div>
  );
}
