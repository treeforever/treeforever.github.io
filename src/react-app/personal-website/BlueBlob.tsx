import * as React from 'react';
import { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';
import styled from 'styled-components';
import { useTheme } from '@material-ui/core/styles';
import { Grid, Container, useMediaQuery } from '@material-ui/core'

export default () => {
    return (
        <Container>
            <Grid container xs={8}>

                <svg width="548px" height="668px" viewBox="0 0 196 239" version="1.1">
                    <defs>
                        <linearGradient x1="26.6413739%" y1="7.84695019%" x2="91.3880279%" y2="95.028224%" id="linearGradient-1">
                            <stop stopColor="#4776FF" offset="0%"></stop>
                            <stop stopColor="#4776FF" offset="75.6048623%"></stop>
                            <stop stopColor="#2D63F4" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    <g id="Page-2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="Mobile" transform="translate(-21.000000, -322.000000)">
                            <g id="React" transform="translate(21.000000, 322.000000)">
                                <path d="M163.678711,37.8691406 C172.243164,60.5104167 172.243164,80.3066406 163.678711,97.2578125 C154.485352,116.444336 142.575195,123.286133 155.18457,135.261719 C167.793945,147.237305 171.105116,143.809997 184.020508,161.611328 C198.902344,181.432617 204.678711,220.402344 166.992187,233.744141 C140.359918,244.04915 104.842839,238.000601 97.5498047,219.630859 C86.5451648,191.912302 112.521922,143.655944 113.433594,140.932617 C121.304687,117.420247 138.05306,83.0657552 163.678711,37.8691406 Z" id="Combined-Shape" fill="#EF7FF2"></path>
                                <path d="M73.7597656,6.35351563 C123.064453,-12.1035156 168,15.3925781 168,62.4003906 C168,109.408203 127.857422,118.388672 158.076172,137.392578 C188.294922,156.396484 200.832031,190.293945 183.847656,218.083984 C146.150391,267.298828 18.8457031,219.367187 1.01367187,132.865234 C-5.61328125,71.7617188 24.4550781,24.8105469 73.7597656,6.35351563 Z" id="Path" fill="url(#linearGradient-1)"></path>
                            </g>
                        </g>
                    </g>
                </svg>
            </Grid>
        </Container>
    )
}

