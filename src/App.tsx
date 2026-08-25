import { useState } from "react";

const App = () => {
    const [array, setArray] = useState<number[]>([]);

    const generateRandomArray = () => {
        const newArray: number[] = [];

        for (let i = 0; i < 15; i++) {
            const randomValue = Math.floor(Math.random() * 91) + 10;
            newArray.push(randomValue);
        }

        setArray(newArray);
    };

    return (
        <div className="min-h-screen bg-slate-900 text-white p-8">
            <h1 className="text-3xl font-bold text-sky-400 mb-6">AlgoriFlow</h1>

            <button
                onClick={generateRandomArray}
                className="bg-sky-500 hover:bg-sky-600 px-4 py-2 rounded-md mb-4 text-sm font-bold cursor-pointer"
            >
                새 배열 생성
            </button>
            <p>현재 숫자들: {array.join(", ")}</p>
        </div>
    );
};

export default App;
