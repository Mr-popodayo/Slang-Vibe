"use client";

import { useState, useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import VibeOfTheDay from "@/components/VibeOfTheDay";
import CategoryToggle from "@/components/CategoryToggle";
import SearchBar from "@/components/SearchBar";
import SlangCard from "@/components/SlangCard";
import { slangData, getVibeOfTheDay, filterItems } from "@/data/data";
import { CategoryFilter } from "@/types";

export default function HomePage() {
    const [category, setCategory] = useState<CategoryFilter>("All");
    const [search, setSearch] = useState("");

    const vibeOfTheDay = useMemo(() => getVibeOfTheDay(slangData), []);
    const filteredItems = useMemo(
        () => filterItems(slangData, category, search),
        [category, search]
    );

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-8">
            {/* Hero: Vibe of the Day */}
            <VibeOfTheDay item={vibeOfTheDay} />

            {/* Filter bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <CategoryToggle active={category} onChange={setCategory} />
                <SearchBar value={search} onChange={setSearch} />
            </div>

            {/* Results count */}
            <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                    Showing{" "}
                    <span className="font-semibold text-foreground">
                        {filteredItems.length}
                    </span>{" "}
                    {filteredItems.length === 1 ? "result" : "results"}
                    {category !== "All" && (
                        <span>
                            {" "}
                            in <span className="font-medium text-vibe-purple">{category}</span>
                        </span>
                    )}
                    {search && (
                        <span>
                            {" "}
                            for &quot;<span className="font-medium text-vibe-blue">{search}</span>&quot;
                        </span>
                    )}
                </p>
            </div>

            {/* Card grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <AnimatePresence mode="popLayout">
                    {filteredItems.map((item, index) => (
                        <SlangCard key={item.id} item={item} index={index} />
                    ))}
                </AnimatePresence>
            </div>

            {/* Empty state */}
            {filteredItems.length === 0 && (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                    <div className="mb-4 text-6xl">🤷</div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                        No vibes found
                    </h3>
                    <p className="text-sm text-muted-foreground max-w-sm">
                        Try adjusting your search or switching categories. The vibe is out there somewhere!
                    </p>
                </div>
            )}
        </div>
    );
}
