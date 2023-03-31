import { useState, useEffect } from "react";
import InputElement from "../components/InputElement";

const Hausrat = () => {
    const [vw, setVW] = useState(0);
    const [vs, setVS] = useState(0);
    const [dmg, setDmg] = useState(0);
    const [payment, setPayment] = useState(0);
    const [VsStatus, setVsStatus] = useState(1);
    const vstypes = ["Überversichert", "Optimal", "Unterversichert"];
    const [vstype, setVstype] = useState(vstypes[1]);

    const checkVsStatus = () => {
        const tmp = vs / vw;

        switch (tmp) {
            default:
            case tmp > 1: {
                setVsStatus(0);
                break;
            }
            case tmp === 1: {
                setVsStatus(1);
                break;
            }
            case tmp < 1: {
                setVsStatus(2);
                break;
            }
        }
    }

    useEffect(() => {
        checkVsStatus();
    }, [vw, vs, dmg]);

    return (
        <div className="Hausrat">
            <main className="container">
                <h1>Hausrat</h1>

                <article>
                    <header><strong>Schadensrechner für Hausratsversicherung</strong></header>

                    <InputElement setVal={setVW} onlyNumbers={true} placeholder={"Versicherungswert"} />
                    <InputElement setVal={setVS} onlyNumbers={true} placeholder={"Versicherungssumme"} />
                    <InputElement setVal={setDmg} onlyNumbers={true} placeholder={"Schaden"} />

                    <footer>
                        <strong>
                            {/* Schadenauszahlung: {payment === Infinity ? 0 : (payment ? payment : 0)} */}
                            Schadenauszahlung: {payment} <br />
                            Versicherungsstatus: {vstype}
                        </strong>
                    </footer>
                </article>
            </main>
        </div>
    );
}

export default Hausrat;