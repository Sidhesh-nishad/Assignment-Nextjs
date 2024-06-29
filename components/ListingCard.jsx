import Image from "next/image";
import { useState } from "react";

const ListingCard = ({ data, category = "" }) => {
    const { logo, title, description, buttontext, color } = data;
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`max-w-[38rem] transition-all duration-300 md:min-h-[18.5625rem] px-6 md:px-11 md:py-10 py-[26px] relative rounded-lg ${
                category !== "new" ? "border border-cpGray2" : ""
            }`}
            style={{
                backgroundColor:
                    isHovered && category === "new" ? color : "initial",
                borderColor: category === "new" ? color : "#CED4DA",
                borderWidth: category === "new" ? "1px" : "1px",
                borderStyle: category === "new" ? "solid" : "inherit",
                color: isHovered && category === "new" ? "white" : "inherit",
            }}
            onMouseEnter={() => category === "new" && setIsHovered(true)}
            onMouseLeave={() => category === "new" && setIsHovered(false)}
        >
            <div className="flex items-center gap-2 mb-4 max-md:justify-center md:gap-6 md:mb-6">
                {isHovered ? (
                    <Image src={data?.hoverLogo} alt="people" />
                ) : (
                    <Image src={logo} alt="people" />
                )}
                <p
                    className={`text-lg md:text-2xl font-semibold ${
                        isHovered && category === "new" ? "text-white" : ""
                    }`}
                >
                    {title}
                </p>
            </div>
            <p
                className={`${
                    category !== "new" && "mb-8"
                } md:text-lg text-xs font-light tracking-ms md:text-start text-center ${
                    isHovered && category === "new" ? "text-white" : ""
                }`}
            >
                {description}
            </p>
            {category !== "new" && (
                <button
                    className={`md:absolute py-3 max-md:w-full text-sm font-semibold border rounded-lg border-secondary text-secondary md:bottom-10 px-sm ${
                        isHovered && category === "new" ? "text-white" : ""
                    }`}
                >
                    {buttontext}
                </button>
            )}
        </div>
    );
};

export default ListingCard;
