"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CategoryFilter } from "@/types";

interface CategoryToggleProps {
    active: CategoryFilter;
    onChange: (category: CategoryFilter) => void;
}

const categories: CategoryFilter[] = ["All", "Slang", "Idiom"];

export default function CategoryToggle({ active, onChange }: CategoryToggleProps) {
    return (
        <div className="inline-flex items-center rounded-2xl border border-border bg-secondary/30 p-1 backdrop-blur-sm">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => onChange(cat)}
                    className={cn(
                        "relative rounded-xl px-5 py-2 text-sm font-medium transition-colors duration-200",
                        active === cat ? "text-white" : "text-muted-foreground hover:text-foreground"
                    )}
                >
                    {active === cat && (
                        <motion.div
                            layoutId="category-pill"
                            className="absolute inset-0 rounded-xl gradient-bg shadow-lg shadow-vibe-purple/25"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                        />
                    )}
                    <span className="relative z-10">{cat}</span>
                </button>
            ))}
        </div>
    );
}
