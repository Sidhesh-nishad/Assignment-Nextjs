import Form from "./Form";
import heroImage1 from "../public/heroImage1.png";
import heroImage2 from "../public/heroImage2.png";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="flex flex-col items-center w-full gap-12 px-6 pt-8 lg:justify-between lg:flex-row lg:px-25 lg:pt-26 bg-cpGray4">
            <div className="flex flex-col max-w-[706px]">
                <h1 className="mb-4 text-lg italic font-semibold lg:mb-8 md:text-4xl tracking-sm">
                    Explore your <span className="text-primary">hobby</span> or{" "}
                    <span className="text-secondary">passion</span>
                </h1>
                <p className="mb-4 text-xs font-light md:text-sm leading-sm">
                    Sign-in to interact with a community of fellow hobbyists and
                    an eco-system of experts, teachers, suppliers, classes,
                    workshops, and places to practice, participate or perform.
                    Your hobby may be about visual or performing arts, sports,
                    games, gardening, model making, cooking, indoor or outdoor
                    activities…
                </p>
                <p className="hidden mb-12 text-xs font-light lg:mb-20 lg:block md:text-sm leading-sm">
                    If you are an expert or a seller, you can Add your Listing
                    and promote yourself, your students, products, services or
                    events. Hop on your hobbyhorse and enjoy the ride.
                </p>
                <div className="lg:flex hidden gap-sm w-[50%]">
                    <Image
                        src={heroImage1}
                        alt="people doing exercise,singing and writting"
                    />
                    <Image
                        src={heroImage2}
                        alt="people reading books and paiting"
                    />
                </div>
            </div>
            <Form />
            <div className="lg:hidden flex justify-center gap-sm w-[50%]">
                <Image
                    src={heroImage1}
                    alt="people doing exercise,singing and writting"
                />
                <Image
                    src={heroImage2}
                    alt="people reading books and paiting"
                />
            </div>
        </section>
    );
};

export default Hero;
