"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "../MainHeader/page.module.css";

export default function NavLink({ href, children }) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
  return (
    <Link
      href={href}
      className={isActive ? `${classes.link} ${classes.active}` : classes.link}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Link>
  );
}
