import React, { Component } from 'react'
import Jumbotron from './Jumbotron'

class Home extends Component{
    constructor(){
        super()

        this.state = 1
    }


    render(){
        return(
            <div>

                <Jumbotron/>
                <h1>
                    I am testing this
                </h1>
            </div>
        )
    }
}

export default Home