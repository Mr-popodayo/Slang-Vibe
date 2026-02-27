export interface SlangItem {
    id: string;
    term: string;
    category: "Slang" | "Idiom";
    definition: string;
    origin: string;
    frequency: 1 | 2 | 3 | 4 | 5;
    usageWarning: "Safe" | "Caution" | "Risky";
    examples: string[];
    tags: string[];
    media: {
        youtube_id: string;
        image_url: string;
    };
}

export interface QuizQuestion {
    id: string;
    type: "multiple-choice" | "fill-in-blank";
    question: string;
    correctAnswer: string;
    options?: string[];
    relatedTermId: string;
}

export interface QuizProgress {
    totalQuizzes: number;
    totalCorrect: number;
    totalAnswered: number;
    streak: number;
    lastQuizDate: string;
    
}

export type CategoryFilter = "All" | "Slang" | "Idiom";
