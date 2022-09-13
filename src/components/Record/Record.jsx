import React from 'react';
import './Record.css'

function Record() {
    return (
        <div className={"record"}>
            <div className={"xp card"}>
                <span className={"xp-years"}>07+</span><span>Years as a web Developer</span>
            </div>
            <div className={"programming card"}>

                <h2>Programming languages</h2>
                <ul>
                    <li>PHP</li>
                    <li>Symfony</li>
                    <li>React</li>
                </ul>
            </div>

            <div className={"devops card"}>

                <h2>Devops skills</h2>
                <ul>
                    <li>Docker</li>
                    <li>AWS</li>
                </ul>
            </div>
        </div>
    );
}

export default Record;