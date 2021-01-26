import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FreeOffer from './FreeOffer';
import SignInSide from './SignInSide';

class LeadCapturePage extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement(Router, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Switch, null, /*#__PURE__*/React.createElement(Route, {
      exact: true,
      path: "/"
    }, /*#__PURE__*/React.createElement(SignInSide, {
      title: this.props.title,
      productname: this.props.productname,
      firebaseConfig: this.props.firebaseConfig,
      firestoreCollection: this.props.firestoreCollection,
      productImageUrl: this.props.productImageUrl,
      submitButtonText: this.props.submitButtonText
    })), /*#__PURE__*/React.createElement(Route, {
      path: `/${this.props.productname}`
    }, /*#__PURE__*/React.createElement(FreeOffer, {
      freeOfferUrl: this.props.freeOfferUrl
    })))));
  }

}

export default LeadCapturePage;