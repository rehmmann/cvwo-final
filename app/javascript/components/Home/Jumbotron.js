import React,{ Component } from 'react'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import SaveIcon from '@material-ui/icons/Save'
import BasicTextFields from './Bar';

const Section = styled.section`
    background-color: #d74234;
    min-height: 550px;
    padding: 100px 0;
    color: #D9D9D9;
    text-align: center
`

const H1 = styled.h1`
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
                            <H1>My App</H1>
                            <BasicTextFields/>
                                <Button endIcon={<SaveIcon />} 
                                    variant="contained"
                                    color="secondary">
                                    Done
                                  </Button>
                   </div>
                    </div>
                </div>
        </Section>
    )
}

export default Jumbotron