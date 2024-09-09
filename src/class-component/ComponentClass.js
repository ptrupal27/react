import React,{Component} from "react"
import ComponentClass2 from "./ComponentClass2";

class ComponentClass extends Component{
    render(){
        return(
            <>
                <div><h1>ClassComponent1</h1></div>
                <ComponentClass2 />
            </>
        )
    }
}

export default ComponentClass;