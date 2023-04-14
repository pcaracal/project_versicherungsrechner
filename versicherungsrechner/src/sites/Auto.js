import { useState, useEffect } from "react";
import { Chart } from "react-google-charts"
import InputElement from "../components/InputElement";

const Auto = () => {
    const bms_data = [
        ["Stufe", "% der Grundprämie"],
        [1, 30],
        [2, 34],
        [3, 38],
        [4, 42],
        [5, 46],
        [6, 50],
        [7, 55],
        [8, 60],
        [9, 65],
        [10, 70],
        [11, 80],
        [12, 90],
        [13, 100],
        [14, 120],
        [15, 140],
        [16, 160],
        [17, 200],
        [18, 240]
    ]


    return (
        <div className="Auto">
            <main className="container">
                <h1>Auto</h1>

                <div className="grid">
                    <aside>
                        <article>
                            <header>
                                <strong>Bonus-Malus-System Rechner</strong>
                            </header>
                            <body>
                                Bonus Malus Rechner
                            </body>
                        </article>
                    </aside>

                    <aside>
                        <article>
                            <header>
                                <strong>Bonus-Malus Tabelle</strong>
                            </header>
                            <body>
                                <table>
                                    <thead>
                                        <tr>
                                            {bms_data[0].map((v, k) => {
                                                return (
                                                    <th>{v}</th>
                                                );
                                            })}
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {bms_data.map((v, k) => {
                                            if (k != 0) return (
                                                <tr key={k}>
                                                    {v.map((vi, ki) => {
                                                        return (
                                                            <td key={ki}>{vi}</td>
                                                        );
                                                    })}
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </body>
                        </article>
                    </aside>
                </div>
            </main>
        </div>
    );
}

export default Auto;