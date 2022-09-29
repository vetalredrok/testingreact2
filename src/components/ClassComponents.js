import {Component} from "react";

class ClassComponents extends Component{
    constructor(props) {
        super(props);
        this.state = {a: 0, b:25}
    }

    render() {
        return (
            <div>
                Hello from ClassComponent!!!
                <div>A:{this.state.a} </div>
                <div>B:{this.state.b} </div>
            </div>


        )
    }

}

export {ClassComponents};