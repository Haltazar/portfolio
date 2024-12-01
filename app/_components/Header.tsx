import { buttonVariants } from "@/components/ui/button";
import { Section } from "./Section";
import { GithubIcon } from "./icons/GithubIcon";
import { TwitterIcon } from "./icons/TwitterIcon";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const Header = () => {
    return (
        <header className="sticky top-0 py-4">
            <Section className="flex items-baseline">
                <h1 className="text-4xl font-bold text-primary">
                    Benjamin Roux
                </h1>
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
                        <TwitterIcon size={12} className="text-foreground" />
                    </Link>
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
                </ul>
            </Section>
        </header>
    );
};
