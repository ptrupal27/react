import React,{Component} from "react"
import ComponentClass5 from "./ComponentClass5";

class ComponentClass4 extends Component{
    render(){
        return(<> <h1>ClassComponent4</h1>
          <ComponentClass5 />
        </>
        )
    }
}
export default ComponentClass4;