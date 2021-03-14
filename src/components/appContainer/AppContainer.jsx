import React from "react";
import { connect } from "react-redux";
import App from './app/App';

class AppContainer extends React.Component{

    render(){  
        return <App {...this.props}/>
    }
}

export default connect()(AppContainer);