"use client";
import React from "react";
import QuestionCard from "../components/QuestionCard";
import questions from "../components/questions";

const Dashboard = () => {
    if (!questions || questions.length === 0) {
        return (
            <div className="px-8 mt-10">
                <h2 className="text-2xl font-semibold">No questions found</h2>
                <p className="text-gray-600">
                    Check /app/components/questions.js export and shape.
                </p>
            </div>
        );
    }

    return (
        <div className="px-[15%] h-full mt-10 flex flex-col w-full mb-10">
            <h2 className="text-4xl font-semibold">JEE Questions</h2>
            <p className="text-gray-600">Practice your questions here</p>

            <div className="mt-5 flex flex-col gap-5 w-[80%]">
                {questions.map((q, idx) => (
                    <QuestionCard key={q.id ?? idx} {...q} options={q.options.map(String)} />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
