import React,{Component} from "react"
import ComponentClass3 from "./ComponentClass3";
import ComponentClass4 from "./ComponentClass4";
class ComponentClass2 extends Component{
    render(){
        return<> <h1>ClassComponent2</h1>
        <ComponentClass3 />
        <ComponentClass4 />
        </>
    }
}
export default ComponentClass2;