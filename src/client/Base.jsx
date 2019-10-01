import React from 'react';
import { Route, Switch, withRouter, Link } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';
import MissionsMenu from "./modules/missions/MissionsMenu";
import LoginPage from "./modules/login/LoginPage";
import Navbar from "./modules/navbar/Navbar";
import TasksMenu from "./modules/tasks/TasksMenu";
import SessionManager from "./logic/SessionManager";
import ItemPanel from "./modules/items/ItemPanel";
import BountyMenu from "./modules/bounty/BountyMenu";
import queryString from 'query-string';
import UserRepository from "./logic/repositories/UserRepository";
import ConfigManager from "./logic/config/ConfigManager";
import LocalizationManager from './logic/locatization/LocalizationManager'
import AboutPage from "./modules/about/AboutPage";
import AchievementsMenu from "./modules/achievements/AchievementsMenu";
import {SideProfilePanel} from "./modules/profile/SideProfilePanel";
import RegisterPage from "./modules/login/RegisterPage";
import Loading from "./components/Loading";


const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: true },
  exit: { opacity: 0 }
});


class Base extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checkingUser: true,
            checkingParams: true,
            user: null,
            mission: null,
            task: null,
            bounty: null,
            sideProfileShown: false
        };

        this.onLogin = this.onLogin.bind(this);
        this.onLogout = this.onLogout.bind(this);
        this.onMissionSelect = this.onMissionSelect.bind(this);
        this.onTaskSelect = this.onTaskSelect.bind(this);
        this.onBountySelect = this.onBountySelect.bind(this);
        this.showSideProfile = this.showSideProfile.bind(this);
        this.hideSideProfile = this.hideSideProfile.bind(this);
    }

    componentDidMount() {
        this.checkSessionUser();
        this.checkUrlParams();

        LocalizationManager.setup('pl');
    }

    checkSessionUser() {
        let user = SessionManager.getUser();
        if (user) {
            this.onLogin(user);
        } else {
            this.setState({checkingUser: false});
        }
    }

    checkUrlParams() {
        if (this.props.location.search) {
            let params = queryString.parse(this.props.location.search);
            if ("workerId" in params) {
                UserRepository.mturk(params['workerId']).then((user) => {
                    this.onLogin(user, true);
                    this.setState({checkingParams: false});
                });
            }
        } else {
            this.setState({checkingParams: false});
        }
    }

    //handlers

    onLogin(user, saveUser) {
        SessionManager.login(user, saveUser);
        ConfigManager.setup(user);
        this.setState({user: user, checkingUser: false});

        if (this.props.location.pathname === "/")
            this.props.history.push('/missions');
    }

    onLogout() {
        this.setState({user: null});
        SessionManager.logout();
        this.props.history.push('/');
    }

    onMissionSelect(mission) {
        this.setState({mission: mission});
        this.props.history.push('/mission/'+mission.id+'/tasks');
    }

    onTaskSelect(task) {
        this.setState({task: task});
        this.props.history.push('/task/'+task.id);
    }

    onBountySelect(bounty) {
        this.setState({
            bounty: bounty,
            task: bounty.task
        });
        this.props.history.push('/bounty/'+bounty.id);
    }

    showSideProfile() {
        this.setState({
            sideProfileShown: true
        });
    }

    hideSideProfile() {
        this.setState({
            sideProfileShown: false
        });
    }


    //render

    render() {
        if (this.state.checkingParams || this.state.checkingUser)
            return <Loading/>;


        let margin = 0;
        if (document.body.scrollHeight <= window.innerHeight) {
            margin = "300px";
        }
        return (
            <Route
            render={({ location }) => (
                <div>
                    <Navbar user={this.state.user}
                            location={this.props.location}
                            onLogout={this.onLogout}
                            onNavigateToMissions={this.navigateToMissions}
                            onNavigateToBounties={this.navigateToBounties}
                            onNavigateToAbout={this.navigateToAbout}
                            showSideProfile={this.showSideProfile}/>
                    <SideProfilePanel isOpen={this.state.sideProfileShown}
                                      hideSideProfile={this.hideSideProfile}/>
                    <div className="h-100">
                        <PoseGroup>
                            <RouteContainer key={location.pathname}>
                                <Switch location={location}>
                                    <Route exact path="/"
                                           render={(props) => <LoginPage onSuccess={this.onLogin} {...props}/>}/>
                                    <Route exact path="/register"
                                           render={(props) => <RegisterPage onSuccess={this.onLogin} {...props}/>}/>
                                    <Route path="/missions"
                                           render={(props) => <MissionsMenu onMissionSelect={this.onMissionSelect}
                                                                            user={this.state.user} {...props}/>}/>
                                    <Route path="/about"
                                           render={(props) => <AboutPage user={this.state.user} {...props}/>}/>
                                    <Route path="/achievements"
                                           render={(props) => <AchievementsMenu user={this.state.user} {...props}/>}/>
                                    <Route path="/bounty/:id"
                                           render={(props) => <ItemPanel task={this.state.task}
                                                                         user={this.state.user}
                                                                         bounty={this.state.bounty}
                                                                         onBountySelect={this.onBountySelect}
                                                                         {...props}/>}/>
                                    <Route path="/bounties"
                                           render={(props) => <BountyMenu onBountySelect={this.onBountySelect}
                                                                          user={this.state.user} {...props}/>}/>
                                    <Route path="/task/:id"
                                           render={(props) => <ItemPanel task={this.state.task}
                                                                         user={this.state.user}
                                                                         onTaskSelect={this.onTaskSelect}
                                                                         {...props}/>}/>
                                    <Route path="/mission/:id/tasks"
                                           render={(props) => <TasksMenu onTaskSelect={this.onTaskSelect}
                                                                         onMissionSelect={this.onMissionSelect}
                                                                         mission={this.state.mission}
                                                                         user={this.state.user} {...props}/>}/>
                                </Switch>
                            </RouteContainer>
                        </PoseGroup>
                    </div>
                </div>
                )}
            />
        );
    }
}

export default withRouter(Base);