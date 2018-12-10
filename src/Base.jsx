import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch, withRouter } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';
import MissionsMenu from "./modules/MissionsMenu";
import Login from "./modules/login/Login";
import Navbar from "./modules/navbar/Navbar";
import TasksMenu from "./modules/TasksMenu";
import SessionManager from "./logic/user/SessionManager";
import ItemPanel from "./modules/ItemPanel";


const RouteContainer = posed.div({
});


class Base extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null,
            mission: null,
            task: null
        };

        this.onLogin = this.onLogin.bind(this);
        this.onLogout = this.onLogout.bind(this);
        this.onMissionSelect = this.onMissionSelect.bind(this);
        this.onTaskSelect = this.onTaskSelect.bind(this);
        this.navigateToMissions = this.navigateToMissions.bind(this);
    }

    componentDidMount() {
        this.checkSessionUser();
    }

    checkSessionUser() {
        let user = SessionManager.getUser();
        if (user) {
            this.onLogin(user);
        }
    }

    onLogin(user, saveUser) {
        SessionManager.login(user, saveUser);
        this.setState({user: user});
        this.props.history.push('/missions');
    }

    onLogout() {
        this.setState({user: null});
        SessionManager.logout();
        this.props.history.push('/');
    }

    onMissionSelect(mission) {
        this.setState({mission: mission});
        this.props.history.push('/tasks');
    }

    onTaskSelect(task) {
        this.setState({task: task});
        this.props.history.push('/item');
    }

    navigateToMissions() {
        this.props.history.push('/missions');
    }

    render() {
        return (
            <Route render={({location}) => (
                <div className="container h-100">
                    <Navbar user={this.state.user}
                            onLogout={this.onLogout}
                            onNavigateToMissions={this.navigateToMissions}/>

                    <PoseGroup preEnterPose="preenter" className="h-100 w-100">
                        <RouteContainer key={location.pathname}>
                            <Switch location={location}>
                                <Route exact path="/"
                                       render={(props) => <Login onSuccess={this.onLogin} {...props}/>}/>
                                <Route path="/missions"
                                       render={(props) => <MissionsMenu onMissionSelect={this.onMissionSelect}
                                                                        user={this.state.user} {...props}/>}/>
                                <Route path="/tasks"
                                       render={(props) => <TasksMenu onTaskSelect={this.onTaskSelect}
                                                                     mission={this.state.mission}
                                                                     user={this.state.user} {...props}/>}/>
                                <Route path="/item"
                                       render={(props) => <ItemPanel task={this.state.task}
                                                                     user={this.state.user} {...props}/>}/>
                            </Switch>
                        </RouteContainer>
                    </PoseGroup>
                </div>
            )}/>
        );

    }
}

export default withRouter(Base);
