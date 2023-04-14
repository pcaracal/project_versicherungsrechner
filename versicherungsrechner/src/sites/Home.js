import { Link, NavLink, useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="Home">
            <main className="container">
                <header><h1>Home</h1></header>

                <div className='grid'>

                    <aside onClick={() => navigate("auto")}>
                        <article className="pointer">
                            <header>
                                <strong>
                                    Auto
                                </strong>
                            </header>
                            Ein Bonus-Malus-Rechner für ihre Auto Haftpflichtversicherung
                        </article>
                    </aside>

                    <aside onClick={() => navigate("hausrat")}>
                        <article className="pointer">
                            <header>
                                <strong>
                                    Hausrat
                                </strong>
                            </header>
                            Ein Schadensrechner für Hausratsversicherungen
                        </article>
                    </aside>
                </div>
            </main>
        </div>
    );
}
export default Home;
