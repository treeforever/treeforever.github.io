import * as React from "react";
import FlexContainer from "./components/FlexContainer";

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    height: '50px',
    transform: 'translateY(-300px)'
} as React.CSSProperties;

const handleStyle = {
    display: 'flex',
    flexDirection: 'column',
    border: 'none',
    backgroundColor: 'yellow',
    margin: 'auto',
    width: '150px',
    height: '100%',

} as React.CSSProperties;

const bodyStyle = {
    padding: '3rem',
    background: 'yellow',
    height: '300px',
    width: '100%',
    bottom: 0,
    left: 0,
    right: 0,
}

const horizontalCenter = {
    width: 'auto', margin: 'auto'
}

const WardrobeHandle = () =>
    <button style={handleStyle} id="handle-container">
        <div style={horizontalCenter}>&#9650;</div>
        <div style={horizontalCenter}>
            My Wardrobe
            </div>
    </button>

const WardrobeBody = () =>
    <div id="body-container" style={bodyStyle}>
        <FlexContainer id="wardrobe-row">
            <div id="Outerwear-container">
                <div id="Outerwear-text">Outerwear</div>
                <div id="Outerwear-placeholder" style={{ height: '100px', width: '100px', border: 'dashed 1px grey' }}>
                    <img src="https://aritzia.scene7.com/is/image/Aritzia/medium/f19_01_a05_73432_18031_on_a.jpg" height="100"/>
                </div>
            </div>

            <div>+</div>

            <div id="Tops-container">
                <div id="Tops-text">Tops</div>
                <div id="Tops-placeholder" style={{ height: '100px', width: '100px', border: 'dashed 1px grey' }}>
                    <img src="https://aritzia.scene7.com/is/image/Aritzia/medium/f19_04_a03_74987_17809_on_b.jpg" height="100" />
                </div>
            </div>
        </FlexContainer>


    </div>

export default () => {
    const clickHandler = () => {

    }
    return (
        <div style={containerStyle} id="wardrobe-container">
            <WardrobeHandle />
            <WardrobeBody />
        </div>
    )
}
