import React from "react"

import posed  from 'react-pose';
import AchievementCard from "./AchievementCard";

const ListContainer = posed.ul({
    enter: { staggerChildren: 50 },
    exit: { staggerChildren: 20, staggerDirection: -1 }
});

export default class AchievementsMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            tasks: null
        }
    }

    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    render() {

        return (
            <div className="container base-row">
                <div>
                    <div className="badges-earned">
                        <h3>Zdobyte</h3>
                        534543
                    </div>
                    <div className="row achievements-row">
                        <div className="col-md-6 col-lg-4 col-sm-12">
                            <AchievementCard/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="badges-to-earn">
                        <h3>Do zdobycia</h3>
                        534543
                    </div>
                    <div className="row achievements-row">
                        <div className="col-xl-4 col-lg-6 col-sm-12">
                            <AchievementCard/>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-12">
                            <AchievementCard/>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-12">
                            <AchievementCard/>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-12">
                            <AchievementCard/>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-sm-12">
                            <AchievementCard/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
