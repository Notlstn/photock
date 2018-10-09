import React, { Component } from "react";
import Header from "./components/Header/Header";
import PhotoSpace from "./containers/PhotoSpace/PhotoSpace";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <PhotoSpace />
            </React.Fragment>
        );
    }
}

export default App;
