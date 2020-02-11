import React from "react"
import newIdeas from "../../static/img/pictures/undraw_new_ideas.svg";
import {TextCollapse} from "../../components/TextCollapse";
import { Link } from 'react-router-dom';
import {Footer} from "../../Footer";
import UserManager from "../../logic/UserManager";


export default class SpaceCalcAboutPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
    }

    render() {
        let registerPanel = null;

        if (UserManager.user === null) {
            registerPanel =
            <div className="col-12 text-center" style={{marginTop: "20px", marginBottom: "60px"}}>
                <h2>Chcesz wziąć udział?</h2>
                <Link to="/register">
                    <button className="btn btn-orange-primary login-button" style={{width: "300px"}}>Załóż konto</button>
                </Link>
            </div>;
        }

        return (
            <div className="container-fluid base-row-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-12" style={{marginBottom: "40px"}}>
                            <h2 style={{marginBottom: "20px"}}>O projekcie</h2>
                            <p>Kurs nauki programu Excel został przygotowany w ramach pracy naukowej wykonywanej przez mgr Dagmarę Dziedzic, doktorantkę Wydziału Psychologii i Kognitywistyki (UAM Poznań). Zadania w kursie zostały przygotowane w oparciu o <a href="https://ecdl.pl/wp-content/uploads/2016/01/b41.pdf" target="_blank">sylabus Europejskiego Certyfikatu Umiejętności Komputerowych</a> i były konsultowane ze specjalistami, którzy na co dzień korzystają z programu Excel.   Celem tego kursu jest, po pierwsze - przekazanie wiedzy z trzech działów dotyczących obsługi programu, a po drugie - zebranie informacji dotyczących uczenia się. Bardziej szczegółowe informacje znajdziesz w FAQu poniżej.</p>
                        </div>
                        <div className="col-md-4 col-12" style={{textAlign: "center", marginBottom: "80px"}}>
                            <img style={{width: "100%", maxWidth: "300px"}} src={newIdeas}/>
                        </div>
                        <div className="col-12 text-center" style={{marginBottom: "30px"}}>
                            <h2>Masz pytania? Sprawdź FAQu</h2>
                        </div>
                        <div className="col-md-2"/>
                        <div className="col-md-8" style={{marginBottom: "40px"}}>
                            <TextCollapse headText={'Czy kurs jest darmowy?'}
                                          bodyText={"Tak. Udział w kursie jest darmowy."}
                                          style={{marginBottom: "30px"}}/>

                            <TextCollapse headText={'Czego się nauczę podczas kursu?'}
                                          bodyText={"Zadania dostępne w kursie zostały przygotowane w oparciu o <a href=\"https://ecdl.pl/wp-content/uploads/2016/01/b41.pdf\" target=\"_blank\">sylabus Europejskiego Certyfikatu Umiejętności Komputerowych</a> i dotyczą trzech działów nauki programu Excel: reguł arytmetycznych, funkcji , liczb i dat. Po ukończeniu tego kursu będziesz wiedzieć jak prawidłowo odwoływać się do komórek i stosować operatory arytmetyczne. Nauczysz się korzystania z adresowania bezwzględnego, poznasz działanie wielu funkcji oraz nauczysz się formatowania komórek wyświetlając liczby, daty, procenty i waluty."}
                                          style={{marginBottom: "30px"}}/>

                            <TextCollapse headText={'Dla kogo przeznaczony jest kurs?'}
                                          bodyText={"Kurs jest przeznaczony dla każdego, kto chciałby nauczyć się podstaw programu Excel. Nie jest przeznaczony dla osób, które znają program na poziomie zaawansowanym."}
                                          style={{marginBottom: "30px"}}/>

                            <TextCollapse headText={'Czy kurs nauczy mnie wszystkiego?'}
                                          bodyText={"Nie. Kurs uczy i porządkuje tylko podstawową wiedzę z zakresu obsługi programu. Po ukończeniu powinieneś/powinnaś swobodnie poruszać się po programie, co będzie stanowić dobry punkt wyjścia do dalszej nauki."}
                                          style={{marginBottom: "30px"}}/>

                            <TextCollapse headText={'Na czym będzie polegało badanie?'}
                                          bodyText={"Podczas kursu zostaniesz poproszony/na o wypełnienie kilku ankiet dotyczących Twoich postępów i zaangażowania."}
                                          style={{marginBottom: "30px"}}/>

                            <TextCollapse headText={'Jakie dane na mój temat są zbierane przez serwis?'}
                                          bodyText={"W związku z tym, że kurs jest równocześnie badaniem naukowym, konieczna jest możliwość wyciągnięcia wniosków dotyczących nie osób, ale sposobu uczenia się. Dlatego serwis przechowuje podstawowe dane o użytkownikach, takie jak liczba wykonanych zadań, czy szybkość ich rozwiązywania. Wspomniane dane zostaną zakodowane i będą przetwarzane z poszanowaniem Twojej prywatności i anonimowości. Na potrzeby badania i sprawozdania wyników posłużę się jedynie danymi zagregowanymi."}
                                          style={{marginBottom: "30px"}}/>

                            <TextCollapse headText={'Czy zadania mogę wykonywać w innym programie niż Excel?'}
                                          bodyText={"Kurs został opracowany w oparciu o program Excel. Używane w zadaniach formuły, czy screeny będą dotyczyły tego programu. Możesz spróbować rozwiązywać zadania w innym programie, ale jego opcje mogą znacząco się różnić. Jeśli nie posiadasz programu, zalecam skorzystanie skorzystać z wersji Excel Online, który przez 30 dni jest za darmo."}
                                          style={{marginBottom: "30px"}}/>

                            <TextCollapse headText={'Jakie są wymagania techniczne kursu?'}
                                          bodyText={"Kurs został przygotowany z myślą o korzystaniu z niego na komputerach. Serwis może nieprawidłowo wyświetlać się na urządzeniach mobilnych. Do korzystania z kursu zalecana jest przeglądarka Chrome, Chromium albo Mozilla Firefox.  Na przeglądarce Edge,  Internet Explorer oraz Safari serwis może wyświetlać się nieprawidłowo."}
                                          style={{marginBottom: "30px"}}/>
                        </div>
                        {registerPanel}

                    </div>
                </div>
                <div style={{backgroundColor: "#e8f4f9"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12" style={{paddingTop: "30px", paddingBottom: "80px"}}>
                                <h2>Wykorzystywane zasoby</h2>
                                <p>
                                    Strona korzysta z zasobów udostępnionych na licencji Creative Commons. Poznaj artystów, z których prac korzystamy:
                                </p>
                                <p style={{margin: "0 -20px"}}>
                                    <a style={{padding: "0 20px"}} href="https://pl.freepik.com/freepik">freepik</a>
                                    <a style={{padding: "0 20px"}} href="https://undraw.co/">undraw.co</a>
                                    <a style={{padding: "0 20px"}} href="https://unsplash.com/">unsplash</a>
                                    <a style={{padding: "0 20px"}} href=">https://pl.freepik.com/ijeab">ijeab</a>

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
