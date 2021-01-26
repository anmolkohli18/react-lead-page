import React from 'react';

class FreeOffer extends React.Component {
  componentDidMount() {
    const url = this.props.freeOfferUrl;
    window.location.replace(url);
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null);
  }

}

export default FreeOffer;