import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata: Metadata = {
    title: "SlangVibe — Learn Real English",
    description:
        "Move beyond textbook English. Learn slangs, idioms, and lived expressions used in everyday conversations. Master the vibe.",
    keywords: ["slang", "idioms", "English learning", "vocabulary", "GenZ", "language"],
    openGraph: {
        title: "SlangVibe — Learn Real English",
        description: "Move beyond textbook English. Learn slangs, idioms, and cultural expressions.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body
                className={`${inter.variable} font-sans antialiased bg-background text-foreground`}
            >
                <Header />
                <main className="min-h-[calc(100vh-4rem)]">{children}</main>

                {/* Footer */}
                <footer className="border-t border-border/40 py-8">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                            <p className="text-sm text-muted-foreground">
                                © 2026{" "}
                                <span className="font-semibold gradient-text">SlangVibe</span>.
                                Learn Real English.
                            </p>
                            <p className="text-xs text-muted-foreground/60">
                                Built with 💜 for language learners everywhere
                            </p>
                        </div>
                    </div>
                </footer>
            </body>
        </html>
    );
}
