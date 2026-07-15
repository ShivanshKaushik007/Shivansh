"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  {
    name: "home",
    path: "/",
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
];

const Nav = () => {
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

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            onClick={() => setActivePath(link.path)}
            className={`${
              link.path === activePath && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
