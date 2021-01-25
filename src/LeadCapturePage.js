import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import FreeOffer from './FreeOffer';
import SignInSide from './SignInSide';

class LeadCapturePage extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/">
                            <SignInSide
                                title={this.props.title}
                                productname={this.props.productname}
                                firebaseConfig={this.props.firebaseConfig}
                                firestoreCollection={this.props.firestoreCollection}
                                productImageUrl={this.props.productImageUrl}
                                submitButtonText={this.props.submitButtonText} />
                        </Route>
                        <Route path={`/${this.props.productname}`}>
                            <FreeOffer
                                freeOfferUrl={this.props.freeOfferUrl} />
                        </Route>
                    </Switch>
                </div>
            </Router>

        );
    }
}

export default LeadCapturePage;