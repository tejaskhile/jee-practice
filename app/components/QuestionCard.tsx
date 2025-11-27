"use client";

import React, { useState } from "react";

type Props = {
    id?: number;
    question: string;
    options: string[];
    answer?: number | string;
};

const QuestionCard = ({ id, question, options, answer }: Props) => {
    const [selected, setSelected] = useState<string>("");

    const handleSelect = (opt: string) => {
        setSelected(opt);
    };

    const correctIndex = options.indexOf(String(answer)) + 1;

    return (
        <div className="bg-white p-5 rounded">
            <p className="font-medium text-lg">
                {id}. {question}
            </p>

            <ul className="mt-3 space-y-2 border-2 p-4 border-gray-200 rounded-xl">
                {options.map((opt, i) => (
                    <li
                        key={i}
                        onClick={() => handleSelect(opt)}
                        className={`p-2 rounded cursor-pointer flex items-center gap-2 hover:bg-blue-100
                            ${selected === opt ? "bg-blue-200" : "border-gray-100"}
                        `}
                    >
                        <span className="font-semibold">{i + 1}.</span> {opt}
                    </li>
                ))}
            </ul>

            {selected && (
                <div className="mt-3">
                    {selected === answer ? (
                        <p className="text-green-600 font-semibold">Correct!</p>
                    ) : (
                        <div>
                            <p className="text-red-600 font-semibold">Incorrect!</p>
                            <p className="text-blue-600 font-medium">
                                Correct Answer: {correctIndex}. {answer}
                            </p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default QuestionCard;
