import Image from "next/image";
import Link from "next/link";
import React from "react";

const navbar = () => {
  return (
    <nav className="flex bg-secondary justify-between items-center p-4">
      <Link href="/" className="text-primary flex bg-primary">
        <Image src="/assets/logo.svg" height={240} width={240} alt="logo" />
      </Link>
      <div className="flex space-x-4">
        <Link href="/sign-in" className="text-primary hover:text-accent">
          Sign In
        </Link>
        <Link href="/sign-up" className="text-primary hover:text-accent">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default navbar;
