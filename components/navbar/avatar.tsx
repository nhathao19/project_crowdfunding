import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { PiGear, PiHeart, PiPackage } from "react-icons/pi";

interface AvatarProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  authenticatedUser?: any;
}

const Avatar = ({ authenticatedUser }: AvatarProps) => {
  const handleMyUpvotes = () => {
    window.location.href = "/my-upvotes";
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="focus:outline-none">
          <Image
            src={authenticatedUser.user.image}
            className="rounded-full border h-8 w-8"
            height={50}
            width={50}
            alt="avatar"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40 space-y-1 p-2 text-gray-600">
          <DropdownMenuItem className="hover:text-[#51CE92]">
            <Link
              href={"/my-products"}
              className="flex gap-x-2 rounded-sm w-full cursor-pointer"
            >
              <PiPackage className="text-xl" />
              My Products
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:text-[#51CE92]">
            <div
              onClick={handleMyUpvotes}
              className="flex gap-x-2 rounded-sm w-full cursor-pointer"
            >
              <PiHeart className="text-xl" />
              Upvoted
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:text-[#51CE92]">
            <Link
              href={"/settings"}
              className="flex gap-x-2 rounded-sm w-full cursor-pointer"
            >
              <PiGear className="text-xl" />
              Settings
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:text-red-600 cursor-pointer">
            <div onClick={() => signOut()}>Log out</div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Avatar;
