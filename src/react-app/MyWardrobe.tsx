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
            <div id="Outwear-container">
            <div id="Outwear-text">Outwear</div>
            <div id="Outwear-placeholder" style={{height: '100px', width: '100px', border: 'dashed 1px grey'}}></div>
            </div>
            
            <div>+</div>

        <div id="Tops-container">
            <div id="Tops-text">Tops</div>
            <div id="Tops-placeholder" style={{ height: '100px', width: '100px', border: 'dashed 1px grey' }}></div>
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
