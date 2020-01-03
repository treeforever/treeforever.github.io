import * as React from "react";
import { useState, useEffect, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import M from './M'
import Wave from './Wave'


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
        <>
            <StyledH1>Mengqi Zhu</StyledH1>
            <StyledH2>Web developer</StyledH2>
            <Wave />
        </>)
}
