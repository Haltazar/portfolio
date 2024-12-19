import { StaticImageData } from "next/image";
import ProfilePicture from "../imgs/BEN6&.png";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, LucideIcon } from "lucide-react";
import { GmailIcon } from "../icons/GmailIcon";
import { LinkedInIcon } from "../icons/LinkedInIcon";
// import {Mail} from "lucide-react";

export const CONTACTS: ContactProps[] = [
    {
        image: ProfilePicture,
        // Icon: Mail,
        mediumSvg: GmailIcon,
        title: "Email",
        description: "bencrhisroux@gmail.com",
        url: "mailto:benchrisroux@gmail.com",
    },
    {
        image: ProfilePicture,
        mediumSvg: LinkedInIcon,
        title: "LinkedIn",
        description: "Benjamin Roux",
        url: "https://www.linkedin.com/in/broux/",
    },
];

type ContactProps = {
    image?: StaticImageData;
    mediumImage?: StaticImageData;
    Icon?: LucideIcon;
    mediumSvg?: React.FC<React.SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
    url: string;
};

export const Contact = (props: ContactProps) => {
    return (
        <Link href={props.url} target="_blank" className="w-full">
            <Card className="p-3 bg-accent/10 flex items-center gap-4 hover:bg-accent/30 transition-colors group">
                <div className="relative">
                    {props.image && (
                        <Image
                            src={props.image}
                            alt={props.title}
                            width={0}
                            height={0}
                            className="w-10 h-10 object-contain rounded-full"
                        />
                    )}
                    {props.Icon && (
                        <props.Icon
                            className="w-10 h-10 object-contain rounded-full p-0.5"
                            size={16}
                        />
                    )}
                    {props.mediumImage && (
                        <Image
                            src={props.mediumImage}
                            alt={props.title}
                            width={0}
                            height={0}
                            className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain"
                        />
                    )}
                    {props.mediumSvg && (
                        <props.mediumSvg className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain text-[#0A66C2] bg-white" />
                    )}
                </div>
                <div className="mr-auto flex flex-col gap-1">
                    <div className="flex flex-col">
                        <p className="sm:text-lg font-semibold xs:text-sm">
                            {props.title}
                        </p>
                    </div>
                    <p className="text-xs text-muted-foreground break-all">
                        {props.description}
                    </p>
                </div>
                <div className="mr-4">
                    <ArrowUpRight
                        className="text-primary group-hover:-translate-y-1 group-hover:translate-x-2 transition-transform"
                        size={16}
                    />
                </div>
            </Card>
        </Link>
    );
};