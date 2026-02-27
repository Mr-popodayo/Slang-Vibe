"use client";

import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
}

// 検索クエリの最大文字数（異常な長さの入力を防ぐ）
const MAX_SEARCH_LENGTH = 100;

export default function SearchBar({ value, onChange }: SearchBarProps) {
    const handleChange = (inputValue: string) => {
        // 最大文字数を超える入力を切り捨て
        if (inputValue.length <= MAX_SEARCH_LENGTH) {
            onChange(inputValue);
        }
    };

    return (
        <div className="relative w-full max-w-md" role="search">
            <Search
                className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none"
                aria-hidden="true"
            />
            <input
                type="search"
                placeholder="Search slangs, idioms, tags…"
                value={value}
                onChange={(e) => handleChange(e.target.value)}
                maxLength={MAX_SEARCH_LENGTH}
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
                    type="button"
                    aria-label="Clear search"
                >
                    <X className="h-4 w-4" />
                </button>
            )}
        </div>
    );
}
