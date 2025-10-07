'use client'
import { Text } from "@/shared/ui/text";
import { DiamondPlus, User, Users } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Dashboard() {
  const pathname = usePathname();
  return (
    <div className="fixed z-50 bottom-0 left-0 right-0 border-t border-slate-300 rounded-t-lg">
      <div className="grid grid-cols-3 gap-x-2 justify-between items-center w-11/12 mx-auto py-2 bg-white">
        <div className="flex flex-col gap-y-0.5 items-center justify-center">
          <Users className={`w-6 h-6 ${pathname === "/dashboard" ? "text-blue-500" : "text-zinc-800"}`} />
          <Text size="sm" className={`${pathname === "/dashboard" ? "text-blue-500" : "text-zinc-800"}`}>О нас</Text>
        </div>
        <div className="flex justify-center items-center w-full h-full">
          <DiamondPlus className={`w-14 h-14 bg-blue-500 rounded-full p-2 text-white ${pathname === "/solve" ? "text-blue-600" : "bg-blue-500"}`} />
        </div>
        <div className="flex flex-col gap-y-0.5 items-center justify-center">
          <User className={`w-6 h-6 ${pathname === "/" ? "text-blue-500" : "text-zinc-800"}`} />
          <Text size="sm" className={`${pathname === "/" ? "text-blue-500 font-semibold" : "text-zinc-800"}`}>Профиль</Text>
        </div>
      </div>
    </div>
  )
}