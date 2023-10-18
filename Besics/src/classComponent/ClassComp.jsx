import React, {Component} from "react";


class ClassComp extends Component{

    render(){
        return(
            <div>Hello Class Component. <hr />

                {/* Way to use props in classComp */}
                <p>Name: {this.props.Name}</p>
                <p>age: {this.props.age}</p>
            </div>
        )
    }

}

export default ClassComp;