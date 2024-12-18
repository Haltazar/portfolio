import {  Section } from "./Section";
import { Badge } from "@/components/ui/badge";
import { NextIcon } from "./icons/NextIcon";
import { TailwindIcon } from "./icons/TailwindIcon";

export const Skills = () => {
    return (
        <Section className="flex flex-col items-start gap-4">
            <Badge variant={"outline"}>Mes compétences</Badge>
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                J&apos; aime travailler avec
            </h2>
            <div>
                <div>
                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary lg:h-12 lg:w-12">
                        <TailwindIcon size={36} className="text-primary-foreground" />
                    </div>
                    <h3 className="mb-2 text-2xl font-semibold tracking-tight">
                        Marketing
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        Plan it, create it, launch it. Collaborate seamlessly
                        with all the organization and hit your marketing goals
                        every month with our marketing plan.
                    </p>
                </div>
            </div>
        </Section>
    );
};