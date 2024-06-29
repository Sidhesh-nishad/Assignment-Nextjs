import Image from "next/image";
import Play from "../public/Play.svg";
import player from "../public/player.png";
import Mic from "../public/Mic.svg";

const Player = () => {
    return (
        <div className="md:min-h-[100px] max-md:py-5 max-w-[776px] bg-cpVoilet px-4 md:px-8 rounded-lg flex justify-center items-center">
            <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 bg-white rounded-full md:h-10 md:mr-10 md:w-10">
                <Image src={Play} alt="play" />
            </div>
            <div className="flex-shrink-0 w-3 h-3 rounded-full cursor-pointer max-md:ml-2 bg-secondary"></div>
            <div className="md:w-[468px] w-[50%] h-[2px] bg-white mr-3"></div>
            <p className="mr-5 text-xs font-normal leading-4 md:mr-12 text-secondary">
                0:00
            </p>
            <div className="relative">
                <Image
                    src={Mic}
                    alt="play"
                    className="absolute flex-shrink-0 rounded-full max-md:h-5 max-md-w-5 -left-3 -bottom-1"
                />
                <Image src={player} alt="play" className="rounded-full " />
            </div>
        </div>
    );
};

export default Player;
