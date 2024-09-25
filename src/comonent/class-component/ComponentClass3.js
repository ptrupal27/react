import React, { Component } from "react"

class ComponentClass3 extends Component {
    constructor(props) {
        super()
    }
    render() {

        return (<>
            <h1>Class Component 2</h1>
            {this.props.number}

        </>)
    }
}
export default ComponentClass3;