import * as React from 'react';
import { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';
import styled from 'styled-components';

// warning: not responsive
const Container = styled.div`
  width: 558px;
  margin: auto;
`;
export default () => {
    useEffect(() => {
        // animate stroke formation
        anime({
            targets: '#M path',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 3000,
            // direction: 'alternate',
        });

        // animate stroke color
        anime({
            targets: '#M > g',
            stroke: ['#33E7C4', '#FFFC16', '#EC8CDD'],
            easing: 'easeInOutSine',
            duration: 5000,
        });
    }, [])

    return (
        <Container>
            <svg id="M" width="279px" height="282px" viewBox="0 0 558 565" version="1.1">
                <g
                    id="group"
                    transform="translate(12.000000, 3.000000)"
                    strokeWidth="5"
                    fillRule="evenodd"
                // stroke={strokeColor}
                >
                    <path
                        d="M457,135.879388 L457,559 L543,559 L543,135.879388 C529.295799,119.654937 516.839398,110.322386 505.630798,107.881733 C489.218988,103.929792 473.008722,113.262344 457,135.879388 Z"
                        id="Path-3"
                        fill="#0B89FD"
                    />
                    <path
                        d="M542,135.882827 C496.587473,80.6657457 453.84954,62.7265128 418.5,85.8561685 C405.024476,95.8291901 385.598436,119.195068 358.514716,164.337171 C331.430996,209.479274 310.259424,243.759472 295,267.177763 C314.982545,300.874945 341.239396,305.024627 373.770554,279.626808 L456.657882,135.638347 C472.074361,114.948456 487.012862,105.473009 501.473386,107.212005 C513.613769,108.671985 527.12264,118.228926 542,135.882827 Z"
                        id="Path-2"
                        fill="#0053AB"
                    />
                    <path
                        d="M294.981231,266.898161 C239.50898,183.61712 186.930883,94.6510657 137.246941,0 L0,0 C34.8426316,15.6432659 52.2639475,31.0053433 52.2639475,46.0862321 C52.2639475,60.0018494 52.2639475,493.549626 52.2639475,516.159989 C52.2639475,525.372502 22.9494237,547.930352 0,559 L137.246941,558.965569 L137.246941,143.91403 L220.956693,279.5 C270.306385,353.138408 337.979752,345.139956 373.874023,279.5 C360.542874,290.21063 347.464328,295.565945 334.638387,295.565945 C327.238516,295.565945 314.176564,291.301312 294.981231,266.898161 Z"
                        id="Path-1"
                        fill="#0B89FD"
                    />
                </g>
            </svg>
        </Container>
    );
}

