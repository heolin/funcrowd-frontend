import React from "react"


export default class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
        this.onLogout = this.onLogout.bind(this);
    }

    onLogout() {
        this.props.onLogout();
    }


    render() {
        let username = null;
        let logout = null;
        if (this.props.user) {
            username = <div>Hello, {this.props.user.username}</div>;
            logout = (
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={this.onLogout}>Logout</a>
                </li>);
        }
        return (
            <nav className="navbar card-2-static fixed-top navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">FunCrowd</a>
                {username}
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="#" onClick={this.props.onNavigateToMissions}>
                                Missions <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        {logout}
                    </ul>
                </div>
            </nav>
        );
    }
}
