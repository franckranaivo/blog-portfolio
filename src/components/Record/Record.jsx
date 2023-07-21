import React, { useEffect, useState } from 'react';
import './Record.css'

function Record() {
    const [yearCount, setYearCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if(yearCount < 8) {
                setYearCount(yearCount + 1)
            }
        },150);

        return () => {
            clearInterval(interval);
        }
    },[yearCount])

    return (
        <div className={"flex flex-row mt-5 justify-center"}>
            <div className={"max-w-sm border-2 rounded-md overflow-hidden shadow-lg mr-5"}>
                <div className={"py-6 px-4"}>
                    <span className={"text-5xl font-bold"}>0{yearCount}+</span><span>Years as a web Developer</span>
                </div>
            </div>

            <div className={"max-w-sm border-2 bg-rose-100 rounded-md overflow-hidden shadow-lg mr-5"}>
                <div className={"py-6 px-4 "}>
                    <h2 className={"text-xl bg-transparent"}>Programming languages</h2>
                    <ul className={"px-4 bg-transparent"}>
                        <li>PHP</li>
                        <li>Symfony</li>
                        <li>React</li>
                    </ul>
                </div>
            </div>

            <div className={"max-w-sm border-2 bg-rose-200 rounded-md overflow-hidden shadow-lg mr-5"}>
                <div className={"py-6 px-4"}>
                    <h2 className={"text-xl bg-transparent"}>Devops skills</h2>
                    <ul className={"px-4 bg-transparent"}>
                        <li>Docker</li>
                        <li>AWS</li>
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default Record;