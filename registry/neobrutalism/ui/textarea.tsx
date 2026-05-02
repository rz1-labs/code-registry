import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "placeholder:text-black/50 flex field-sizing-content min-h-16 w-full rounded-md border-2 border-black bg-white px-3 py-2 text-base shadow-[4px_4px_0px_0px_#000] transition-transform duration-150 outline-none focus-visible:-translate-y-0.5 focus-visible:translate-x-0.5 focus-visible:shadow-[2px_2px_0px_0px_#000] disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-red-500 md:text-sm",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
