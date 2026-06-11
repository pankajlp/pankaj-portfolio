import { ReactNode } from "react";

interface CalloutProps {
  children: ReactNode;
}

export default function Callout({ children }: CalloutProps) {
  return (
    <div className="bg-[#f8fafc] border-l-[3px] border-[#4f46e5] px-[1.4rem] py-[1.1rem] my-8 text-[15.5px] text-stone-500 leading-[1.75] rounded-r-lg">
      {children}
    </div>
  );
}
