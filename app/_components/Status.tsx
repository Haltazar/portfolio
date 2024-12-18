import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { Project, PROJECTS } from "./cards/ProjectCard";
import { Work, WORKS } from "./cards/WorkCard";
import { Contact, CONTACTS } from "./cards/ContactCard";

export const Status = () => {
    return (
        <Section className="flex max-lg:flex-col items-start gap-4">
            <div className="flex-[3] w-full">
                <Card className="w-full p-4 flex flex-col gap-2">
                    <p className="text-lg text-muted-foreground">Mes projets</p>
                    <div className="flex flex-col gap-4">
                        {PROJECTS.map((project, index) => (
                            <Project key={index} {...project} />
                        ))}
                    </div>
                </Card>
            </div>
            <div className="flex-[2] h-full w-full flex flex-col gap-2">
                <Card className="p-4 flex-1 flex flex-col gap-2">
                    <p className="text-lg text-muted-foreground">
                        Mes expériences
                    </p>
                    <div className="flex flex-col gap-4">
                        {WORKS.map((work, index) => (
                            <Work key={index} {...work} />
                        ))}
                    </div>
                </Card>
                <Card className="p-4 flex-1 flex flex-col gap-2">
                    <p className="text-lg text-muted-foreground">
                        Me contacter
                    </p>
                    <div className="flex flex-col gap-4">
                        {CONTACTS.map((contact, index) => (
                            <Contact key={index} {...contact} />
                        ))}
                    </div>
                </Card>
            </div>
        </Section>
    );
};






