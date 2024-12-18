import { ComponentPropsWithRef } from "react";
import { Section } from "./Section";
import ProfilePicture from "./imgs/BEN6&.png";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Code = ({className, ...props}: ComponentPropsWithRef<"span">) => {
    return (
        <span className={cn("bg-accent/30 font-mono border border-accent px-1 py-0.5 rounded-sm text-primary hover:bg-accent/50 transition-colors", className)} {...props}>
            {props.children}
        </span>
    );
};

export const Hero = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            <div className="flex-[3] flex flex-col gap-2 w-full">
                <h2 className="font-caption text-5xl text-primary font-bold">
                    Benjamin Roux
                </h2>
                <h3 className="text-3xl font-caption">
                    Développeur web full stack
                </h3>
                <p className="text-base">
                    <Link href="https://www.roulemarcel.fr/" target="_blank">
                        <Code>RouleMarcel</Code>.
                    </Link>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Illo iure architecto distinctio animi, illum numquam eius
                    amet, autem quibusdam debitis et eligendi temporibus
                    dignissimos perspiciatis eos ad corrupti beatae
                    <Link
                        href="https://www.mydigitalschool.com/ecole-multimedia-angers"
                        target="_blank"
                    >
                        <Code>MyDigitalSchool</Code>.
                    </Link>
                    <Link href="https://www.cefim.eu/" target="_blank">
                        <Code>CEFIM</Code>.
                    </Link>
                </p>
            </div>
            <div className="flex-[2] max-md:m-auto ml-auto">
                <Image
                    src={ProfilePicture}
                    className="w-full h-auto rounded-full max-w-xs max-md:w-56"
                    alt="Photo de Benjamin Roux"
                />
            </div>
        </Section>
    );
};
