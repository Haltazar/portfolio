import { Code } from "./Code";
import { Section } from "./Section";
import ProfilePicture from "./imgs/BEN6&.png";
import Image from "next/image";
import Link from "next/link";

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
                    Passionné par le numérique, j’ai décidé de me reconvertir
                    après une première carrière en tant que professeur de
                    français langue étrangère. Cette transition m’a conduit à
                    suivre une formation de Développeur Web et Web Mobile au{" "}
                    <Link href="https://www.cefim.eu/" target="_blank">
                        <Code>CEFIM</Code>
                    </Link>
                    , où j’ai acquis les bases essentielles du développement.
                    J’ai ensuite poursuivi mon apprentissage avec un cursus en
                    Conception et Développement d’Applications à{" "}
                    <Link
                        href="https://www.mydigitalschool.com/ecole-multimedia-angers"
                        target="_blank"
                    >
                        <Code>MyDigitalSchool</Code>
                    </Link>
                    , qui m’a permis de perfectionner mes compétences.
                    Aujourd’hui, je travaille chez{" "}
                    <Link href="https://www.roulemarcel.fr/" target="_blank">
                        <Code>Roule Marcel</Code>
                    </Link>{" "}
                    en tant que développeur full stack, où je mets en pratique
                    ma passion et mes compétences au service de projets
                    enrichissants.
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
