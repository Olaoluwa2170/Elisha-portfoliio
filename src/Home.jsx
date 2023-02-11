import { Component } from "react";
import Header from "./Header";
import About from "./About";
import ButtonFacing from "./Button";



class Main extends Component{
    constructor(){
        super()
    }

    render()
    {
        return(
        <div>
            <Header />
            <ButtonFacing/>
            <About/>
        </div>
        )
    }
}

export default Main