import { ReactNode } from "react";

interface CalloutProps {
  children: ReactNode;
}

export default function Callout({ children }: CalloutProps) {
  return (
    <div className="bg-[#f5f7fe] border-l-[3px] border-[#1a4fd6] px-[1.4rem] py-[1.1rem] my-8 text-[15.5px] text-[#5a5a54] leading-[1.75] rounded-r-lg">
      {children}
    </div>
  );
}
