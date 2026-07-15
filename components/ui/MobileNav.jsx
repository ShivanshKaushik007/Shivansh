"use client";

import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CiMenuBurger } from "react-icons/ci";
import { useEffect, useState } from "react";

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "services",
        path: "/#services",
    },
    {
        name: "resume",
        path: "/#resume",
    },
    {
        name: "work",
        path: "/#work",
    },
    {
        name: "contact",
        path: "/#contact",
    },
    {
        name: "blog",
        path: "/blog",
    },
]

const MobileNav = () => {
  const pathname = usePathname();
  const [activePath, setActivePath] = useState("/");

  useEffect(() => {
    if (pathname.includes("/blog")) {
      setActivePath("/blog");
      return;
    }
    const handleHashChange = () => {
      setActivePath(`/${window.location.hash}`);
    };
    // Initialize
    setActivePath(window.location.hash ? `/${window.location.hash}` : "/");
    
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [pathname]);

  return  (
  <Sheet>
    <SheetTrigger className="flex justify-center items-center">
        <CiMenuBurger className="text-[32px] text-accent"/>
    </SheetTrigger>
    <SheetContent className="flex flex-col">
        <div className="mt-28 mb-10 text-center text-2xl">
            <SheetClose asChild>
                <Link href="/" onClick={() => setActivePath("/")}>
                    <h1 className="text-4xl font-semibold">
                        Shivansh<span className="text-accent">.</span>
                    </h1>
                </Link>
            </SheetClose>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
            {links.map((link, index) => {
              return (
              <SheetClose asChild key={index}>
                  <Link 
                    href={link.path} 
                    onClick={() => setActivePath(link.path)}
                    className={`${link.path === activePath && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`}
                  >
                      {link.name}
                  </Link>
              </SheetClose>
            );
            })}
        </nav>
    </SheetContent>
  </Sheet>
  );
};

export default MobileNav;