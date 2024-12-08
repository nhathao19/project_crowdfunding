"use client";

import { useState } from "react";
import LaunchesMenu from "./menus/launches-menu";
import Link from "next/link";
import CommunityMenu from "./menus/community-menu";
import AboutMenu from "./menus/about-menu";

const Menu = () => {
  const [showLaunches, setShowLaunches] = useState(false);
  const [showCommunity, setShowCommunity] = useState(false);
  const [showAboutMenu, setShowAboutMenu] = useState(false);
  return (
    <div className="hidden lg:flex items-center relative">
      <div className="space-x-6 text-gray-600 text-sm flex items-center">
        <div
          onMouseEnter={() => setShowLaunches(true)}
          onMouseLeave={() => setShowLaunches(false)}
          className="hover:text-[#51CE92] py-4 cursor-pointer"
        >
          Launches {showLaunches && <LaunchesMenu />}
        </div>

        <Link href={"/categories"} className="hover:text-[#51CE92]">
          Categories
        </Link>

        <div
          onMouseEnter={() => setShowCommunity(true)}
          onMouseLeave={() => setShowCommunity(false)}
          className="hover:text-[#51CE92] py-4 cursor-pointer"
        >
          Community {showCommunity && <CommunityMenu />}
        </div>

        <div>Advertise</div>

        <div
          onMouseEnter={() => setShowAboutMenu(true)}
          onMouseLeave={() => setShowAboutMenu(false)}
          className="hover:text-[#51CE92] cursor-pointer"
        >
          About {showAboutMenu && <AboutMenu />}
        </div>
      </div>
    </div>
  );
};

export default Menu;
