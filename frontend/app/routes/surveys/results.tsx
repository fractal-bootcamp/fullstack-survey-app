import type { Route } from "./+types/results";
import apiClient from "client";
import { Link, useLoaderData } from "react-router";

export function meta({ data }: Route.MetaArgs) {
    return [
        { title: `Survey Results: ${data?.question}` },
        { name: "description", content: `View results for survey: ${data?.question}, total responses: ${data?.answers?.length}` },
    ];
}


export async function loader({ params }: Route.LoaderArgs) {
    const response = await apiClient.surveys({ id: params.id }).results.get();
    if (!response.data) {
        throw new Error("Failed to load survey results");
    }
    return response.data;
}

export default function Results() {
    const results = useLoaderData<typeof loader>();

    return (
        <main className="p-4">
            <h1 className="text-2xl font-bold mb-4">Survey: {results.question}</h1>
            <div className="space-y-2">
                <p>Total Responses: {results.answers.length}</p>
                <ul className="list-disc pl-6">
                    {results.answers.map((answer, index) => (
                        <li key={index} className="py-2 hover:bg-gray-600 rounded transition-colors duration-200 font-medium">{answer.answer}</li>
                    ))}
                </ul>
                <Link to={`/surveys/${results.surveyId}`} className="mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200">Back to Survey</Link>
            </div>
        </main>
    );
}
