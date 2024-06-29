import Image from "next/image";
import footer1 from "../public/footer1.png";
import footer2 from "../public/footer2.png";
import topArrow from "../public/Toparrow.svg";

const Community = () => {
    return (
        <div className="relative px-6 max-md:mt-12 md:p-25 bg-cpBlue">
            <div className="absolute right-[3.75rem] flex max-md:hidden items-center gap-xs flex-col top-[12.125rem]">
                <div className="flex items-center justify-center w-10 h-10 bg-white border rounded-full border-cpGray2">
                    <Image src={topArrow} alt="arrow" />
                </div>
                <p className="text-secondary text-ms">Go to top (Ctrl+Home)</p>
            </div>
            <h2 className="text-lg italic font-medium md:text-4xl mb-lg">
                Your <span className="text-secondary">Hobby</span>, Your{" "}
                <span className="text-primary">Community...</span>
            </h2>
            <button className="px-4 py-2 text-sm font-semibold text-white rounded-lg md:text-xl bg-secondary">
                Get started
            </button>
            <div className="flex gap-4 md:gap-md justify-center mt-[57px] md:mt-[7.5625rem]">
                <Image
                    src={footer1}
                    alt=""
                    className="md:max-w-[33.18rem] w-[40%] "
                />
                <Image
                    src={footer2}
                    alt=""
                    className="md:max-w-[39.87rem] w-[40%] "
                />
            </div>
        </div>
    );
};

export default Community;
