import React from "react"
import dataTrends from "../../static/img/pictures/undraw_data_trends.svg";
import studing from "../../static/img/pictures/undraw_studying.svg";
import appScreen from "../../static/img/pictures/appScreen.png";
import {TextCollapse} from "../../components/TextCollapse";
import { Link } from 'react-router-dom';
import {Blob} from "../../components/Blob";
import {Footer} from "../../Footer";
import L from "../../logic/locatization/LocalizationManager";
import ScrollAnimation from 'react-animate-on-scroll';


export default class SpaceCalcWelcomePage extends React.Component {

    render() {
        return (
            <div className="container-fluid base-row-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-12" style={{marginBottom: "40px"}}>
                            <h2 style={{marginBottom: "30px"}} dangerouslySetInnerHTML={{__html: L.spacecalc.welcome.header1}}/>
                            <p style={{marginBottom: "30px"}}>
                                {L.spacecalc.welcome.text1}
                            </p>
                            <p>
                                <Link to="/register">
                                    <button className="btn btn-orange-primary login-button" style={{width: "300px"}}>{L.spacecalc.welcome.button1}</button>
                                </Link>
                            </p>
                        </div>
                        <div className="col-md-4 col-12" style={{textAlign: "center", marginBottom: "140px"}}>
                            <img style={{width: "100%", maxWidth: "400px"}} src={dataTrends}/>
                        </div>
                        <div className="col-md-8 col-12 mx-auto" style={{marginBottom: "60px", position: "relative"}}>
                            <h3>{L.spacecalc.welcome.header2}</h3>
                            <p className="color-bright-orange">
                                {L.spacecalc.welcome.text2}
                            </p>
                            <Blob className="d-none d-sm-block" name="blob1" top="-35px" left="-100px"/>
                        </div>
                        <div className="col-md-8 col-12 text-right mx-auto" style={{marginBottom: "60px", position: "relative"}}>
                            <h3>{L.spacecalc.welcome.header3}</h3>
                            <p className="color-bright-orange">
                                {L.spacecalc.welcome.text3}
                            </p>
                            <Blob className="d-none d-sm-block" name="blob2" top="-50px" right="100px"/>
                        </div>
                        <div className="col-md-8 col-12 mx-auto" style={{marginBottom: "60px", position: "relative"}}>
                            <h3>{L.spacecalc.welcome.header4}</h3>
                            <p className="color-bright-orange">
                                {L.spacecalc.welcome.text4}
                            </p>
                            <Blob className="d-none d-sm-block" name="blob3" top="-50px" left="-100px"/>
                        </div>
                        <div className="col-12 text-center mx-auto" style={{marginBottom: "60px"}}>
                            <Link to="/register">
                                <button className="btn btn-primary login-button" style={{width: "300px"}}>{L.spacecalc.welcome.button2}</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div style={{backgroundColor: "#e8f4f9"}}>
                    <div className="container">
                        <div className="row" style={{padding: "70px 0", backgroundColor: "#e8f4f9"}}>
                            <div className="col-md-6 col-12">
                                <h3>{L.spacecalc.welcome.header5}</h3>
                                <ul>
                                    <li dangerouslySetInnerHTML={{__html: L.spacecalc.welcome.text5_1}}/>
                                    <li dangerouslySetInnerHTML={{__html: L.spacecalc.welcome.text5_2}}/>
                                    <li dangerouslySetInnerHTML={{__html: L.spacecalc.welcome.text5_3}}/>
                                </ul>
                            </div>
                            <div className="col-md-6 col-12">
                                <h3>{L.spacecalc.welcome.header6}</h3>
                                <p style={{marginBottom: "30px"}}>
                                </p>
                                <div className="text-center shadow-light-2" style={{background: "white", padding: "20px"}}>
                                    <div className="d-inline-block " style={{width: "33.3%", verticalAlign: "top"}}>
                                        <div style={{fontSize: "32px", marginBottom: "-10px"}}><b>{L.spacecalc.welcome.label1_Value}</b></div>
                                        <div className="small">{L.spacecalc.welcome.label1_Text}</div>
                                    </div>
                                    <div className="d-inline-block " style={{width: "33.3%", verticalAlign: "top"}}>
                                        <div style={{fontSize: "32px", marginBottom: "-10px"}}><b>{L.spacecalc.welcome.label2_Value}</b></div>
                                        <div className="small">{L.spacecalc.welcome.label2_Text}</div>
                                    </div>
                                    <div className="d-inline-block " style={{width: "33.3%", verticalAlign: "top"}}>
                                        <div style={{fontSize: "32px", marginBottom: "-10px"}}><b>{L.spacecalc.welcome.label3_Value}</b></div>
                                        <div className="small">{L.spacecalc.welcome.label3_Text}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center" style={{marginTop: "40px", position: "relative", padding: "60px 0"}}>
                        <h2>{L.spacecalc.welcome.header7}</h2>
                        <div className="mx-auto" style={{maxWidth: "800px", width: "90vw", marginTop: "30px"}}>
                            <Blob className="blob-front blob-relative" name="blob4" left="-30px">
                                <span className="color-bright-orange font-weight-bold small"
                                     style={{width: "150px", top: "40px", left: "20px"}}>
                                    {L.spacecalc.welcome.label4}
                                </span>
                            </Blob>
                            <Blob className="blob-front blob-relative" name="blob5"
                                  right="200px" top="100px" align="right">
                                <span className="color-bright-orange font-weight-bold small"
                                      style={{width: "150px", top: "20px", left: "50px"}}>
                                    {L.spacecalc.welcome.label5}
                                </span>
                            </Blob>
                            <Blob className="blob-front blob-relative blob300" top="null" name="blob4" left="-30px">
                                <span className="color-bright-orange font-weight-bold small"
                                      style={{width: "150px", top: "30px", left: "15px"}}>
                                    {L.spacecalc.welcome.label6}
                                </span>S
                            </Blob>
                            <img src={appScreen} style={{width: "100%"}}/>
                        </div>
                    </div>
                </div>
                <div style={{backgroundColor: "#e8f4f9"}}>
                    <div className="container">
                        <div className="row" style={{padding: "60px 0 40px 0"}}>
                            <div className="col-12 text-center">
                                <h3 style={{marginBottom: "20px"}} dangerouslySetInnerHTML={{__html: L.spacecalc.welcome.header8}}/>
                                <Link to="/register">
                                    <button className="btn btn-orange-primary login-button" style={{width: "300px"}}>{L.spacecalc.welcome.button3}</button>
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
                            <h2 style={{marginBottom: "20px"}}>{L.spacecalc.welcome.header9}</h2>
                            <p dangerouslySetInnerHTML={{__html: L.spacecalc.welcome.text9}}/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}
