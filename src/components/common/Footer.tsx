"use client";

import ScrollVelocity from "@/src/components/ui/bottom"; 
// (your scroll velocity component is named Footer right now)

export default function FooterWrapper() {
  return (
          <footer className="w-full bg-black text-white mt-20">
      <ScrollVelocity
        texts={[
          "IEEE COMPUTER SOCIETY",
          "INNOVATION",
          "TECHNOLOGY",
          "FUTURE"
          "IEEE CS"
        ]}
      />
    </footer>
  );
}
