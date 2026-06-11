"use client";

import Link, { LinkProps } from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React from "react";

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default function TransitionLink({
  children,
  href,
  className = "",
  onClick,
  ...props
}: TransitionLinkProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Invoke optional custom onClick handler
    if (onClick) {
      onClick(e);
    }

    const hrefStr = href.toString();

    // Skip custom transition if:
    // - Default was already prevented
    // - Clicked with modifier key (cmd/ctrl click)
    // - External link
    // - Hash link on the same page (e.g., "/#about")
    if (
      e.defaultPrevented ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey ||
      hrefStr.startsWith("http") ||
      hrefStr.startsWith("mailto:") ||
      hrefStr.startsWith("tel:") ||
      (hrefStr.includes("#") && hrefStr.split("#")[0] === pathname) ||
      (hrefStr.includes("#") && hrefStr.split("#")[0] === "" && pathname === "/")
    ) {
      return;
    }

    e.preventDefault();

    // Trigger global page transition curtain
    window.dispatchEvent(
      new CustomEvent("page-transition-start", {
        detail: { href: hrefStr },
      })
    );
  };

  return (
    <Link href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </Link>
  );
}
