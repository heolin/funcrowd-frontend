import React from "react"
import BountyCard from "./BountyCard";
import BountyRepository from "../../logic/repositories/BountyRepository";
import ListContainer from "../../components/animated/ListContainer"
import Loading from "../../components/Loading";


export default class BountyMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userBounties: null,
            loading: true
        };
    }

    componentDidMount() {
        BountyRepository.all()
            .then((userBounties) => {
                userBounties.sort(function (a, b) {
                    let keyA = a.getStatusOrder();
                    let keyB = b.getStatusOrder();
                    if(keyA < keyB) return -1;
                    if(keyA > keyB) return 1;
                    return 0;
                });
                this.setState({
                    loading: false,
                    userBounties: userBounties
                });
            }).catch((error) => {
                this.setState({ loading: false});
                console.log(error)
            });
    }

    render() {
        if (this.state.loading)
            return <Loading/>;

        let userBounties = this.state.userBounties.map(
            (userBounty, i) => <BountyCard key={i} userBounty={userBounty}
                                       onSelect={() => this.props.onBountySelect(userBounty)}/>);

        return (
            <div className="container-fluid base-row-padding row">

                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 missions-introduction">
                            <h3>Bounties</h3>
                            <p>Tasks performed in the form of bounty have the required number of items to perform.
                                After completing the appropriate number of items, the reward code will be unlocked,
                                which you can use to close the task and redeem the reward.</p>
                            <p>Click on the card below to begin your work on selected bounty.</p>
                        </div>
                    </div>
                    <ListContainer className="row missions-row" key='list'>
                        {userBounties}
                    </ListContainer>
                </div>
            </div>
        );
    }
}
