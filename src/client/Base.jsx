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
import AboutPage from "./modules/about/AboutPage";
import AchievementsMenu from "./modules/achievements/AchievementsMenu";
import {SideProfilePanel} from "./modules/profile/SideProfilePanel";
import RegisterPage from "./modules/login/RegisterPage";
import Loading from "./components/Loading";
import ResetPasswordPage from "./modules/login/ResetPasswordPage";
import ProfileTypes from "./logic/config/ProfileTypes";
import UserManager from "./logic/UserManager";
import ProfilePage from "./modules/profile/ProfilePage";
import RankingPage from "./modules/ranking/RankingPage";
import BountyItemPanel from "./modules/bounty/BountyItemPanel";
import SpaceCalcAboutPage from "./modules/about/SpaceCalcAboutPage";
import SpaceCalcWelcomePage from "./modules/about/SpaceCalcWelcomePage";
import Footer from "./Footer";
import SettingsPage from "./modules/profile/SettingsPage";
import ResetPasswordTokenPage from "./modules/login/ResetPasswordTokenPage";
import ActivationPage from "./modules/login/ActivationPage";
import urls from "./Urls"
import ToastsPanel from "./modules/toasts/ToastsPanel";
import 'bootstrap/dist/js/bootstrap';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './static/scss/navbar.scss'
import './static/scss/style.scss'
import './static/scss/missions.scss'
import LocalizationManager from './logic/locatization/LocalizationManager'
import SurveyPanel from "./modules/survey/SurveyPanel";

let baseLangCode = process.env.LANG_CODE || "en";
LocalizationManager.setup(baseLangCode);


export const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: true },
  exit: { opacity: 0 }
});


