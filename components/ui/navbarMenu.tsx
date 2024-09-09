"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center align-middle">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed inset-x-1 max-w-md mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <div className="flex flex-row items-center space-x-14">
          <HoveredLink href="/">Home</HoveredLink>
          <HoveredLink href="/pricing">Pricing</HoveredLink>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
        </div>
        <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-violet-600 to-transparent  h-px" />
      </Menu>
    </div>
  );
}
