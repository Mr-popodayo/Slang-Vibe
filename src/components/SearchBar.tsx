"use client";

import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
    return (
        <div className="relative w-full max-w-md">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
            <input
                type="text"
                placeholder="Search slangs, idioms, tags…"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={cn(
                    "w-full rounded-2xl border border-border bg-secondary/30 py-2.5 pl-10 pr-10 text-sm text-foreground",
                    "placeholder:text-muted-foreground/60 backdrop-blur-sm",
                    "focus:outline-none focus:ring-2 focus:ring-vibe-purple/40 focus:border-vibe-purple/40",
                    "transition-all duration-200"
                )}
            />
            {value && (
                <button
                    onClick={() => onChange("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Clear search"
                >
                    <X className="h-4 w-4" />
                </button>
            )}
        </div>
    );
}
