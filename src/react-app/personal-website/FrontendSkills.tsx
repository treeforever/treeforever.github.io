import * as React from 'react';
import styled from 'styled-components';
import { Grid, Container, createMuiTheme } from '@material-ui/core'

const StyledTextContainer = styled(Container)`
    margin-top: 150px;
    position: absolute;

`
const theme = createMuiTheme({
    props: {
        MuiTypography: {
            variantMapping: {
                h1: 'h2',
                h2: 'h2',
                h3: 'h2',
                h4: 'h2',
                h5: 'h2',
                h6: 'h6',
                subtitle1: 'h2',
                subtitle2: 'h2',
                body1: 'span',
                body2: 'span',
            },
        },
    },
});

export default () => {
    return (
        <Grid container>
            <svg width="443px" height="530px" viewBox="0 0 443 530" version="1.1">
                <defs>
                    <linearGradient x1="3.54687615%" y1="45.4824767%" x2="97.13582%" y2="54.2165022%" id="linearGradient-1">
                        <stop stop-color="#4776FF" offset="0%"></stop>
                        <stop stop-color="#4171FC" offset="86.1407153%"></stop>
                        <stop stop-color="#4776FF" offset="100%"></stop>
                    </linearGradient>
                </defs>
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <path d="M332.724643,39 C368.199607,71.21814 411.53912,133.904283 369.72702,215.785549 C348.718169,256.927498 326.46117,283.368606 341.43631,298.072361 C356.411451,312.776117 394.473266,326.707816 421.466217,360.179462 C451.625842,397.57783 460.687132,489.258048 377.078098,518.886766 C317.99336,541.771555 239.197324,528.339276 223.01744,487.544779 C198.603214,425.988955 256.233672,318.823929 258.256251,312.776117 C284.449748,234.45368 311.60691,57.3745116 332.724643,39 Z" id="pink-shadow" fill="#EF7FF2"></path>
                    <path d="M164.231926,12.8573878 C273.719982,-28.0922989 373.505741,32.911901 373.505741,137.20577 C373.505741,241.499638 284.363449,261.424152 351.468472,303.587163 C418.573496,345.750174 451.704826,426.516497 408.697711,482.613126 C324.985583,591.803624 27.9530392,488.454415 2.68890008,293.542573 C-14.8133726,158.513226 54.7438696,53.8070744 164.231926,12.8573878 Z" id="blue-blob" fill="url(#linearGradient-1)"></path>
                    <text fontFamily="JosefinSans-SemiBold, Josefin Sans" fontSize="39" fontWeight="500" fill="#FBFEFF">
                        <tspan x="134" y="159">React</tspan>
                    </text>
                    <text id="--redux---saga---obs" fontFamily="JosefinSans-Regular, Josefin Sans" fontSize="31" fontWeight="normal" fill="#FBFEFF">
                        <tspan x="117" y="242">- redux</tspan>
                        <tspan x="117" y="279">- saga</tspan>
                        <tspan x="117" y="316">- observables</tspan>
                    </text>
                    <g transform="translate(134.000000, 358.000000)">
                        <text id="examples" fontFamily="JosefinSans-Regular, Josefin Sans" fontSize="31" fontWeight="normal" fill="#FBFEFF">
                            <tspan x="0" y="29">examples </tspan>
                        </text>
                        <path id="Line" d="M169.78866,23.5666667 L147.113402,23.5666667 L146.613402,23.5666667 L146.613402,22.5666667 L147.113402,22.5666667 L169.78866,22.5666667 L169.78866,18.5666667 L178.78866,23.0666667 L169.78866,27.5666667 L169.78866,23.5666667 Z" fill="#FFFEFE" fillRule="nonzero"></path>
                    </g>
                </g>
            </svg>
        </Grid>
    )
}



