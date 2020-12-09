import React from "react"
import RankingRepository from "../../logic/repositories/RankingRepository";
import Loading from "../../components/Loading";
import UserManager from "../../logic/UserManager";
import {Icon, SmallIcon} from "../../components/Icons";
import {Footer} from "../../Footer";


export default class RankingPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            ranking: null,
            hasNextPage: false,
            userRanking: null,
            loadingRanking: true,
            loadingRankingNext: true,
            loadingUserRanking: true
        };

        this.onNextPage = this.onNextPage.bind(this);
        this.onPrevPage = this.onPrevPage.bind(this);
        this.updateRanking = this.updateRanking.bind(this);
    }

    componentDidMount() {
        this.updateRanking();
    }

    updateRanking() {
        RankingRepository.global(this.state.page)
            .then((ranking) => {
                this.setState({
                    ranking: ranking,
                    loadingRanking: false
                });
            })
            .catch((error) => {
                this.setState({loadingRanking: false});
                console.log(error)
            });

        // check if next page is available
        RankingRepository.global(this.state.page + 1)
            .then((ranking) => {
                this.setState({
                    hasNextPage: ranking.rows.length > 0,
                    loadingRankingNext: false
                });
            })
            .catch((error) => {
                this.setState({loadingRankingNext: false});
                console.log(error)
            });

        RankingRepository.user(UserManager.user.id)
            .then((row) => {
                this.setState({
                    userRanking: row,
                    loadingUserRanking: false
                });
            })
            .catch((error) => {
                this.setState({loadingUserRanking: false});
                console.log(error)
            });
    }

    onPrevPage() {
        if (this.state.page > 0) {
            let newPage = this.state.page - 1;
            this.setState({
                page: newPage,
                loadingRanking: true,
                loadingUserRanking: true,
                loadingRankingNext: true,
            }, this.updateRanking);
        }
    }

    onNextPage() {
        if (this.state.hasNextPage) {
            let newPage = this.state.page + 1;
            this.setState({
                page: newPage,
                loadingRanking: true,
                loadingUserRanking: true,
                loadingRankingNext: true,
            }, this.updateRanking);
        }
    }

    render() {
        if (this.state.loadingRanking ||
            this.state.loadingUserRanking ||
            this.state.loadingRankingNext ||
            UserManager.user === null)
            return <Loading/>;

        let rows = [];
        let addUserRow = true;
        let prevButton = null;
        let nextButton = null;
        let lastPosition = null;
        let prevArrowClass = "";
        let nextArrowClass = "";

        this.state.ranking.rows.forEach((row) => {
            let className = "";
            if (row.userId === UserManager.user.id) {
                className = "ranking-table-row-current";
                addUserRow = false;
            }

            let icon = null;
            if (row.position === 1)
                icon = <SmallIcon className="ranking-table-icon" name="medal-gold"/>;
            else if (row.position === 2)
                icon = <SmallIcon className="ranking-table-icon" name="medal-silver"/>;
            else if (row.position === 3)
                icon = <SmallIcon className="ranking-table-icon" name="medal-bronze"/>;

            let elem = <tr className={className}>
                <td>{row.position}{icon}</td>
                <td>{row.username}</td>
                <td><b>{row.value}</b> pkt</td>
            </tr>;

            lastPosition = row.position;
            rows.push(elem);
        });

        if (addUserRow && this.state.userRanking) {
            let row = this.state.userRanking;

            if (lastPosition < row.position) {
                if (lastPosition + 1 < row.position)
                    rows.push(<tr>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                    </tr>);

                rows.push(<tr className="ranking-table-row-current">
                    <td>{row.position}</td>
                    <td>{row.username}</td>
                    <td><b>{row.value}</b> pkt</td>
                </tr>);
            }
        }

        if (this.state.page > 0)
            prevButton = (
                <div className="btn btn-default ranking-table-page-button d-inline-block"
                     onClick={this.onPrevPage}
                     style={{marginLeft: "-80px"}}>
                    {this.state.page}
                </div>
            );
        else
            prevArrowClass = "inactive";

        let currentButton = (
            <div className="btn btn-primary ranking-table-page-button d-inline-block"
                style={{marginLeft: "-20px"}}>
                {this.state.page + 1}
            </div>
        );

        if (this.state.hasNextPage)
            nextButton = (
                <div className="btn btn-default ranking-table-page-button d-inline-block"
                     onClick={this.onNextPage}
                     style={{marginLeft: "40px"}}>
                    {this.state.page + 2}
                </div>
            );
        else
            nextArrowClass = "inactive";

        return (
            <div className="container-fluid base-row">
                <div className="container base-row-padding" style={{minHeight: "850px"}}>
                    <div className="col-sm-12">
                        <h3>Ranking</h3>
                        <p>Sprawdź swoje miejsce i zobacz postęp innych!</p>
                    </div>
                    <div className="ranking-panel col-md-8 offset-md-2 col-12 card-2-static small">
                        <table className="ranking-table table table-borderless text-center">
                            <thead>
                                <tr className="color-blue">
                                    <th scope="col"><b>Miejsce</b></th>
                                    <th scope="col"><b>Gracz</b></th>
                                    <th scope="col"><b>Doświadczenie</b></th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows}
                            </tbody>
                        </table>
                    </div>
                    <div className="ranking-table-page-buttons text-center">
                        <div className={"d-inline-block flip-horizontal ranking-table-page-arrow " + prevArrowClass}
                             onClick={this.onPrevPage}
                             style={{marginLeft: "-120px"}}>
                            <Icon className="very-small-icon" name="arrow-right_blue"/>
                        </div>
                        {prevButton}
                        {currentButton}
                        {nextButton}
                        <div className={"d-inline-block ranking-table-page-arrow" + nextArrowClass}
                             onClick={this.onNextPage}
                            style={{marginLeft: "100px"}}>
                            <Icon className="very-small-icon" name="arrow-right_blue"/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}
