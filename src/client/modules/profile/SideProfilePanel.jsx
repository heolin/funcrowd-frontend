import React from "react"
import posed from 'react-pose';
import {CircleImage} from "../../components/Image";
import {BigIcon, Icon, SmallIcon} from "../../components/Icons";
import ProgressBar from "../../components/ProgressBar";
import BlackBackground from "../../components/BlackBackground";
import {HorizontalLine} from "../../components/HorizontalLine";


const Sidebar = posed.nav({
    open: { x: '0%', staggerChildren: 100 },
    closed: { x: '150%' }
});

const NavItem = posed.li({
    open: { opacity: 0.6 },
    closed: { opacity: 0 }
});


export class SideProfilePanel extends React.Component {

    render() {
        let profileImage = require("../../static/img/common/avatar.jpg");

        return (
            <div>
                <BlackBackground className="black-background"
                                 style={{pointerEvents: this.props.isOpen ? "auto" : "none"}}
                                 pose={this.props.isOpen ? 'open' : 'closed'}
                                 onClick={this.props.hideSideProfile}/>
                <Sidebar className="little side-profile weight-bold"
                         pose={this.props.isOpen ? 'open' : 'closed'}>
                    <div className='row'>
                        <div className="col-12">
                            <div onClick={this.props.hideSideProfile}>
                                <Icon className="side-profile-close"
                                      name="go-sign"
                                      color="dark"/>
                            </div>
                            <CircleImage className="side-profile-image" image={profileImage}/>
                            <div className="side-profile-settings">
                                <SmallIcon name="settings"/>
                                <span className="little">settings</span>
                            </div>
                        </div>
                        <div className="col-12 text-center"
                             style={{marginTop: "15px"}}>
                            <h4>dzezi</h4>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-6">
                            <div className="side-profile-block card-1-static little text-center">
                                <BigIcon className="side-profile-block-icon" name="ranking"/>
                                <div>7 miejsce w ranking</div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="side-profile-block card-1-static little text-center">
                                <BigIcon className="side-profile-block-icon" name="missions"/>
                                <div>14 rozwiązanych zadań</div>
                            </div>
                        </div>
                    </div>
                    <div className='row' style={{marginTop: "30px", marginBottom: "30px"}}>
                        <div className="col-6 text-left">
                            <div>POZIOM</div>
                        </div>
                        <div className="col-6 text-right">
                            <div>234<SmallIcon name="experience"/></div>
                        </div>
                        <div className="col-12">
                            <ProgressBar className="side-profile-progress"
                                         bg="light-blue" fg="blue" progress={0.32}/>
                            <HorizontalLine style={{marginTop: "20px"}} color="orange"/>
                        </div>
                    </div>
                    <div className='row' style={{marginBottom: "30px"}}>
                        <div className="col-6 text-left">
                            <div>OSIĄGNIĘCIA</div>
                        </div>
                        <div className="col-6 text-right">
                            <div>234<SmallIcon name="achievements"/></div>
                        </div>
                        <div className="col-12">
                            <ProgressBar className="side-profile-progress"
                                         bg="light-blue" fg="blue" progress={0.32}/>
                            <HorizontalLine style={{marginTop: "20px"}} color="orange"/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-12">
                            <div style={{marginBottom: "10px"}}>NAJNOWSZE</div>
                        </div>
                        <div className="col-4 text-center">
                            <Icon className="achievement-image" name="unknown"/>
                            <div className="small weight-normal line-height-1" style={{paddingTop: "10px"}}>
                                PIERWSZE KROKI
                            </div>
                        </div>
                        <div className="col-4 text-center">
                            <Icon className="achievement-image" name="unknown"/>
                            <div className="small weight-normal line-height-1" style={{paddingTop: "10px"}}>
                                PIERWSZE KROKI
                            </div>
                        </div>
                        <div className="col-4 text-center">
                            <Icon className="achievement-image" name="unknown"/>
                            <div className="small weight-normal line-height-1" style={{paddingTop: "10px"}}>
                                PIERWSZE KROKI
                            </div>
                        </div>
                    </div>
                </Sidebar>
            </div>
        );
    }
}
