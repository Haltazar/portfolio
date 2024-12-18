import { buttonVariants } from "@/components/ui/button";
import { Section } from "./Section";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedInIcon } from "./icons/LinkedInIcon";
import Link from "next/link";
import { cn } from "@/lib/utils";
import LogoBR from "./imgs/logoNoBg.png";
import Image from "next/image";

export const Header = () => {
    return (
        <header className="sticky top-0 py-4">
            <Section className="flex items-center">
                <Image src={LogoBR} alt="Logo" width={0} height={0} className="w-16 md:w-20 lg:w-24 h-16 md:h-20 lg:h-24 rounded-lg" />
                <div className="flex-1" />
                <ul className="flex items-center gap-2">
                    <Link
                        className={cn(
                            buttonVariants({ variant: "outline" }),
                            "size-6 p-0"
                        )}
                        href="https://github.com/haltazar"
                        target="_blank"
                    >
                        <GithubIcon size={12} className="text-foreground" />
                    </Link>
                    <Link
                        className={cn(
                            buttonVariants({ variant: "outline" }),
                            "size-6 p-0"
                        )}
                        href="https://www.linkedin.com/in/broux/"
                        target="_blank"
                    >
                        <LinkedInIcon size={12} className="text-foreground" />
                    </Link>
                    {/* <Link
                        className={cn(
                            buttonVariants({ variant: "outline" }),
                            "size-6 p-0"
                        )}
                        href="https://github.com/haltazar"
                        target="_blank"
                    >
                        <GithubIcon size={12} className="text-foreground" />
                    </Link> */}
                </ul>
            </Section>
        </header>
    );
};
