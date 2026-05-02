import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "placeholder:text-black/50 selection:bg-yellow-300 selection:text-black flex h-10 w-full min-w-0 rounded-md border-2 border-black bg-white px-3 py-1 text-base shadow-[4px_4px_0px_0px_#000] transition-transform duration-150 outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:-translate-y-0.5 focus-visible:translate-x-0.5 focus-visible:shadow-[2px_2px_0px_0px_#000]",
        "aria-invalid:border-red-500",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
