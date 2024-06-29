"use client";
import Navbar from "@/components/Navbar";
import Place from "../../public/Place.svg";
import Product from "../../public/Product.svg";
import Program from "../../public/Program.svg";
import group from "../../public/group.svg";
import groupWhite from "../../public/groupWhite.svg";
import PlaceWhite from "../../public/PlaceWhite.svg";
import ProductWhite from "../../public/ProductWhite.svg";
import ProgramWhite from "../../public/ProgramWhite.svg";
import AddLogo from "../../public/AddLogo.svg";
import ListingCard from "@/components/ListingCard";
import Image from "next/image";

const listingCard = [
    {
        logo: group,
        hoverLogo: groupWhite,
        title: "People",
        color: "#8064A2",
        description:
            "Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator.",
        buttontext: "Connect",
    },
    {
        logo: Place,
        hoverLogo: PlaceWhite,
        title: "Place",
        color: "#77933C",
        description:
            "Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue.",
        buttontext: "Meet up",
    },
    {
        logo: Product,
        hoverLogo: ProductWhite,
        title: "Product",
        color: "#C0504D",
        description:
            "Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members.",
        buttontext: "Get it",
    },
    {
        logo: Program,
        hoverLogo: ProgramWhite,
        title: "Program",
        color: "#0096C8",
        description:
            "Find events, meetups and workshops related to your hobby. Register or buy tickets online.",
        buttontext: "Attend",
    },
];

const New = () => {
    return (
        <>
            <Navbar />
            <div className="mt-6">
                <div className="flex items-center justify-center gap-4 text-2xl font-semibold">
                    <Image src={AddLogo} alt="add" className="cursor-pointer" />
                    <p className="text-xl font-semibold md:text-2xl">
                        Add Your Listing
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-6 max-md:px-6 my-[34px]">
                    {listingCard.map((item) => (
                        <ListingCard
                            key={item.title}
                            data={item}
                            category={"new"}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};
export default New;
