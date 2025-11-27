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
        <div className="bg-white p-4 md:p-5 rounded shadow-sm">
            <p className="font-medium text-base md:text-lg wrap-break-word">
                {id}. {question}
            </p>

            <ul className="mt-3 space-y-2 border-2 p-3 md:p-4 border-gray-200 rounded-xl">
                {options.map((opt, i) => (
                    <li
                        key={i}
                        onClick={() => handleSelect(opt)}
                        className={`p-2 rounded cursor-pointer flex items-center gap-2 hover:bg-blue-50
                            ${selected === opt ? "bg-blue-100" : "border-gray-100"}
                            text-sm md:text-base`}
                    >
                        <span className="font-semibold">{i + 1}.</span>
                        <span className="truncate">{opt}</span>
                    </li>
                ))}
            </ul>

            {selected && (
                <div className="mt-3 text-sm md:text-base">
                    {selected === String(answer) ? (
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
