"use client";

import { motion } from "framer-motion";
import { Star, Sparkles, TrendingUp, AlertTriangle, Shield, ShieldAlert } from "lucide-react";
import { SlangItem } from "@/types";
import { cn } from "@/lib/utils";

interface VibeOfTheDayProps {
    item: SlangItem;
}

const warningConfig = {
    Safe: { icon: Shield, color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/20" },
    Caution: { icon: AlertTriangle, color: "text-amber-400", bg: "bg-amber-400/10", border: "border-amber-400/20" },
    Risky: { icon: ShieldAlert, color: "text-rose-400", bg: "bg-rose-400/10", border: "border-rose-400/20" },
};

export default function VibeOfTheDay({ item }: VibeOfTheDayProps) {
    const warning = warningConfig[item.usageWarning];
    const WarningIcon = warning.icon;

    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-3xl border border-white/10"
        >
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-vibe-purple/30 via-vibe-blue/20 to-vibe-cyan/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

            {/* Animated glow orbs */}
            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-vibe-purple/20 blur-3xl animate-glow" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-vibe-cyan/20 blur-3xl animate-glow" style={{ animationDelay: "1s" }} />

            <div className="relative z-10 p-6 sm:p-8 lg:p-10">
                {/* Badge */}
                <div className="mb-6 flex items-center gap-2">
                    <div className="flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold gradient-bg text-white shadow-lg shadow-vibe-purple/25">
                        <Sparkles className="h-3.5 w-3.5" />
                        VIBE OF THE DAY
                    </div>
                    <div className={cn("flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium border", warning.bg, warning.border, warning.color)}>
                        <WarningIcon className="h-3.5 w-3.5" />
                        {item.usageWarning}
                    </div>
                </div>

                {/* Term */}
                <h2 className="mb-3 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                    <span className="gradient-text">{item.term}</span>
                </h2>

                {/* Category & Frequency */}
                <div className="mb-4 flex items-center gap-4">
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-secondary/60 px-3 py-1 text-sm font-medium text-foreground">
                        <TrendingUp className="h-3.5 w-3.5 text-vibe-blue" />
                        {item.category}
                    </span>
                    <div className="flex items-center gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                                key={i}
                                className={cn(
                                    "h-4 w-4 transition-colors",
                                    i < item.frequency ? "text-amber-400 fill-amber-400" : "text-muted-foreground/30"
                                )}
                            />
                        ))}
                    </div>
                </div>

                {/* Definition */}
                <p className="mb-4 max-w-2xl text-lg text-foreground/80 leading-relaxed">
                    {item.definition}
                </p>

                {/* Origin */}
                <p className="mb-6 max-w-xl text-sm text-muted-foreground italic">
                    📖 {item.origin}
                </p>

                {/* Example */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Example</p>
                    <p className="text-foreground/90 font-medium">
                        {item.examples[0]}
                    </p>
                </div>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
