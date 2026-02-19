"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, ArrowRight, Lightbulb } from "lucide-react";
import { QuizQuestion } from "@/types";
import { cn } from "@/lib/utils";

interface QuizCardProps {
    question: QuizQuestion;
    onAnswer: (correct: boolean) => void;
    questionNumber: number;
    totalQuestions: number;
}

export default function QuizCard({
    question,
    onAnswer,
    questionNumber,
    totalQuestions,
}: QuizCardProps) {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [fillAnswer, setFillAnswer] = useState("");
    const [revealed, setRevealed] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    const handleSelect = (option: string) => {
        if (revealed) return;
        setSelectedOption(option);
        const correct = option === question.correctAnswer;
        setIsCorrect(correct);
        setRevealed(true);
        setTimeout(() => onAnswer(correct), 1200);
    };

    const handleFillSubmit = () => {
        if (revealed || !fillAnswer.trim()) return;
        const correct = fillAnswer.trim().toLowerCase() === question.correctAnswer.toLowerCase();
        setIsCorrect(correct);
        setRevealed(true);
        setTimeout(() => onAnswer(correct), 1200);
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-xl mx-auto"
        >
            <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card">
                {/* Top gradient accent */}
                <div className="h-1 gradient-bg" />

                <div className="p-6 sm:p-8">
                    {/* Progress indicator */}
                    <div className="mb-6 flex items-center justify-between">
                        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                            Question {questionNumber} / {totalQuestions}
                        </span>
                        <div className="h-1.5 flex-1 mx-4 rounded-full bg-secondary/50 overflow-hidden">
                            <motion.div
                                className="h-full gradient-bg rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
                                transition={{ duration: 0.5 }}
                            />
                        </div>
                    </div>

                    {/* Question */}
                    <div className="mb-6">
                        <div className="flex items-start gap-3 mb-2">
                            <Lightbulb className="h-5 w-5 text-vibe-purple mt-0.5 shrink-0" />
                            <h3 className="text-lg font-semibold text-foreground leading-snug">
                                {question.question}
                            </h3>
                        </div>
                    </div>

                    {/* Multiple choice */}
                    {question.type === "multiple-choice" && question.options && (
                        <div className="space-y-3">
                            {question.options.map((option, i) => {
                                const letter = String.fromCharCode(65 + i);
                                const isSelected = selectedOption === option;
                                const isAnswer = option === question.correctAnswer;

                                return (
                                    <motion.button
                                        key={option}
                                        whileHover={!revealed ? { scale: 1.01 } : {}}
                                        whileTap={!revealed ? { scale: 0.99 } : {}}
                                        onClick={() => handleSelect(option)}
                                        disabled={revealed}
                                        className={cn(
                                            "relative w-full flex items-center gap-3 rounded-xl border p-4 text-left transition-all duration-200",
                                            !revealed &&
                                            "border-border/60 bg-secondary/20 hover:border-vibe-purple/30 hover:bg-secondary/40 cursor-pointer",
                                            revealed && isAnswer &&
                                            "border-emerald-400/40 bg-emerald-400/10",
                                            revealed && isSelected && !isAnswer &&
                                            "border-rose-400/40 bg-rose-400/10",
                                            revealed && !isSelected && !isAnswer &&
                                            "border-border/30 bg-secondary/10 opacity-50"
                                        )}
                                    >
                                        <span
                                            className={cn(
                                                "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold",
                                                !revealed && "bg-secondary/50 text-muted-foreground",
                                                revealed && isAnswer && "bg-emerald-400/20 text-emerald-400",
                                                revealed && isSelected && !isAnswer && "bg-rose-400/20 text-rose-400"
                                            )}
                                        >
                                            {letter}
                                        </span>
                                        <span className="flex-1 text-sm font-medium text-foreground">
                                            {option}
                                        </span>
                                        {revealed && isAnswer && (
                                            <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
                                        )}
                                        {revealed && isSelected && !isAnswer && (
                                            <XCircle className="h-5 w-5 text-rose-400 shrink-0" />
                                        )}
                                    </motion.button>
                                );
                            })}
                        </div>
                    )}

                    {/* Fill in the blank */}
                    {question.type === "fill-in-blank" && (
                        <div className="space-y-4">
                            <div className="flex gap-3">
                                <input
                                    type="text"
                                    value={fillAnswer}
                                    onChange={(e) => setFillAnswer(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && handleFillSubmit()}
                                    disabled={revealed}
                                    placeholder="Type your answer…"
                                    className={cn(
                                        "flex-1 rounded-xl border bg-secondary/20 px-4 py-3 text-sm text-foreground",
                                        "placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-vibe-purple/40",
                                        revealed && isCorrect && "border-emerald-400/40 bg-emerald-400/10",
                                        revealed && !isCorrect && "border-rose-400/40 bg-rose-400/10",
                                        !revealed && "border-border/60"
                                    )}
                                />
                                {!revealed && (
                                    <motion.button
                                        whileTap={{ scale: 0.95 }}
                                        onClick={handleFillSubmit}
                                        className="flex items-center gap-2 rounded-xl gradient-bg px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-vibe-purple/25 hover:opacity-90 transition-opacity"
                                    >
                                        Check <ArrowRight className="h-4 w-4" />
                                    </motion.button>
                                )}
                            </div>

                            {/* Feedback */}
                            <AnimatePresence>
                                {revealed && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        className={cn(
                                            "rounded-xl border p-4",
                                            isCorrect
                                                ? "border-emerald-400/30 bg-emerald-400/10"
                                                : "border-rose-400/30 bg-rose-400/10"
                                        )}
                                    >
                                        <div className="flex items-center gap-2 mb-1">
                                            {isCorrect ? (
                                                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                                            ) : (
                                                <XCircle className="h-5 w-5 text-rose-400" />
                                            )}
                                            <p className={cn("text-sm font-semibold", isCorrect ? "text-emerald-400" : "text-rose-400")}>
                                                {isCorrect ? "Correct!" : "Not quite…"}
                                            </p>
                                        </div>
                                        {!isCorrect && (
                                            <p className="text-sm text-foreground/80">
                                                Answer: <span className="font-semibold">{question.correctAnswer}</span>
                                            </p>
                                        )}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
