import { Section } from "./Section";

export const Footer = () => {
    return (
        <footer className="bg-card">
            <Section className="flex flex-col items-center justify-center p-4 gap-4">
                <p>Fait avec ❤️ par Benjamin Roux</p>
                <p className="text-xs text-muted-foreground">
                    <a
                        href="https://github.com/haltazar"
                        target="_blank"
                        className="hover:underline"
                    >
                        Github
                    </a>
                    {" | "}
                    <a
                        href="https://www.linkedin.com/in/broux/"
                        target="_blank"
                        className="hover:underline"
                    >
                        LinkedIn
                    </a>
                </p>
                <p className="text-xs text-muted-foreground">
                    @Copywrite {new Date().getFullYear()} Benjamin Roux
                </p>
            </Section>
        </footer>
    );
};
