import { Navbar } from "@/app/(protected)/_components/Navbar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

export default function ProtectedLayout({ children }: ProtectedLayoutProps) {
  return (
    <div className="min-h-full w-full flex flex-col gap-y-10 items-center justify-center bg-sky-500 p-5">
        <Navbar />
      {children}
    </div>
  );
}
