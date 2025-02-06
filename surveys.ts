


export type Answer = {
    surveyId: string;
    answer: string;
}

export type Survey = {
    id: string;
    question: string;
}

export type SurveyResults = {
    surveyId: string;
    question: string;
    answers: Answer[];
}


const surveys: Survey[] = [
    {
        id: "1",
        question: "What is your favorite programming language?"
    },
    {
        id: "2", 
        question: "How many years of coding experience do you have?"
    },
    {
        id: "3",
        question: "Do you prefer working remotely or in an office?"
    },
    {
        id: "4",
        question: "What is your preferred development environment?"
    },
    {
        id: "5",
        question: "How did you learn to code?"
    }
];

const answers: Answer[] = [
    {
        surveyId: "1",
        answer: "TypeScript"
    },
    {
        surveyId: "1", 
        answer: "Python"
    },
    {
        surveyId: "1",
        answer: "JavaScript"
    },
    {
        surveyId: "2",
        answer: "5+ years"
    },
    {
        surveyId: "2",
        answer: "1-3 years" 
    },
    {
        surveyId: "3",
        answer: "Remote"
    },
    {
        surveyId: "3",
        answer: "Hybrid"
    },
    {
        surveyId: "4",
        answer: "VS Code"
    },
    {
        surveyId: "4",
        answer: "WebStorm"
    },
    {
        surveyId: "5",
        answer: "Self-taught"
    },
    {
        surveyId: "5",
        answer: "University"
    }
];

// Get all surveys
function getAllSurveys(): Survey[] {
    return surveys;
}

// Create a survey
function createSurvey(survey: Survey): void {
    surveys.push(survey);
}

// Get a survey by id
function getSurveyById(id: string): Survey | undefined {
    return surveys.find(survey => survey.id === id);
}

// Answer a survey
function answerSurvey(surveyId: string, answer: string): void {
    answers.push({
        surveyId,
        answer
    });
}

// Get survey results by id
function getSurveyResults(surveyId: string): SurveyResults | undefined {
    const survey = getSurveyById(surveyId);
    if (!survey) {
       return undefined;
    }
    const filteredAnswers = answers.filter(answer => answer.surveyId === surveyId);
    return {
        surveyId,
        question: survey.question,
        answers: filteredAnswers
    };
}

export { getAllSurveys, createSurvey, getSurveyById, answerSurvey, getSurveyResults };