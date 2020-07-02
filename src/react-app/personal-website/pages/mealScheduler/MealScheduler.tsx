import * as React from "react";
import { Container, Grid } from '@material-ui/core';
import styled from 'styled-components';

import HeroImage from './hero.jpg';


export default () => {

    return (
        <SizedImage />
    );
};

const SizedImage = styled.img.attrs(() => ({ src: HeroImage}))`
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
 