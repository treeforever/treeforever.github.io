import * as React from "react";
import { useState, useEffect, useCallback, useMemo } from 'react';
import { Container, Grid } from '@material-ui/core'
import styled from 'styled-components';


import Hero from './Hero'
import BlueBlob from './BlueBlob'

const StyledContainer = styled(Container)`
 background: #eafff2;
`

export const App = () => {


    return (
        <Grid direction="column">
            <Hero />
            <main>
                <StyledContainer maxWidth="lg">
                    <BlueBlob />
                </StyledContainer>
            </main>
        </Grid>)
}
