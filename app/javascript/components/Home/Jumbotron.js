import React,{ Component } from 'react'
import styled from 'styled-components'


const Section = styled.section`
    background-color: #d74234;
    min-height: 550px;
    padding: 100px 0;
    color: #fff;
`

const H1 = styled.h1`
color: #fff;
font-weight:700;
font-size:40px;
line-height:52px;
`

const Jumbotron  = () => {
    return(
        <Section className = "home-section-1">
                <div className = "container">
                    <div className="row">
                        <div className="col col-sm-12 col-md-5">
                            <div className="pt-4 mt-4"></div>
                            <H1>My content</H1>
                            <p>Supercharge your Ruby on Rails with React.js</p>
                   </div>
                    </div>
                </div>
        </Section>
    )
}

export default Jumbotron