"use client";

import { motion } from "framer-motion";
import { Trophy, Flame, Target, Zap } from "lucide-react";
import { QuizProgress } from "@/types";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
    progress: QuizProgress;
}

export default function ProgressDisplay({ progress }: ProgressBarProps) {
    const accuracy =
        progress.totalAnswered > 0
            ? Math.round((progress.totalCorrect / progress.totalAnswered) * 100)
            : 0;

    const stats = [
        {
            icon: Trophy,
            label: "Quizzes",
            value: progress.totalQuizzes,
            color: "text-amber-400",
            bg: "bg-amber-400/10",
        },
        {
            icon: Target,
            label: "Accuracy",
            value: `${accuracy}%`,
            color: "text-emerald-400",
            bg: "bg-emerald-400/10",
        },
        {
            icon: Flame,
            label: "Streak",
            value: progress.streak,
            color: "text-rose-400",
            bg: "bg-rose-400/10",
        },
        {
            icon: Zap,
            label: "Answered",
            value: progress.totalAnswered,
            color: "text-vibe-blue",
            bg: "bg-vibe-blue/10",
        },
    ];

    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.3 }}
                        className="rounded-2xl border border-border/60 bg-card p-4 text-center"
                    >
                        <div
                            className={cn(
                                "mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl",
                                stat.bg
                            )}
                        >
                            <Icon className={cn("h-5 w-5", stat.color)} />
                        </div>
                        <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
                    </motion.div>
                );
            })}
        </div>
    );
}
