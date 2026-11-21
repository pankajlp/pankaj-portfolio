import { ReactNode } from "react";

interface CalloutProps {
  children: ReactNode;
}

export default function Callout({ children }: CalloutProps) {
  return (
    <div className="bg-paper-3 border-l-[3px] border-accent px-[1.4rem] py-[1.1rem] my-8 text-md text-ink-2 leading-[1.75] rounded-r-lg">
      {children}
    </div>
  );
}
