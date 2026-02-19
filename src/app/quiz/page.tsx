"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon as MoonIcon, Sparkles, RotateCcw } from "lucide-react";
import QuizCard from "@/components/QuizCard";
import ProgressDisplay from "@/components/ProgressDisplay";
import { quizQuestions, amQuizIds, pmQuizIds } from "@/data/quizData";
import { useQuizProgress } from "@/hooks/useQuizProgress";
import { cn } from "@/lib/utils";

type QuizTab = "am" | "pm";

export default function QuizPage() {
    const [tab, setTab] = useState<QuizTab>("am");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [completed, setCompleted] = useState(false);
    const { progress, recordAnswer, loaded } = useQuizProgress();

    const currentQuestions = useMemo(() => {
        const ids = tab === "am" ? amQuizIds : pmQuizIds;
        return ids.map((id) => quizQuestions.find((q) => q.id === id)!);
    }, [tab]);

    const handleAnswer = (correct: boolean) => {
        recordAnswer(correct, tab);
        setTimeout(() => {
            if (currentIndex < currentQuestions.length - 1) {
                setCurrentIndex((prev) => prev + 1);
            } else {
                setCompleted(true);
            }
        }, 300);
    };

    const restart = () => {
        setCurrentIndex(0);
        setCompleted(false);
    };

    const switchTab = (newTab: QuizTab) => {
        setTab(newTab);
        setCurrentIndex(0);
        setCompleted(false);
    };

    if (!loaded) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <div className="h-8 w-8 rounded-full border-2 border-vibe-purple border-t-transparent animate-spin" />
            </div>
        );
    }

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-8">
            {/* Page header */}
            <div className="text-center space-y-3">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 rounded-full gradient-bg px-4 py-1.5 text-xs font-semibold text-white shadow-lg shadow-vibe-purple/25"
                >
                    <Sparkles className="h-3.5 w-3.5" />
                    DAILY QUIZ
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl sm:text-4xl font-bold tracking-tight"
                >
                    Test Your <span className="gradient-text">Vibe Knowledge</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-muted-foreground max-w-md mx-auto"
                >
                    Take the AM quiz in the morning and PM quiz in the evening to build
                    your streak!
                </motion.p>
            </div>

            {/* Stats */}
            <ProgressDisplay progress={progress} />

            {/* AM / PM Toggle */}
            <div className="flex justify-center">
                <div className="inline-flex items-center rounded-2xl border border-border bg-secondary/30 p-1 backdrop-blur-sm">
                    {(["am", "pm"] as const).map((t) => (
                        <button
                            key={t}
                            onClick={() => switchTab(t)}
                            className={cn(
                                "relative flex items-center gap-2 rounded-xl px-6 py-2.5 text-sm font-medium transition-colors duration-200",
                                tab === t ? "text-white" : "text-muted-foreground hover:text-foreground"
                            )}
                        >
                            {tab === t && (
                                <motion.div
                                    layoutId="quiz-tab"
                                    className="absolute inset-0 rounded-xl gradient-bg shadow-lg shadow-vibe-purple/25"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                                />
                            )}
                            <span className="relative z-10 flex items-center gap-2">
                                {t === "am" ? (
                                    <Sun className="h-4 w-4" />
                                ) : (
                                    <MoonIcon className="h-4 w-4" />
                                )}
                                {t.toUpperCase()} Quiz
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Quiz area */}
            <div className="min-h-[400px]">
                <AnimatePresence mode="wait">
                    {!completed ? (
                        <QuizCard
                            key={`${tab}-${currentIndex}`}
                            question={currentQuestions[currentIndex]}
                            onAnswer={handleAnswer}
                            questionNumber={currentIndex + 1}
                            totalQuestions={currentQuestions.length}
                        />
                    ) : (
                        <motion.div
                            key="completed"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="mx-auto max-w-xl text-center space-y-6"
                        >
                            <div className="rounded-2xl border border-border/60 bg-card p-8 sm:p-10">
                                <div className="text-6xl mb-4">🎉</div>
                                <h2 className="text-2xl font-bold text-foreground mb-2">
                                    Quiz Complete!
                                </h2>
                                <p className="text-muted-foreground mb-6">
                                    You finished the {tab.toUpperCase()} Quiz. Check your stats
                                    above to track your progress.
                                </p>
                                <motion.button
                                    whileTap={{ scale: 0.95 }}
                                    onClick={restart}
                                    className="inline-flex items-center gap-2 rounded-xl gradient-bg px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-vibe-purple/25 hover:opacity-90 transition-opacity"
                                >
                                    <RotateCcw className="h-4 w-4" />
                                    Try Again
                                </motion.button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
