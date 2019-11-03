import React from "react"
import dataTrends from "../../static/img/pictures/undraw_data_trends.svg";
import studing from "../../static/img/pictures/undraw_studying.svg";
import appScreen from "../../static/img/pictures/appScreen.png";
import {TextCollapse} from "../../components/TextCollapse";
import { Link } from 'react-router-dom';
import {Blob} from "../../components/Blob";
import {Footer} from "../../Footer";


export default class SpaceCalcWelcomePage extends React.Component {

    render() {

        return (
            <div className="container-fluid base-row-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-12" style={{marginBottom: "40px"}}>
                            <h2 style={{marginBottom: "30px"}}>Naucz się podstaw programu Excel<br/>i pomóż w badaniu naukowym!</h2>
                            <p style={{marginBottom: "30px"}}>
                                Cześć! Mam na imię Dagmara i jestem doktorantką Uniwersytetu im. Adama Mickiewicza w Poznaniu.  W ramach swojej pracy naukowej, wraz ze specjalistami przygotowałam kurs nauki programu Excel.

                            </p>
                            <p>
                                <Link to="/register">
                                    <button className="btn btn-orange-primary login-button" style={{width: "300px"}}>Chcę wziąć udział w kursie!</button>
                                </Link>
                            </p>
                        </div>
                        <div className="col-md-4 col-12" style={{textAlign: "center", marginBottom: "140px"}}>
                            <img style={{width: "100%", maxWidth: "400px"}} src={dataTrends}/>
                        </div>
                        <div className="col-md-8 col-12 mx-auto" style={{marginBottom: "60px", position: "relative"}}>
                            <h3>Czego się  nauczysz?</h3>
                            <p className="color-bright-orange">
                                W trakcie kursu opanujesz praktyczną wiedzę dotyczącą stosowania reguł arytmetycznych, funkcji, wprowadzania liczb i dat w programie Excel.
                            </p>
                            <Blob name="blob1" top="-35px" left="-100px"/>
                        </div>
                        <div className="col-md-8 col-12 text-right mx-auto" style={{marginBottom: "60px", position: "relative"}}>
                            <h3>Dlaczego kurs jest badaniem naukowym?</h3>
                            <p className="color-bright-orange">
                                Kurs pozwoli sprawdzić efektywność zastosowanego w nim sposobu uczenia.<br/>
                                Niestety nie mogę zdradzić szczegółów badania, bo to mogłoby wpłynąć na jego wyniki.
                            </p>
                            <Blob name="blob2" top="-50px" right="100px"/>
                        </div>
                        <div className="col-md-8 col-12 mx-auto" style={{marginBottom: "60px", position: "relative"}}>
                            <h3>Jak dołączyć?</h3>
                            <p className="color-bright-orange">
                                Załóż konto i ucz się tak, jakbyś uczył/a się w każdym innym kursie online :)
                            </p>
                            <Blob name="blob3" top="-50px" left="-100px"/>
                        </div>
                        <div className="col-12 text-center mx-auto" style={{marginBottom: "60px"}}>
                            <Link to="/register">
                                <button className="btn btn-primary login-button" style={{width: "300px"}}>Załóż konto</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div style={{backgroundColor: "#e8f4f9"}}>
                    <div className="container">
                        <div className="row" style={{padding: "70px 0", backgroundColor: "#e8f4f9"}}>
                            <div className="col-md-6 col-12">
                                <h3>Wymagania techniczne</h3>
                                <ul>
                                    <li>program Excel (jeśli nie posiadasz programu, możesz skorzystać z wersji Excel Online, który przez 30 dni jest za darmo)</li>
                                    <li>komputer lub laptop (kurs nie jest przeznaczony na urządzenia mobilne)</li>
                                    <li>przeglądarka Chrome lub Firefox (to na nich kurs będzie działał najlepiej)</li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-12">
                                <h3>Zadania w kursie</h3>
                                <p style={{marginBottom: "30px"}}>
                                    Zadania, które znajdziesz w kursie zostały przygotowane w oparciu o sylabus Europejskiego Certyfikatu Umiejętności Komputerowych i były konsultowane ze specjalistami, którzy na co dzień posługują się programem Excel. Na kurs składają się:
                                </p>
                                <div className="text-center shadow-light-2" style={{background: "white", padding: "20px"}}>
                                    <div className="d-inline-block " style={{width: "33.3%", verticalAlign: "top"}}>
                                        <div style={{fontSize: "32px", marginBottom: "-10px"}}><b>3</b></div>
                                        <div className="small">działy tematyczne</div>
                                    </div>
                                    <div className="d-inline-block " style={{width: "33.3%", verticalAlign: "top"}}>
                                        <div style={{fontSize: "32px", marginBottom: "-10px"}}><b>30</b></div>
                                        <div className="small">praktycznych zadań</div>
                                    </div>
                                    <div className="d-inline-block " style={{width: "33.3%", verticalAlign: "top"}}>
                                        <div style={{fontSize: "32px", marginBottom: "-10px"}}><b>2</b></div>
                                        <div className="small">2 testy sprawdzające Twoją wiedzę</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center" style={{marginTop: "40px", position: "relative", padding: "60px 0"}}>
                        <h2>W tym kursie nauki programu Excel znajdziesz</h2>
                        <div className="mx-auto" style={{maxWidth: "800px", width: "90vw", marginTop: "30px"}}>
                            <Blob className="blob-front blob-relative" name="blob4" left="-30px">
                                <span className="color-bright-orange font-weight-bold small"
                                     style={{width: "150px", top: "40px", left: "20px"}}>
                                    Ciekawe zadania fabularne
                                </span>
                            </Blob>
                            <Blob className="blob-front blob-relative" name="blob5"
                                  right="170px" top="100px" align="right">
                                <span className="color-bright-orange font-weight-bold small"
                                      style={{width: "150px", top: "20px", left: "50px"}}>
                                    Pliki .xlsx do pobrania, w których można rozwiązywać zadania
                                </span>
                            </Blob>
                            <Blob className="blob-front blob-relative" name="blob4" top="300px" left="-30px">
                                <span className="color-bright-orange font-weight-bold small"
                                      style={{width: "150px", top: "30px", left: "15px"}}>
                                    Screeny pokazujące krok po kroku jak wykonać zadanie
                                </span>
                            </Blob>
                            <img src={appScreen} style={{width: "100%"}}/>
                        </div>
                    </div>
                </div>
                <div style={{backgroundColor: "#e8f4f9"}}>
                    <div className="container">
                        <div className="row" style={{padding: "60px 0 40px 0"}}>
                            <div className="col-12 text-center">
                                <h3 style={{marginBottom: "20px"}}>Ucząc się programu Excel,<br/>pomagasz w badaniu naukowym!</h3>
                                <Link to="/register">
                                    <button className="btn btn-orange-primary login-button" style={{width: "300px"}}>Chcę wziąć udział w kursie!</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row" style={{padding: "60px 0"}}>
                        <div className="col-md-6 col-12" style={{textAlign: "center", marginBottom: "10px"}}>
                            <img style={{width: "100%", maxWidth: "400px"}} src={studing}/>
                        </div>
                        <div className="col-md-6 col-12" style={{marginBottom: "40px", marginTop: "30px"}}>
                            <h2 style={{marginBottom: "20px"}}>Dowiedz się więcej</h2>
                            <p>
                                Chcesz dowiedzieć się więcej o przygotowanych zadaniach, ciekawi cię co będziesz musiał/a zrobić w ramach badania naukowego. A może masz inne pytania? Zajrzyj na podstronę O projekcie.
                            </p>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}
