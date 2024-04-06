import Link from "next/link";
import React from "react";
import ButtonGroup from "./Buttongroup";

export default function CTABanner() {
  return (
    <div className="bg-black">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-start justify-between text-white md:px-8">
        <p>&#9742; Call 855-648-2459</p>

        
<ButtonGroup/>
        

        <p>&#9992; Locate Us</p>
      </div>
    </div>
  );
}
