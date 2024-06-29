import Image from "next/image";
import Player from "./Player";
import testimonials from "../public/Testimonials.svg";
import player from "../public/playerBig.png";

const Testimonials = () => {
    return (
        <div className="m-6 md:m-25">
            <div className="p-6 md:p-10 bg-cpGray4">
                <div className="flex items-center gap-2 max-md:justify-center w-full md:gap-6 mb-[15px] md:mb-[34px]">
                    <Image src={testimonials} alt="testimonials" />
                    <p className="text-lg font-semibold md:text-2xl text-cpBlack">
                        Testimonials
                    </p>
                </div>
                <p className="text-xs font-light leading-5 text-center mb-7 md:mb-10 md:text-lg md:text-start md:leading-sm tracking-ms text-cpGray5">
                    In a fast growing and ever changing city like Bangalore, it
                    sometimes becomes very difficult to find or connect with
                    like minded people. Websites like hobbycue.com is a great
                    service which helps me get in touch with, communicate,
                    connect, and exchange ideas with other dancers. It also
                    provides the extra benefit of finding products and services
                    that I can avail, which I can be assured is going to be of
                    great quality as it comes recommended by people of the
                    hobbycue community. To have discussions, to get visibility,
                    and to be able to safely explore various hobbies and
                    activities in my city, all under one roof, is an excellent
                    idea and I highly recommend it.
                </p>
                <div className="flex flex-col-reverse gap-8 md:gap-20 xl:flex-row">
                    <Player />
                    <div className="flex">
                        <Image
                            src={player}
                            alt=""
                            className="rounded-full max-md:h-[60px]  max-md:w-[60px] "
                        />
                        <div className="flex flex-col justify-center ml-6 max-md:mb-8">
                            <p className="text-base font-semibold md:text-lg text-secondary tracking-ms">
                                Shubha Nagarajan
                            </p>
                            <p className="text-xs font-normal md:text-sm text-primary tracking-ms primary">
                                Classical Dancer
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
