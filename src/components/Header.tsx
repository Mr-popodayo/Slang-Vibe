"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, BookOpen, Moon, Sun, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
    const [darkMode, setDarkMode] = useState(true);
    const [mobileOpen, setMobileOpen] = useState(false);

    const toggleDark = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle("dark");
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
            <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative flex h-9 w-9 items-center justify-center rounded-xl gradient-bg shadow-lg shadow-vibe-purple/25 transition-transform group-hover:scale-110">
                        <Sparkles className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-xl font-bold tracking-tight">
                        <span className="gradient-text">Slang</span>
                        <span className="text-foreground">Vibe</span>
                    </span>
                </Link>

                {/* Desktop nav */}
                <div className="hidden md:flex items-center gap-1">
                    <NavLink href="/" icon={<BookOpen className="h-4 w-4" />} label="Feed" />
                    <NavLink href="/quiz" icon={<Sparkles className="h-4 w-4" />} label="Quiz" />
                </div>

                {/* Right side */}
                <div className="flex items-center gap-2">
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={toggleDark}
                        className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-secondary/50 text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Toggle dark mode"
                    >
                        <AnimatePresence mode="wait">
                            {darkMode ? (
                                <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                                    <Sun className="h-4 w-4" />
                                </motion.div>
                            ) : (
                                <motion.div key="moon" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                                    <Moon className="h-4 w-4" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-secondary/50 text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden overflow-hidden border-t border-border/40"
                    >
                        <div className="flex flex-col gap-1 p-4">
                            <NavLink href="/" icon={<BookOpen className="h-4 w-4" />} label="Feed" onClick={() => setMobileOpen(false)} />
                            <NavLink href="/quiz" icon={<Sparkles className="h-4 w-4" />} label="Quiz" onClick={() => setMobileOpen(false)} />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

function NavLink({ href, icon, label, onClick }: { href: string; icon: React.ReactNode; label: string; onClick?: () => void }) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className={cn(
                "flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-muted-foreground",
                "hover:text-foreground hover:bg-secondary/80 transition-all duration-200"
            )}
        >
            {icon}
            {label}
        </Link>
    );
}
