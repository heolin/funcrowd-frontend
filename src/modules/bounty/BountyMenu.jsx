import React from "react"
import BountyCard from "./BountyCard";
import BountyRepository from "../../logic/repositories/BountyRepository";


export default class BountyMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bounties: null,
            loading: true
        };
    }

    componentDidMount() {
        BountyRepository.all()
            .then((bounties) => {
                this.setState({
                    loading: false,
                    bounties: bounties
                });
            }).catch((error) => {
                this.setState({ loading: false});
                console.log(error)
            });
    }

    getCardsPanel() {
        let panel = null;
        if (this.state.loading) {
            panel = <div>Loading</div>
        } else {
            console.log(this.state);
            let bounties = this.state.bounties.map(
                (bounty, i) => <BountyCard key={i} bounty={bounty}
                                             onSelect={() => this.props.onBountySelect(bounty)}/>);
            panel = (
                <div className="row">
                    {bounties}
                </div>
            );
        }
        return panel;
    }

    render() {
        return (
            <div className="row base-row">
                <div className="col-sm-12 bounties-header-bar">
                    <h3>Bounties</h3>
                    <p>Tasks performed in the form of bounty have the required number of items to perform.
                        After completing the appropriate number of items, the reward code will be unlocked,
                        which you can use to close the task and redeem the reward.</p>
                    <p>Click on the card below to begin your work on selected bounty.</p>
                </div>
                <div className="col-sm-12">
                    {this.getCardsPanel()}
                </div>
            </div>
        );
    }
}
