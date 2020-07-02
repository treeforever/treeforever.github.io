import * as React from "react";
import { Container, Grid } from '@material-ui/core';
import styled from 'styled-components';

import Hero from './Hero';
import FrontendSkills from './FrontendSkills';
import AnimationSkills from './AnimationSkills';
import BackendSkills from './BackendSkills';

export default () => {

    return (
        <Grid direction="column">
            <Hero />
            <main>
                <StyledContainer maxWidth="lg">
                    <FrontendSkills />
                    <AnimationSkills />
                    <BackendSkills />
                </StyledContainer>
            </main>
        </Grid>
    )
}

const StyledContainer = styled(Container)`
 background: #fcfcfc;
`