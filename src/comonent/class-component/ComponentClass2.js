import React, { Component } from "react"
// import ComponentClass3 from "./ComponentClass3";
import ComponentClass3 from "./ComponentClass3";
// import ComponentClass4 from "./ComponentClass4";
class ComponentClass2 extends Component {

    constructor(props) {
        super()
        this.state = {
            number: props.count
        }
    }
    render() {
        return <> <h1>ClassComponent2</h1>
         <br />
                {/* /* Data: {this.state.number} */ }
                Data: {this.props.count}
                <h1>Class Component 1</h1>
                {/* <ClassComponent2 number={this.state.number} /> */}
                <ComponentClass3 number={this.props.count} />
            {/* <ComponentClass3 /> */}
            {/* <ComponentClass4 /> */}
        </>
    }
}
export default ComponentClass2;