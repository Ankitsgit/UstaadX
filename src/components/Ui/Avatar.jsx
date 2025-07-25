import React from "react";

// Utility to join class names
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Avatar = React.forwardRef(({ className = "", children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
    {...props}
  >
    {children}
  </div>
));
Avatar.displayName = "Avatar";

const AvatarImage = React.forwardRef(({ src, alt, className = "", ...props }, ref) => (
  <img
    ref={ref}
    src={src}
    alt={alt}
    className={cn("aspect-square h-full w-full object-cover", className)}
    {...props}
  />
));
AvatarImage.displayName = "AvatarImage";

const AvatarFallback = React.forwardRef(({ className = "", children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex h-full w-full items-center justify-center rounded-full bg-muted text-white", className)}
    {...props}
  >
    {children}
  </div>
));
AvatarFallback.displayName = "AvatarFallback";

export { Avatar, AvatarImage, AvatarFallback };
