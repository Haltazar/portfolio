import Link from "next/link";
import { StaticImageData } from "next/image";
import Image from "next/image";
import ClotairLogo from "../imgs/clotair.png";
import MargotLogo from "../imgs/margot.png";
import PizzaCookLogo from "../imgs/pizzacook.jpeg";
import ScaniaLogo from "../imgs/scania.png";
import StockGoLogo from "../imgs/stock&go.png";

export const PROJECTS: ProjectProps[] = [
    {
        img: ClotairLogo,
        title: "Clotair",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        url: "https://www.mydigitalschool.com/ecole-multimedia-angers",
    },
    {
        img: MargotLogo,
        title: "Margot SA",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        url: "https://www.roulemarcel.fr/",
    },
    {
        img: StockGoLogo,
        title: "Stock & Go",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        url: "https://www.mydigitalschool.com/ecole-multimedia-angers",
    },
    {
        img: PizzaCookLogo,
        title: "Pizza Cook",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        url: "https://www.mydigitalschool.com/ecole-multimedia-angers",
    },
    {
        img: ScaniaLogo,
        title: "TCO Calculator",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        url: "https://www.mydigitalschool.com/ecole-multimedia-angers",
    },
];

type ProjectProps = {
    img: StaticImageData;
    title: string;
    description: string;
    url: string;
};

export const Project = (props: ProjectProps) => {
    return (
        <Link
            href={props.url}
            target="_blank"
            className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
        >
            <span className="bg-accent text-accent-foreground p-2 rounded-sm">
                <Image src={props.img} alt={props.title} width={0} height={0} className="w-10 h-10 object-contain rounded-md" />
            </span>
            <div>
                <p className="text-lg font-semibold">{props.title}</p>
                <p className="text-sm text-muted-foreground">
                    {props.description}
                </p>
            </div>
        </Link>
    );
};
