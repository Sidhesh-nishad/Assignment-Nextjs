"use client";
import ListingCard from "./ListingCard";
import Add from "../public/Add.svg";
import Image from "next/image";
import Place from "../public/Place.svg";
import Product from "../public/Product.svg";
import Program from "../public/Program.svg";
import group from "../public/group.svg";
import Link from "next/link";

const listingCard = [
    {
        logo: group,
        title: "People",
        description:
            "Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator.",
        buttontext: "Connect",
    },
    {
        logo: Place,
        title: "Place",
        description:
            "Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue.",
        buttontext: "Meet up",
    },
    {
        logo: Product,
        title: "Product",
        description:
            "Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members.",
        buttontext: "Get it",
    },
    {
        logo: Program,
        title: "Program",
        description:
            "Find events, meetups and workshops related to your hobby. Register or buy tickets online.",
        buttontext: "Attend",
    },
];

const Listing = () => {
    return (
        <>
            <div className="flex flex-wrap justify-center gap-6 my-12 max-md:px-6 md:my-25">
                {listingCard.map((item) => (
                    <ListingCard key={item.title} data={item} />
                ))}
            </div>
            {/* for add new listing */}
            <div className="flex items-center justify-center w-full p-6 bg-cpBlue md:p-25">
                <div className="md:p-10 p-6 bg-white max-w-[1280px] border rounded-lg border-cpGray2">
                    <div className="flex items-center gap-6">
                        <Image src={Add} alt="add icon" />
                        <p className="text-lg font-semibold md:text-2xl">
                            {" "}
                            Add your own{" "}
                        </p>
                    </div>
                    <p className="md:py-8 max-md:mt-[15px] text-xs max-md:text-center md:text-lg font-light tracking-[0.36px]">
                        Are you a teacher or expert? Do you sell or rent out
                        equipment, venue or event tickets? Or, you know someone
                        who should be on hobbycue? Go ahead and Add your Own
                        page
                    </p>
                    <Link href={"/new"}>
                        <button className="py-2 text-sm font-semibold border rounded-lg max-md:mt-3 max-md:w-full md:py-3 border-secondary text-secondary px-sm">
                            Add new
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};
export default Listing;
