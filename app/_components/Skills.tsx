import { Section } from "./Section";
import { Badge } from "@/components/ui/badge";
import { NextIcon } from "./icons/NextIcon";
import { ReactIcon } from "./icons/ReactIcon";
import { TailwindIcon } from "./icons/TailwindIcon";
import { NodeJSIcon } from "./icons/NodeJS";
import { Code } from "./Code";

export const Skills = () => {
    return (
        <Section className="flex flex-col items-start gap-4">
            <Badge variant={"outline"}>Mes compétences</Badge>
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                J&apos;aime travailler avec
            </h2>
            <div className="flex max-lg:flex-col gap-4">
                <div className="flex flex-col gap-4 flex-1">
                    <div
                        className=" bg-primary rounded-full w-fit pt-2 px-1.5 pb-1 animate-spin"
                        style={{
                            animationDuration: "10s",
                        }}
                    >
                        <ReactIcon
                            size={36}
                            className="text-primary-foreground p-0.5"
                        />
                    </div>
                    <h3 className="mb-2 text-2xl font-semibold tracking-tight">
                        React
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        Adepte à la création de sites web et applications
                        mobiles.Je suis capable de créer des applications
                        performantes et sécurisées via le framework{" "}
                        <Code>React</Code>.
                    </p>
                </div>
                <div className="flex flex-col gap-4 flex-1">
                    <div className=" bg-primary rounded-full w-fit p-1.5">
                        <NextIcon
                            size={36}
                            className="text-primary-foreground p-0.5"
                        />
                    </div>
                    <h3 className="mb-2 text-2xl font-semibold tracking-tight">
                        Next.js
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        J&apos;ai une expertise en développement web et mobile
                        avec <Code>Next.js</Code>. Avec sa gestion de
                        l&apos;application et son environnement de développement
                        optimal, je peux créer des applications performantes et
                        sécurisées.
                    </p>
                </div>
                <div className="flex flex-col gap-4 flex-1">
                    <div className=" bg-primary rounded-full w-fit p-1.5">
                        <NodeJSIcon
                            size={36}
                            className="text-primary-foreground p-0.5"
                        />
                    </div>
                    <h3 className="mb-2 text-2xl font-semibold tracking-tight">
                        Node.js
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        J&apos;utilise les frameworks <Code>Express.js</Code>{" "}
                        ainsi que <Code>AdonisJs</Code> afin de concevoir des
                        APIs RESTful perfomantes et sécurisées.
                    </p>
                </div>
                <div className="flex flex-col gap-4 flex-1">
                    <div className=" bg-primary rounded-full w-fit p-1.5">
                        <TailwindIcon
                            size={36}
                            className="text-primary-foreground p-0.5"
                        />
                    </div>
                    <h3 className="mb-2 text-2xl font-semibold tracking-tight">
                        Tailwind
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        Grâce à la bibliothèque <Code>Tailwind</Code>, je peux
                        créer des interfaces de design responsive et
                        adaptatives.
                    </p>
                </div>
            </div>
        </Section>
    );
};
