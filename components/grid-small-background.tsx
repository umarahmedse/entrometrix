import { cn } from "@/lib/utils";
import React from "react";

export default function GridSmallBackground({children}: {children: React.ReactNode}) {
  return (
    <div className="relative  w-fullbg-black">
      <div
        className={cn(
          "absolute inset-0 ",
          "[background-size:20px_20px]",
          "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      
      {children}
    </div>
  );
}
