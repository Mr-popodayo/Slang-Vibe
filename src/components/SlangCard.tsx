"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    Star,
    TrendingUp,
    Shield,
    AlertTriangle,
    ShieldAlert,
    ChevronDown,
    ChevronUp,
    Play,
    Hash,
} from "lucide-react";
import { SlangItem } from "@/types";
import { cn } from "@/lib/utils";

interface SlangCardProps {
    item: SlangItem;
    index: number;
}

const warningConfig = {
    Safe: {
        icon: Shield,
        label: "Safe to use",
        color: "text-emerald-400",
        bg: "bg-emerald-400/10",
        border: "border-emerald-400/20",
        dot: "bg-emerald-400",
    },
    Caution: {
        icon: AlertTriangle,
        label: "Use with caution",
        color: "text-amber-400",
        bg: "bg-amber-400/10",
        border: "border-amber-400/20",
        dot: "bg-amber-400",
    },
    Risky: {
        icon: ShieldAlert,
        label: "Risky — know your audience",
        color: "text-rose-400",
        bg: "bg-rose-400/10",
        border: "border-rose-400/20",
        dot: "bg-rose-400",
    },
};

export default function SlangCard({ item, index }: SlangCardProps) {
    const [expanded, setExpanded] = useState(false);
    const warning = warningConfig[item.usageWarning];
    const WarningIcon = warning.icon;

    return (
        <motion.article
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
                "group relative overflow-hidden rounded-2xl border border-border/60",
                "bg-card hover:border-vibe-purple/30 card-glow",
                "transition-all duration-300"
            )}
        >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] gradient-bg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="p-5">
                {/* Header: Category + Safety */}
                <div className="mb-3 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-secondary/60 px-2.5 py-1 text-xs font-medium text-foreground">
                        <TrendingUp className="h-3 w-3 text-vibe-blue" />
                        {item.category}
                    </span>
                    <div
                        className={cn(
                            "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium border",
                            warning.bg,
                            warning.border,
                            warning.color
                        )}
                    >
                        <WarningIcon className="h-3 w-3" />
                        {item.usageWarning}
                    </div>
                </div>

                {/* Term */}
                <h3 className="mb-2 text-xl font-bold text-foreground group-hover:gradient-text transition-all duration-300">
                    {item.term}
                </h3>

                {/* Frequency stars */}
                <div className="mb-3 flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                            key={i}
                            className={cn(
                                "h-3.5 w-3.5",
                                i < item.frequency
                                    ? "text-amber-400 fill-amber-400"
                                    : "text-muted-foreground/20"
                            )}
                        />
                    ))}
                    <span className="ml-1.5 text-xs text-muted-foreground">Popularity</span>
                </div>

                {/* Definition */}
                <p className="mb-3 text-sm leading-relaxed text-foreground/80">
                    {item.definition}
                </p>

                {/* Usage warning tooltip */}
                <p className={cn("mb-3 text-xs font-medium", warning.color)}>
                    ⚡ {warning.label}
                </p>

                {/* Tags */}
                <div className="mb-3 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                        <span
                            key={tag}
                            className="inline-flex items-center gap-1 rounded-full border border-border/60 bg-secondary/30 px-2.5 py-0.5 text-xs text-muted-foreground"
                        >
                            <Hash className="h-2.5 w-2.5" />
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Expand toggle */}
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="flex w-full items-center justify-center gap-1.5 rounded-xl border border-border/40 bg-secondary/20 py-2 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/40 transition-all duration-200"
                >
                    {expanded ? (
                        <>
                            Less <ChevronUp className="h-3.5 w-3.5" />
                        </>
                    ) : (
                        <>
                            More <ChevronDown className="h-3.5 w-3.5" />
                        </>
                    )}
                </button>

                {/* Expanded content */}
                <motion.div
                    initial={false}
                    animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                >
                    <div className="mt-4 space-y-4">
                        {/* Origin */}
                        <div className="rounded-xl bg-secondary/30 p-3 border border-border/40">
                            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                Origin
                            </p>
                            <p className="text-sm text-foreground/80 italic">{item.origin}</p>
                        </div>

                        {/* Examples */}
                        <div>
                            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                Examples
                            </p>
                            <div className="space-y-2">
                                {item.examples.map((example, idx) => (
                                    <div
                                        key={idx}
                                        className="rounded-xl bg-secondary/20 border border-border/30 p-3"
                                    >
                                        <p className="text-sm text-foreground/80">{example}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* YouTube embed placeholder */}
                        {item.media.youtube_id && (
                            <div className="rounded-xl bg-secondary/30 border border-border/40 overflow-hidden">
                                <div className="flex items-center justify-center gap-2 p-6 text-muted-foreground">
                                    <Play className="h-8 w-8 text-vibe-purple" />
                                    <div>
                                        <p className="text-sm font-medium text-foreground">Watch in context</p>
                                        <p className="text-xs text-muted-foreground">YouTube clip available</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </motion.article>
    );
}
