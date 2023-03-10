import { useTheme } from "next-themes";
import Head from "next/head";

export default function Home() {
    const { theme, setTheme } = useTheme();
    return (
        <>
            <Head>
                <title>Pursharth Portfolio</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <h1 className="text-3xl font-bold underline">Hello world</h1>
                <button
                    onClick={() =>
                        setTheme(theme === "dark" ? "light" : "dark")
                    }
                >
                    Toggle
                </button>
            </main>
        </>
    );
}
