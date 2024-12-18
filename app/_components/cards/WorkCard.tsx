import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { StaticImageData } from "next/image";
import RouleMarcelLogo from "../imgs/RM.png";
// import MyDigitalSchoolLogo from "../imgs/Mds.png";
// import CEFIMLogo from "../imgs/Cefim.png";

export const WORKS: WorkProps[] = [
    {
        image: RouleMarcelLogo,
        title: "Roule Marcel",
        role: "Developpeur Full Stack",
        date: "Sept. 2024 - Aujourd'hui",
        url: "https://www.roulemarcel.fr/",
    },
    {
        image: RouleMarcelLogo,
        title: "Roule Marcel",
        role: "Stagiaire Developpeur Full Stack",
        date: "Mai 2024 - Juill. 2024",
        url: "https://www.roulemarcel.fr/",
    },
    // {
    //     image: MyDigitalSchoolLogo,
    //     title: "MyDigitalSchool",
    //     role: "Concepteur Développeur d'Applications",
    //     date: "2024 - Aujourd'hui",
    //     url: "https://www.roulemarcel.fr/",
    //     freelance: true,
    // },
    // {
    //     image: CEFIMLogo,
    //     title: "CEFIM",
    //     role: "Développeur web et web mobile",
    //     date: "2024",
    //     url: "https://www.roulemarcel.fr/",
    //     freelance: true,
    // },
];

type WorkProps = {
    image: string | StaticImageData;
    title: string;
    role: string;
    date: string;
    url: string;
    freelance?: boolean;
};

export const Work = (props: WorkProps) => {
    return (
        <Link
            href={props.url}
            target="_blank"
            className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
        >
            <Image
                src={props.image}
                alt={props.title}
                className="sm:w-8 xs:w-6 sm:h-8 xs:h-6 object-contain rounded-md"
                width={0}
                height={0}
            />
            <div className="mr-auto flex flex-col gap-1 flex-[2]">
                <div className="flex flex-col w-full">
                    <p className="sm:text-lg font-semibold xs:text-sm w-full">{props.title}</p>
                    {props.freelance && (
                        <Badge variant="outline" className="w-fit">Formation</Badge>
                    )}
                </div>
                <p className="text-xs text-muted-foreground">{props.role}</p>
            </div>
                <p className="text-xs text-muted-foreground text-end w-fit flex-1">{props.date}</p>
        </Link>
    );
};
