import { useState, useEffect } from "react";
import InputElement from "../components/InputElement";

const Hausrat = () => {
    const [vw, setVW] = useState(0);
    const [vs, setVS] = useState(0);
    const [dmg, setDmg] = useState(0);
    const [payment, setPayment] = useState(0);
    const vstypes = [
        [
            "Optimal",
            "Ihr Hausratswert entspricht der Versicherungssumme. Sie Zahlen nicht zu viel und werden immer eine vollständige Schadensauszahlung erhalten."
        ],
        [
            "Überversichert",
            "Ihre Versicherungssumme ist höher als der Hausratswert. Sie werden immer eine vollständige Schadensauszahlung erhalten, jedoch zahlen Sie zu viel für Ihre Versicherung."
        ],
        [
            "Unterversichert",
            "Ihre Versicherungssumme ist tiefer als der Hausratswert. Sie zahlen eine kleinere Prämie, aber werden immer Schadensauszahlung kleiner als der Schaden erhalten."
        ],
        [
            "Unbekannt",
            "Bitte geben Sie Informationen zu Ihrer Situation an."
        ]
    ]
    const [vsN, setVsN] = useState(0);
    const [vwInvalid, setVwInvalid] = useState("")
    const [vsInvalid, setVsInvalid] = useState("")
    const [dmgInvalid, setDmgInvalid] = useState("");

    const checkPayment = () => {
        if ((dmg <= vw) && !(vs * vw * dmg === 0)) {
            if (vs <= vw) {
                setPayment((vs / vw) * dmg);
            } else if ((vs > vw) && dmg) {
                setPayment(dmg);
            }
        } else {
            setPayment(0);
        }
    }

    const checkVsStatus = () => {
        setVsN((vs * vw * dmg === 0) ? 3 : (vs === vw ? 0 : (vs > vw ? 1 : 2)));
    }

    const checkInputValidity = () => {
        if (vw === 0 || vs === 0 || dmg === 0) { setDmgInvalid("") }
        else { setDmgInvalid(dmg > vw) }

        setVwInvalid(vw === 0 ? "" : (vw < 1));
        setVsInvalid(vs === 0 ? "" : (vs < 1));
    }

    useEffect(() => {
        checkPayment();
        checkInputValidity();
        checkVsStatus();
    }, [vw, vs, dmg])

    return (
        <div className="Hausrat">
            <main className="container">
                <h1>Hausrat</h1>

                <article>
                    <header><strong>Schadensrechner für Hausratsversicherung</strong></header>

                    <InputElement isInvalid={vwInvalid} setVal={setVW} onlyNumbers={true} placeholder={"Hausratswert"} />
                    <InputElement isInvalid={vsInvalid} setVal={setVS} onlyNumbers={true} placeholder={"Versicherungssumme"} />
                    <InputElement isInvalid={dmgInvalid} setVal={setDmg} onlyNumbers={true} placeholder={"Schaden"} />

                    <footer>
                        <div hidden={dmgInvalid}>
                            <strong>Schadenauszahlung: {payment}</strong><br />
                            <strong>Versicherungsstatus: {vstypes[vsN][0]}</strong><br />
                            <p>{vstypes[vsN][1]}</p>
                        </div>
                        <div hidden={!dmgInvalid}>
                            <strong>
                                Ihr Schaden kann nicht höher als ihr Hausratswert sein.
                            </strong>
                        </div>
                    </footer>

                </article>
            </main>
        </div>
    );
}

export default Hausrat;