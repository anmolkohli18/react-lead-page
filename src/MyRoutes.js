import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import FreeGuide from './FreeGuide';
import SignInSide from './SignInSide';

class MyRoutes extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/">
                            <SignInSide />
                        </Route>
                        <Route path="/freerelationshipguide">
                            <FreeGuide />
                        </Route>
                    </Switch>
                </div>
            </Router>

        );
    }
}

export default MyRoutes;