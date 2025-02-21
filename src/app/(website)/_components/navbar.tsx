import { Button } from "@/components/ui/button";
import { MenuIcon, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; 

const LandingPageNavBar = () => {
  return (
    <div className="flex w-full justify-between items-center">
      <div className="text-3xl font-semibold flex items-center gap-x-3">
        <MenuIcon className="w-8 h-8" />
        <Image src="/logo.png" alt="logo" width={40} height={40} />
      </div>
      <div className="hidden gap-x-10 items-center lg:flex">
        <Link href="/" className="bg-[#7320DD] py-2 px-5 font-semibold rounded-full text-lg hover:bg-[#7320DD]/80 transition-all">Home</Link>
        <Link href="/">Pricing</Link>
        <Link href="/">Contact</Link>
      </div>
      <Link href="/auth/sign-in" >
        <Button className="text-base flex items-center gap-x-2 rounded-full">
          <User fill="#000"/>
          Login</Button>

        </Link>
    
    </div>
  );
};

export default LandingPageNavBar;
