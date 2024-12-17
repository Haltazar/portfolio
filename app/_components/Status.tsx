import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { Home, LucideIcon } from "lucide-react";
import Link from "next/link";

export const Status = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            <div className="flex-[3] w-full">
                <Card className="w-full p-4 flex flex-col gap-2">
                    <p className="text-lg text-muted-foreground">
                        Side fun project
                    </p>
                    <div className="flex flex-col gap-4">
                        {SIDE_PROJECTS.map((project, index) => (
                            <SideProject 
                            key={index}
                            Logo={project.Logo}
                            title={project.title}
                            description={project.description}
                            url={project.url}
                            />
                        ))}
                    </div>
                </Card>
            </div>
            <div className="flex-[2] h-full w-full flex flex-col gap-4">
                <Card className="p-4 flex-1">Work</Card>
                <Card className="p-4 flex-1">Contact Me</Card>
            </div>
        </Section>
    );
};

const SIDE_PROJECTS = [
    {
        Logo: Home,
        title: "Home",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        url: "https://www.roulemarcel.fr/",
    },
    {
        Logo: Home,
        title: "Home",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        url: "https://www.mydigitalschool.com/ecole-multimedia-angers",
    },
];

type SideProjectProps = {
    Logo: LucideIcon;
    title: string;
    description: string;
    url: string;
};

const SideProject = (props: SideProjectProps) => {
    return (
        <div>
            <Link href={props.url} target="_blank" className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
                <span className="bg-accent text-accent-foreground p-3 rounded-sm">
                    <props.Logo />
                </span>
                <div>
                    <p className="text-lg font-semibold">{props.title}</p>
                    <p className="text-lg text-muted-foreground">
                        {props.description}
                    </p>
                </div>
            </Link>
        </div>
    );
};
