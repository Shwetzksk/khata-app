import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, label, ...props }, ref) => {
  return (
    <div className="w-full flex flex-col">
      {label ? (
        <label className="text-xs text-gray-600 mb-1">{label}</label>
      ) : null}
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    </div>
  );
});
Input.displayName = "Input";

export { Input };
