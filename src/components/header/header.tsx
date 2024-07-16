"use client";

import { signOut } from "@/auth";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import useHeaderController from "./header-controller";

const Header = () => {
  const { scrollY } = useHeaderController();

  return (
    <div
      className={cn(
        "fixed left-0 right-0 z-50 transition-all duration-500",
        scrollY < 10 ? "top-0 mx-0" : "top-8 mx-8",
      )}
    >
      <div
        className={cn(
          "flex h-24 items-center justify-between bg-blue-light",
          scrollY > 10 && "rounded-md",
        )}
      >
        <div className="px-12">LOGO</div>
        <div className="flex-1 px-12">
          <Input placeholder="Search" className="w-60" />
        </div>
        <div className="px-12">
          <Popover>
            <PopoverTrigger>
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className={"mt-2 w-full px-4 py-1"} align="end">
              {/* <Link
            href={`/profile`}
            className="hover:text-primary-color cursor-pointer py-1 leading-relaxed"
            onClick={() => {
              setIsUserPopoverOpen(false);
            }}
          >
            Profile
          </Link> */}
              <div
                className="hover:text-primary-color cursor-pointer py-1 leading-relaxed"
                onClick={() => {
                  signOut();
                }}
              >
                Logout
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Header;
