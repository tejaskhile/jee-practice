"use client";
import React from "react";
import QuestionCard from "../components/QuestionCard";
import questions from "../components/questions";

const Dashboard = () => {
    if (!questions || questions.length === 0) {
        return (
            <div className="px-4 md:px-8 mt-10">
                <h2 className="text-2xl font-semibold">No questions found</h2>
                <p className="text-gray-600">
                    Check [questions.js](http://_vscodecontentref_/2) export and shape.
                </p>
            </div>
        );
    }

    return (
        <div className="px-4 md:px-[15%] mt-10 pb-10">
            <h2 className="text-2xl md:text-4xl font-semibold">JEE Questions</h2>
            <p className="text-sm md:text-base text-gray-600 mb-5">Practice your questions here</p>

            <div className="mt-5 flex flex-col gap-5 w-full max-w-4xl">
                {questions.map((q, idx) => (
                    <QuestionCard key={q.id ?? idx} {...q} options={q.options.map(String)} />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
