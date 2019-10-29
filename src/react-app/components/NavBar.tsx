import * as React from "react";

const style = {
    display: 'flex',
    height: '50px',
    width: '100%',
}

const brandNameStyle = {
    margin: 'auto',
    width: '10rem',
    fontSize: '2rem',
}

export default () => (
    <>
        <div style={style}>
            <div id="brand_name" style={brandNameStyle}>BABYLON</div>
        </div>
    </>
)