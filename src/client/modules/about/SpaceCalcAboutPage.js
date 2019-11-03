import React from "react"
import newIdeas from "../../static/img/pictures/undraw_new_ideas.svg";
import {TextCollapse} from "../../components/TextCollapse";
import { Link } from 'react-router-dom';
import {Footer} from "../../Footer";


export default class SpaceCalcAboutPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
    }

    render() {

        return (
            <div className="container-fluid base-row-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-12" style={{marginBottom: "40px"}}>
                            <h2 style={{marginBottom: "20px"}}>O projekcie</h2>
                            <p>Kurs nauki programu Excel został przygotowany w ramach pracy naukowej. Jego celem jest, po pierwsze - przekazanie wiedzy z trzech działów dotyczących osbługi programu, a po drugie - zebranie danych o osobach uczących się.</p>
                        </div>
                        <div className="col-md-4 col-12" style={{textAlign: "center", marginBottom: "80px"}}>
                            <img style={{width: "100%", maxWidth: "300px"}} src={newIdeas}/>
                        </div>
                        <div className="col-12 text-center" style={{marginBottom: "30px"}}>
                            <h2>Masz pytania? Sprawdź FAQu</h2>
                        </div>
                        <div className="col-md-2"/>
                        <div className="col-md-8 ">
                            <TextCollapse headText={'Czy kurs jest darmowy?'}
                                          bodyText={"hehe"}
                                          style={{marginBottom: "30px"}}/>

                            <TextCollapse headText={'Czego się nauczę podczas kursu?'}
                                          bodyText={"hehe"}
                                          style={{marginBottom: "30px"}}/>

                            <TextCollapse headText={'Dla kogo przeznaczony jest kurs?'}
                                          bodyText={"Kurs jest przeznaczony dla każdego, kto chciałby nauczyć się podstaw programu Excel. Nie jest przeznaczony dla osób, które znają program na poziomie zaawansowanym."}
                                          style={{marginBottom: "30px"}}/>

                            <TextCollapse headText={'Czy kurs nauczy mnie wszystkiego?'}
                                          bodyText={"hehe"}
                                          style={{marginBottom: "30px"}}/>

                            <TextCollapse headText={'Na czym będzie polegało badanie?'}
                                          bodyText={"hehe"}
                                          style={{marginBottom: "30px"}}/>

                            <TextCollapse headText={'Jakie moje dane są zbierane przez serwis?'}
                                          bodyText={"hehe"}
                                          style={{marginBottom: "30px"}}/>

                            <TextCollapse headText={'Czy zadania mogę wykonywać w innym programie niż Excel?'}
                                          bodyText={"hehe"}
                                          style={{marginBottom: "30px"}}/>

                            <TextCollapse headText={'Jakie są wymagania techniczne kursu?'}
                                          bodyText={"hehe"}
                                          style={{marginBottom: "30px"}}/>
                        </div>
                        <div className="col-12 text-center" style={{marginTop: "60px"}}>
                            <h2>Chcesz wziąć udział?</h2>
                        </div>
                        <div className="col-12 text-center" style={{marginBottom: "60px"}}>
                            <Link to="/register">
                                <button className="btn btn-orange-primary login-button" style={{width: "300px"}}>Załóż konto</button>
                            </Link>
                        </div>

                    </div>
                </div>
                <div style={{backgroundColor: "#e8f4f9"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12" style={{paddingTop: "30px"}}>
                                <h2>Wykorzystywane zasoby</h2>
                                <p>
                                    Strona korzysta z zasobów udostępnionych na licencji Creative Commons. Poznaj artystów, z których prac korzystamy:
                                </p>
                                <p>
                                    <a href="href">undraw.co</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}
