"use client";
import Image from "next/image";
import GoogleLogo from "../public/Google.svg";
import FacebookLogo from "../public/Facebook.svg";
import PasswordLogo from "../public/Password.svg";
import LockLogo from "../public/Lock.svg";
import Eye from "../public/Eye.svg";
import { useState } from "react";

const Form = () => {
    const [currentTab, setCurrentTab] = useState("SignIn");
    const [isVisible, setIsVisible] = useState(false);
    console.log(currentTab);

    return (
        <div className="max-w-[25.625rem] min-h-[27.125rem] md:mb-10">
            <div className="flex justify-center gap-8 mb-8 md:justify-start">
                <p
                    className={`md:text-xl text-base font-semibold  cursor-pointer   ${
                        currentTab === "SignIn"
                            ? "border-b-2 border-secondary text-secondary"
                            : "text-cpGray"
                    }`}
                    onClick={() => setCurrentTab("SignIn")}
                >
                    Sign In
                </p>
                <p
                    className={`md:text-xl text-base font-semibold cursor-pointer ${
                        currentTab === "JoinIn"
                            ? "border-b-2 border-secondary text-secondary"
                            : "text-cpGray"
                    }`}
                    onClick={() => setCurrentTab("JoinIn")}
                >
                    Join In
                </p>
            </div>
            <div className="hidden py-3 mb-4 border rounded-lg md:flex md:pl-6 max-md:justify-evenly md:gap-21 border-secondary">
                <Image src={GoogleLogo} alt="google logo" />
                <p className="text-xs font-semibold leading-4 md:text-sm text-cpBlack">
                    Continue with Google
                </p>
            </div>
            <div className="hidden py-3 mb-4 border rounded-lg md:flex md:pl-6 max-md:justify-evenly md:gap-21 border-secondary">
                <Image src={FacebookLogo} alt="google logo" />
                <p className="text-xs font-semibold leading-4 md:text-sm text-cpBlack">
                    Continue with Facebook
                </p>
            </div>
            <div className="items-center justify-center hidden gap-2 md:flex my-7">
                <div className="h-[0.125rem] md:w-[9.3125rem] w-[20%] bg-cpGray2"></div>
                <p className="text-xs font-semibold leading-4 text-black">
                    Or connect with
                </p>
                <div className="h-[0.125rem] md:w-[9.3125rem] w-[20%] bg-cpGray2"></div>
            </div>
            <input
                type="email"
                placeholder="Email"
                className="w-full py-2 pl-3 mb-4 text-xs border rounded-lg outline-none md:py-3 border-cpGray3"
            />
            <div className="relative mb-6">
                <input
                    type={isVisible ? "text" : "password"}
                    placeholder="Password"
                    className="w-full py-2 pl-3 text-xs border rounded-lg outline-none md:py-3 border-cpGray3"
                />
                <Image
                    src={!isVisible ? PasswordLogo : Eye}
                    alt="password"
                    className={`absolute cursor-pointer right-5  ${
                        currentTab === "JoinIn"
                            ? " md:top-[15%] top-[10%]"
                            : "md:top-[40%] top-[30%]"
                    }`}
                    onClick={() => setIsVisible((visible) => !visible)}
                />
                {currentTab === "JoinIn" && (
                    <div>
                        <div className="flex items-center justify-between">
                            <div className="flex gap-[2px]">
                                <div className="w-[3.75rem] h-1 bg-white"></div>
                                <div className="w-[3.75rem] h-1 bg-white"></div>
                                <div className="w-[3.75rem] h-1 bg-white"></div>
                            </div>
                            <p className="font-semibold leading-4 text-cpGray text-ms">
                                Password strength
                            </p>
                        </div>
                        <p className="mt-3 text-xs text-cpGray5">
                            By continuing, you agree to our{" "}
                            <span className="text-cpBlack">
                                Terms of Service
                            </span>{" "}
                            and{" "}
                            <span className="text-cpBlack">Privacy Policy</span>
                            .
                        </p>
                    </div>
                )}
            </div>
            {currentTab === "SignIn" && (
                <div className="flex justify-between mb-6">
                    <div className="flex gap-2">
                        <input type="checkbox" />
                        <p className="text-xs font-normal leading-4 text-black">
                            Remember me
                        </p>
                    </div>
                    <div className="flex gap-1 md:gap-2">
                        <Image src={LockLogo} alt="lock" />
                        <p className="text-xs font-normal leading-4 text-black">
                            Forgot password?
                        </p>
                    </div>
                </div>
            )}
            {currentTab === "SignIn" && (
                <button className="flex items-center justify-center w-full py-2 text-sm font-semibold leading-4 border border-black rounded-lg md:py-3 text-cpBlack">
                    Continue
                </button>
            )}
            {currentTab === "JoinIn" && (
                <button className="flex items-center justify-center w-full py-2 text-sm font-semibold leading-4 text-white border rounded-lg border-secondary md:py-3 bg-secondary">
                    Agree and Continue
                </button>
            )}
            <div className="flex items-center justify-center gap-2 md:hidden my-7">
                <div className="h-[0.125rem] md:w-[9.3125rem] w-[20%] bg-cpGray2"></div>
                <p className="text-xs font-semibold leading-4 text-black">
                    Or connect with
                </p>
                <div className="h-[0.125rem] md:w-[9.3125rem] w-[20%] bg-cpGray2"></div>
            </div>
            <div className="flex py-3 mb-4 border rounded-lg md:hidden md:pl-6 max-md:justify-evenly md:gap-21 border-secondary">
                <Image src={GoogleLogo} alt="google logo" />
                <p className="text-xs font-semibold leading-4 md:text-sm text-cpBlack">
                    Continue with Google
                </p>
            </div>
            <div className="flex py-3 mb-4 border rounded-lg md:hidden md:pl-6 max-md:justify-evenly md:gap-21 border-secondary">
                <Image src={FacebookLogo} alt="google logo" />
                <p className="text-xs font-semibold leading-4 md:text-sm text-cpBlack">
                    Continue with Facebook
                </p>
            </div>
        </div>
    );
};

export default Form;
