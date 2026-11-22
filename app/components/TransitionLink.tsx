import Link, { type LinkProps } from "next/link";
import type { ReactNode, MouseEvent, AnchorHTMLAttributes } from "react";

// Kept as a thin wrapper so existing imports keep working. It used to play a
// full-screen curtain on every navigation (about 1.4s); links now navigate
// immediately.
type TransitionLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps | "onClick"> & {
    children: ReactNode;
    onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
  };

export default function TransitionLink({ children, ...props }: TransitionLinkProps) {
  return <Link {...props}>{children}</Link>;
}
