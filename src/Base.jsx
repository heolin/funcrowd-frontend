import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch, withRouter } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';
import MissionsMenu from "./modules/missions/MissionsMenu";
import Login from "./modules/login/Login";
import Navbar from "./modules/navbar/Navbar";
import TasksMenu from "./modules/tasks/TasksMenu";
import SessionManager from "./logic/SessionManager";
import ItemPanel from "./modules/items/ItemPanel";
import BountyMenu from "./modules/bounty/BountyMenu";
import queryString from 'query-string';
import UserRepository from "./logic/repositories/UserRepository";
import ConfigManager from "./logic/config/ConfigManager";


const RouteContainer = posed.div({
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
            bounty: null
        };

        this.onLogin = this.onLogin.bind(this);
        this.onLogout = this.onLogout.bind(this);
        this.onMissionSelect = this.onMissionSelect.bind(this);
        this.onTaskSelect = this.onTaskSelect.bind(this);
        this.onBountySelect = this.onBountySelect.bind(this);

        this.navigateToMissions = this.navigateToMissions.bind(this);
        this.navigateToBounties = this.navigateToBounties.bind(this);
    }

    componentDidMount() {
        this.checkSessionUser();
        this.checkUrlParams();
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
            this.props.history.push('/bounties');
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

    //navigation

    navigateToMissions() {
        this.props.history.push('/missions');
    }

    navigateToBounties() {
        this.props.history.push('/bounties');
    }

    //render

    render() {
        return (
            <Route render={({location}) => (
                <div className="container h-100">
                    <Navbar user={this.state.user}
                            onLogout={this.onLogout}
                            onNavigateToMissions={this.navigateToMissions}
                            onNavigateToBounties={this.navigateToBounties}/>

                    {this.state.checkingUser || this.state.checkingParams ?
                        <div>Loading</div>
                        :
                        <PoseGroup preEnterPose="preenter" className="h-100 w-100">
                            <RouteContainer key={location.pathname}>
                                <Switch location={location}>
                                    <Route exact path="/"
                                           render={(props) => <Login onSuccess={this.onLogin} {...props}/>}/>
                                    <Route path="/missions"
                                           render={(props) => <MissionsMenu onMissionSelect={this.onMissionSelect}
                                                                            user={this.state.user} {...props}/>}/>
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
                    }
                </div>
            )}/>
        );

    }
}

export default withRouter(Base);
