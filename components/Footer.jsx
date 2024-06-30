import Image from "next/image";
import facebook from "../public/social/facebook.svg";
import twitter from "../public/social/twitter.svg";
import email from "../public/social/email.svg";
import googlePlus from "../public/social/googlePlus.svg";
import instagram from "../public/social/instagram.svg";
import youtube from "../public/social/youtube.svg";
import printest from "../public/social/printest.svg";
import telegram from "../public/social/telegram.svg";

const Footer = () => {
    return (
        <footer className="flex justify-between p-6 max-md:gap-8 max-md:flex-col lg:px-25 md:py-15">
            <div>
                <p className="text-xs md:text-sm font-bold leading-xs tracking-[0.07px]">
                    Hobbycue
                </p>
                <ul className="flex text-[9px] flex-col gap-2 mt-3 md:mt-4 md:text-sm font-normal leading-xs tracking-[0.07px] text-cpGray5">
                    <li>About Us</li>
                    <li>Our Services</li>
                    <li>Work with Us</li>
                    <li>FAQ</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div>
                <p className="text-sm font-bold leading-xs tracking-[0.07px]">
                    How Do I
                </p>
                <ul className="flex text-[9px] flex-col gap-2 mt-3 md:mt-4 md:text-sm font-normal leading-xs tracking-[0.07px] text-cpGray5">
                    <li>Sign Up</li>
                    <li>Add a Listing</li>
                    <li>Post a Query</li>
                    <li>Add a Blog Post</li>
                    <li>Other Queries</li>
                </ul>
            </div>
            <div>
                <p className="text-sm font-bold leading-xs tracking-[0.07px]">
                    Quick Links
                </p>
                <ul className="flex text-[9px] flex-col gap-2 mt-3 md:mt-4 md:text-sm font-normal leading-xs tracking-[0.07px] text-cpGray5">
                    <li>Listings</li>
                    <li>Blog Posts</li>
                    <li>Shop / Store</li>
                    <li>Community</li>
                </ul>
            </div>
            <div>
                <p className="text-sm font-bold leading-xs tracking-[0.07px]">
                    Social Media
                </p>
                <div className="flex gap-4 mt-4 overflow-hidden md:gap-6">
                    <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 rounded-full bg-cpGray3">
                        <Image src={facebook} alt="icon" />
                    </div>
                    <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 rounded-full bg-cpGray3">
                        <Image src={twitter} alt="icon" />
                    </div>
                    <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 rounded-full bg-cpGray3">
                        <Image src={instagram} alt="icon" />
                    </div>
                    <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 rounded-full bg-cpGray3">
                        <Image src={printest} alt="icon" />
                    </div>
                    <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 rounded-full bg-cpGray3">
                        <Image src={googlePlus} alt="icon" />
                    </div>
                    <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 rounded-full bg-cpGray3">
                        <Image src={youtube} alt="icon" />
                    </div>
                    <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 rounded-full bg-cpGray3">
                        <Image src={telegram} alt="icon" />
                    </div>
                    <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 rounded-full bg-cpGray3">
                        <Image src={email} alt="icon" />
                    </div>
                </div>
                <p className="text-sm font-bold leading-xs tracking-[0.07px] mt-[3.125rem]">
                    Invite Friends
                </p>
                <div>
                    <input
                        placeholder="Email ID"
                        type="text"
                        className="px-3 py-2 md:py-3 mt-4 border text-xs rounded-l-lg border-secondary outline-none max-w-[18.81rem]"
                    />
                    <button className="md:p-3 py-2 px-2 text-xs font-semibold leading-4 border rounded-r-lg text-white border-secondary bg-secondary tracking-[0.06px]">
                        Invite
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
