import * as React from "react";
import { Container, Grid, Typography } from '@material-ui/core'
import styled from 'styled-components';

import Wave from './Wave'
// import { styled } from '@material-ui/core/styles';

const StyledH1 = styled.h1`
    font-family: 'Julius Sans One', sans-serif;
    font-size: 7em;
    text-align: center;
    margin-top: 20vh;
`
const StyledH2 = styled.h2`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 4em;
    color: #4776FF;
    text-align: center;
`

export default () => {

    return (
        <div style={{ height: '85vh' }}>
            <StyledH1>Mengqi Zhu</StyledH1>
            <StyledH2>Web developer</StyledH2>
            <Wave />
        </div>
    )
}
