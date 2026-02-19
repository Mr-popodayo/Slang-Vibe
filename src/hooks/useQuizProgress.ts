"use client";

import { useState, useEffect } from "react";
import { QuizProgress } from "@/types";

const STORAGE_KEY = "slangvibe-quiz-progress";

const defaultProgress: QuizProgress = {
    totalQuizzes: 0,
    totalCorrect: 0,
    totalAnswered: 0,
    streak: 0,
    lastQuizDate: "",
    amCompleted: false,
    pmCompleted: false,
};

export function useQuizProgress() {
    const [progress, setProgress] = useState<QuizProgress>(defaultProgress);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                const parsed = JSON.parse(stored) as QuizProgress;
                const today = new Date().toDateString();
                if (parsed.lastQuizDate !== today) {
                    parsed.amCompleted = false;
                    parsed.pmCompleted = false;
                }
                setProgress(parsed);
            }
        } catch {
            // Ignore errors from localStorage
        }
        setLoaded(true);
    }, []);

    const updateProgress = (correct: boolean, quizType: "am" | "pm") => {
        setProgress((prev) => {
            const today = new Date().toDateString();
            const isNewDay = prev.lastQuizDate !== today;
            const updated: QuizProgress = {
                totalQuizzes: prev.totalQuizzes + (quizType === "am" && !prev.amCompleted ? 1 : quizType === "pm" && !prev.pmCompleted ? 1 : 0),
                totalCorrect: prev.totalCorrect + (correct ? 1 : 0),
                totalAnswered: prev.totalAnswered + 1,
                streak: correct ? (isNewDay ? 1 : prev.streak + 1) : 0,
                lastQuizDate: today,
                amCompleted: quizType === "am" ? true : prev.amCompleted,
                pmCompleted: quizType === "pm" ? true : prev.pmCompleted,
            };
            try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
            } catch {
                // Ignore
            }
            return updated;
        });
    };

    const recordAnswer = (correct: boolean, quizType: "am" | "pm") => {
        updateProgress(correct, quizType);
    };

    return { progress, recordAnswer, loaded };
}
