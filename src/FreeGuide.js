import React from 'react';

class FreeGuide extends React.Component {
    componentDidMount() {
        const url = "https://firebasestorage.googleapis.com/v0/b/relguide.appspot.com/o/The%20Ultimate%20Relationship%20Guide.pdf?alt=media&token=a47e67bd-0b09-4761-871b-bf5973f3ccbc";
        window.location.replace(url)
    }

    render() {
        return (<div></div>);
    }
}

export default FreeGuide;