import React, { Component } from "react"
import ComponentClass2 from "./ComponentClass2";

class ComponentClass extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            showComponent: false
        }
        console.log('constructor');
    }

    increaseCount = () => {
        this.setState({
            count: this.state.count + 1,
            showComponent: !this.state.showComponent
        });
    }

    showComponent = () => {
        this.setState({
            showComponent: !this.state.showComponent
        });
    }
    render() {
        return (
            <>
                <h3>Count: {this.state.count}</h3>
                <button onClick={() => this.increaseCount()}>Increase Count</button>
                <ComponentClass2 count={this.state.count} />
                <div><h1>ClassComponent1</h1></div>
                {/* <ComponentClass2 /> */}
            </>
        )
    }
}

export default ComponentClass;