import { Section } from "./Section";
import { Badge } from "@/components/ui/badge";
import { Contact as ContactCard, CONTACTS } from "./cards/ContactCard";

export const Contact = () => {
    return (
        <Section className="flex flex-col items-start gap-4">
            <Badge variant={"outline"}>Contactez moi !</Badge>
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Je serai plus que ravi de travailler avec vous !
            </h2>
            <div className="flex max-lg:flex-col gap-4 w-full">
                <ContactCard {...CONTACTS[0]} description="Pour toutes questions, envoyez un mail." />
                <ContactCard {...CONTACTS[1]} />
            </div>
        </Section>
    );
};
