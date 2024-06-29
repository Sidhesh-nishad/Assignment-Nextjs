"use client";
import Image from "next/image";
import Logo from "../public/Logo.png";
import Explore from "../public/Explore.svg";
import Hobbies from "../public/Hobbies.svg";
import Downarrow from "../public/Downarrow.svg";
import Bookmark from "../public/Bookmark.svg";
import Notification from "../public/Notification.svg";
import Cart from "../public/Cart.svg";
import Link from "next/link";
import { useState } from "react";
import Search from "../public/search.svg";
import Hamburger from "../public/Hamburgur.svg";
import Close from "../public/Close.svg";

const Navbar = () => {
    const [exploreIsVisible, setExploreIsVisible] = useState(false);
    const [hobbiesIsVisible, setHobbiesIsVisible] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div
            className="flex items-center justify-between h-20 px-6 xl:px-25"
            onMouseLeave={() => {
                setExploreIsVisible(false);
                setHobbiesIsVisible(false);
            }}
        >
            <Link href={"/"}>
                <Image
                    src={Logo}
                    alt="logo"
                    className=" xl:w-[18.31rem] w-[9.75rem]"
                />
            </Link>
            <div className="hidden xl:flex">
                <input
                    placeholder="Email ID"
                    type="email"
                    className="px-4 py-3 border text-xs rounded-l-lg border-secondary bg-cpGray6 outline-none max-w-[18.81rem]"
                />
                <button className="p-3 text-xs font-semibold leading-4 border rounded-r-lg text-white border-secondary bg-secondary tracking-[0.06px]">
                    Invite
                </button>
            </div>
            <div className="hidden gap-6 xl:flex">
                <div className="relative flex items-center gap-1 cursor-pointer">
                    <Image src={Explore} alt="logo" />
                    <p
                        className="text-sm font-medium leading-ms"
                        onMouseEnter={() => {
                            setExploreIsVisible(true);
                            setHobbiesIsVisible(false);
                        }}
                    >
                        Explore
                    </p>
                    <Image src={Downarrow} alt="logo" />
                    <div className="absolute bg-red-400 top-5"></div>
                    {exploreIsVisible && (
                        <div className="absolute bg-white  top-[3.87rem] w-[220px]">
                            <ul className="text-sm leading-xs tracking-[0.07px]">
                                <li className="p-3 border border-b text-cpGray5 hover:bg-cpGray6">
                                    People - Community
                                </li>
                                <li className="p-3 border border-b text-cpGray5 hover:bg-cpGray6">
                                    Places - Venues
                                </li>
                                <li className="p-3 border border-b text-cpGray5 hover:bg-cpGray6">
                                    Programs - Events
                                </li>
                                <li className="p-3 border border-b text-cpGray5 hover:bg-cpGray6">
                                    Products - Store
                                </li>
                                <li className="p-3 border border-b text-cpGray5 hover:bg-cpGray6">
                                    Blogs
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
                <div className="relative flex items-center gap-1 cursor-pointer ">
                    <Image src={Hobbies} alt="logo" />
                    <p
                        className="text-sm font-medium leading-ms"
                        onMouseEnter={() => {
                            setHobbiesIsVisible(true);
                            setExploreIsVisible(false);
                        }}
                    >
                        {" "}
                        Hobbies{" "}
                    </p>
                    <Image src={Downarrow} alt="logo" />

                    {hobbiesIsVisible && (
                        <div className="absolute bg-white top-[3.87rem] w-[220px]">
                            <ul className="text-sm leading-xs tracking-[0.07px]">
                                <li className="p-3 border border-b text-cpGray5 hover:bg-cpGray6">
                                    People - Community
                                </li>
                                <li className="p-3 border border-b text-cpGray5 hover:bg-cpGray6">
                                    Places - Venues
                                </li>
                                <li className="p-3 border border-b text-cpGray5 hover:bg-cpGray6">
                                    Programs - Events
                                </li>
                                <li className="p-3 border border-b text-cpGray5 hover:bg-cpGray6">
                                    Products - Store
                                </li>
                                <li className="p-3 border border-b text-cpGray5 hover:bg-cpGray6">
                                    Blogs
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
                <Image src={Bookmark} alt="bookmark" />
                <Image src={Notification} alt="bookmark" />
                <Image src={Cart} alt="bookmark" />
                <button className="px-8 py-3 text-sm font-semibold leading-4 border rounded-lg text-secondary border-secondary">
                    Sign In
                </button>
            </div>

            <div className="flex gap-4 xl:hidden">
                <Image src={Search} alt="search" />
                <Image src={Notification} alt="Notification" />
                <Image
                    src={isMenuOpen ? Close : Hamburger}
                    alt="Menu"
                    onClick={() => setIsMenuOpen((curr) => !curr)}
                />
            </div>
        </div>
    );
};

export default Navbar;
