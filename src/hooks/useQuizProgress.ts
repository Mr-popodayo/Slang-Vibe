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
};

export function useQuizProgress() {
    const [progress, setProgress] = useState<QuizProgress>(defaultProgress);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                const parsed = JSON.parse(stored) as QuizProgress;
                setProgress(parsed);
            }
        } catch {
            // Ignore errors from localStorage
        }
        setLoaded(true);
    }, []);

    const recordAnswer = (correct: boolean) => {
        setProgress((prev) => {
            const today = new Date().toDateString();
            const isNewDay = prev.lastQuizDate !== today;
            const updated: QuizProgress = {
                totalQuizzes: isNewDay ? prev.totalQuizzes + 1 : prev.totalQuizzes,
                totalCorrect: prev.totalCorrect + (correct ? 1 : 0),
                totalAnswered: prev.totalAnswered + 1,
                streak: correct ? prev.streak + 1 : 0,
                lastQuizDate: today,
            };
            try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
            } catch {
                // Ignore
            }
            return updated;
        });
    };

    return { progress, recordAnswer, loaded };
}
