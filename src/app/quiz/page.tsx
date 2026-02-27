"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, RotateCcw } from "lucide-react";
import QuizCard from "@/components/QuizCard";
import ProgressDisplay from "@/components/ProgressDisplay";
import { quizQuestions } from "@/data/quizData";
import { useQuizProgress } from "@/hooks/useQuizProgress";

export default function QuizPage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [completed, setCompleted] = useState(false);
    const { progress, recordAnswer, loaded } = useQuizProgress();

    const questions = useMemo(() => quizQuestions, []);

    const handleAnswer = (correct: boolean) => {
        recordAnswer(correct);
        setTimeout(() => {
            if (currentIndex < questions.length - 1) {
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
                    <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                    SLANG QUIZ
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl sm:text-4xl font-bold tracking-tight"
                >
                    Test Your <span className="gradient-text">Slang Knowledge</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-muted-foreground max-w-md mx-auto"
                >
                    How well do you know modern slang? Jump in and find out!
                </motion.p>
            </div>

            {/* Stats */}
            <ProgressDisplay progress={progress} />

            {/* Quiz area */}
            <div className="min-h-[400px]">
                <AnimatePresence mode="wait">
                    {!completed ? (
                        <QuizCard
                            key={currentIndex}
                            question={questions[currentIndex]}
                            onAnswer={handleAnswer}
                            questionNumber={currentIndex + 1}
                            totalQuestions={questions.length}
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
                                    Great job! Check your stats above to track your progress.
                                </p>
                                <motion.button
                                    type="button"
                                    whileTap={{ scale: 0.95 }}
                                    onClick={restart}
                                    className="inline-flex items-center gap-2 rounded-xl gradient-bg px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-vibe-purple/25 hover:opacity-90 transition-opacity"
                                >
                                    <RotateCcw className="h-4 w-4" aria-hidden="true" />
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
