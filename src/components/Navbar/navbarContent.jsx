"use client";
import React from "react";
import logoHome from "@@/icons/logoHome.svg";
import Image from "next/image";
import Link from "next/link";

export default function NavbarContent() {
  return (
    <nav>
      <section className={`} items-center justify-between px-4 py-4 md:flex md:justify-between md:bg-fixed`}>
        <div className="-mt-3 w-fit -translate-x-8 ps-0 md:mt-0 md:-translate-x-0 md:place-items-start lg:ps-6">
          <Link href="/"><div className="flex aspect-auto justify-center"><Image className="ml-6 h-auto w-auto" src={logoHome} alt="logo-gate+" priority /></div></Link>
        </div>
      </section>
    </nav>
  )
}