export class AppBase extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checkingUser: true,
            checkingParams: true,
            user: null,
            profile: null,
            mission: null,
            task: null,
            userBounty: null,
            sideProfileShown: false,
            locationSearch: this.props.location.search
        };

        this.onLogin = this.onLogin.bind(this);
        this.onLogout = this.onLogout.bind(this);
        this.onMissionSelect = this.onMissionSelect.bind(this);
        this.onTaskSelect = this.onTaskSelect.bind(this);
        this.onBountySelect = this.onBountySelect.bind(this);
        this.showSideProfile = this.showSideProfile.bind(this);
        this.hideSideProfile = this.hideSideProfile.bind(this);
        this.redirectToHome = this.redirectToHome.bind(this);
        this.onProfileChanged = this.onProfileChanged.bind(this);
        this.onLocationChanged = this.onLocationChanged.bind(this);
    }

    componentDidMount() {
        this.checkSessionUser();
        this.checkUrlParams();
        this.checkUserLoading();

        UserManager.addProfileChangeHandler(this.onProfileChanged);
        this.onLocationChangedUnlisten = this.props.history.listen(this.onLocationChanged);
    }

    componentWillUnmount() {
        UserManager.removeProfileChangeHandler(this.onProfileChanged);
        this.onLocationChangedUnlisten();
    }

    componentDidCatch() {}

    onLocationChanged(location, action) {
        if (action === "POP" &&
            location.search !== "" &&
            window.location.pathname === "/" &&
            UserManager.user === null) {

            let newUrl = location.pathname;
            this.setState({
                checkingParams: true,
                locationSearch: location.search
            }, () => {
                this.checkUrlParams();
                this.props.history.push(newUrl);
            });
        }
    }

    checkUserLoading() {
        if (UserManager.loadingProfile)
            this.setState({checkingUser: true});
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
        if (this.state.checkingParams && this.state.locationSearch) {
            let params = queryString.parse(this.state.locationSearch);
            if ("workerId" in params) {
                UserRepository.mturk(params['workerId']).then((user) => {
                    this.onLogin(user, true);
                    this.setState({checkingParams: false});
                });
            } else {
                this.setState({checkingParams: false});
            }
        } else {
            this.setState({checkingParams: false});
        }
    }

    //handlers
    onLogin(user, saveUser) {
        SessionManager.login(user, saveUser);
        ConfigManager.setup(user);
        this.setState({
            user: user,
            checkingUser: false,
            profile: user.profile
        });
        this.redirectToHome();
    }

    onProfileChanged() {
        this.setState({
            checkingUser: false,
        });
        this.forceUpdate();
    }

    redirectToHome() {
        if (urls.checkUrl(this.props.location.pathname, urls.HOME) ||
            urls.checkUrl(this.props.location.pathname, urls.ACTIVATION) ||
            urls.checkUrl(this.props.location.pathname, urls.LOGIN)) {

            switch (UserManager.user.profile) {
                case ProfileTypes.NORMAL:
                case ProfileTypes.GAMIFICATION:
                case ProfileTypes.ELEARNING:
                    this.props.history.push(urls.MISSIONS);
                    break;
                case ProfileTypes.SERIOUS_GAME:
                    this.props.history.push(urls.GAME);
                    break;
                default:
                    this.props.history.push(urls.BOUNTIES);
                    break;
            }
        }
    }

    onLogout() {
        this.hideSideProfile();
        this.setState({
            user: null,
            profile: null
        });
        SessionManager.logout();
        ConfigManager.logout();
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

    onBountySelect(userBounty) {
        this.setState({
            userBounty: userBounty,
        });
        this.props.history.push('/bounty/'+userBounty.bounty.id);
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


    shouldComponentUpdate() {
        if (UserManager.user === null) {
            if (ConfigManager.profile.availablePages.indexOf(this.props.location.pathname) < 0){
                this.props.history.push(urls.LOGIN);
                return <Loading/>;
            }
        } else {
            this.redirectToHome();
        }
        return true;
    }

    //render
    render() {
        if (this.state.checkingParams || this.state.checkingUser)
            return <Loading/>;

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

                    <SurveyPanel/>
                    <ToastsPanel/>

                    <div className="h-100">
                        <PoseGroup>
                            <RouteContainer key={location.pathname}>
                                <Switch location={location}>
                                    <Route exact path={urls.HOME}
                                           render={(props) => <LoginPage onSuccess={this.onLogin} {...props}/>}/>
                                    <Route path={urls.ACTIVATION}
                                           render={(props) => <ActivationPage onSuccess={this.onLogin} {...props}/>}/>
                                    <Route path={urls.REGISTER}
                                           render={(props) => <RegisterPage onSuccess={this.onLogin} {...props}/>}/>
                                    <Route path={urls.MISSIONS}
                                           render={(props) => <MissionsMenu onMissionSelect={this.onMissionSelect}
                                                                            user={this.state.user} {...props}/>}/>
                                    <Route path={urls.RESET_PASSWORD}
                                           render={(props) => <ResetPasswordPage {...props}/>}/>
                                    <Route path={urls.RESET_PASSWORD_TOKEN}
                                           render={(props) => <ResetPasswordTokenPage onSuccess={this.onLogin} {...props}/>}/>
                                    <Route path={urls.ABOUT}
                                           render={(props) => <SpaceCalcAboutPage user={this.state.user} {...props}/>}/>
                                    <Route path={urls.WELCOME}
                                           render={(props) => <SpaceCalcWelcomePage user={this.state.user} {...props}/>}/>
                                    <Route path={urls.PROFILE}
                                          render={(props) => <ProfilePage usr={this.state.user} {...props}/>}/>
                                    <Route path={urls.SETTINGS}
                                           render={(props) => <SettingsPage usr={this.state.user} {...props}/>}/>
                                    <Route path={urls.RANKING}
                                           render={(props) => <RankingPage usr={this.state.user} {...props}/>}/>
                                    <Route path={urls.ACHIEVEMENTS}
                                           render={(props) => <AchievementsMenu user={this.state.user} {...props}/>}/>
                                    <Route path={urls.BOUNTY}
                                           render={(props) => <BountyItemPanel task={this.state.task}
                                                                               user={this.state.user}
                                                                               userBounty={this.state.userBounty}
                                                                               onBountySelect={this.onBountySelect}
                                                                               {...props}/>}/>
                                    <Route path={urls.BOUNTIES}
                                           render={(props) => <BountyMenu onBountySelect={this.onBountySelect}
                                                                          user={this.state.user} {...props}/>}/>
                                    <Route path={urls.TASK}
                                           render={(props) => <ItemPanel task={this.state.task}
                                                                         user={this.state.user}
                                                                         onTaskSelect={this.onTaskSelect}
                                                                         {...props}/>}/>
                                    <Route path={urls.TASKS}
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

export default withRouter(AppBase);
