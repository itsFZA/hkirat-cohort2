import { useState } from "react";

function BgChanger() {
    const [givenColor,setGivenColor] = useState('white');
    document.body.style.background = givenColor;
    const styleParent = {
        boxShadow:'0px 2px 2px #D3D3D3',
        borderTop:'0px',
        borderRadius:'5px',
        padding:'10px',
        position: 'fixed',
        bottom:20,
        backgroundColor:'white',
        left:450
        };
    const sharedButtonStyle = {
        padding:'5px',
        width:'70px',
        borderRadius:'10px',
        color:'grey'
        }
    const buttons = [
            { label: 'Red', background: 'red' },
            { label: 'Yellow', background: 'yellow' },
            { label: 'Black', background: 'black' },
            { label: 'Purple', background: 'purple' },
            { label: 'Green', background: 'green' },
            { label: 'Blue', background: 'blue' },
            { label: 'Orange', background: 'orange' },
    ];
    return(
        <div style={styleParent}>
            {/* <button style={styleButton} onClick={() =>{setGivenColor('red')}}>Red</button>
            <button style={{background:'yellow', 
            padding:'5px',
            width:'70px',
            borderRadius:'10px'
            }} onClick={() =>{setGivenColor('Yellow')}}>Yellow</button>
            <button style={{background:'black', 
            padding:'5px',
            width:'70px',
            borderRadius:'10px'
            }} onClick={() =>{setGivenColor('black')}}>Black</button>
            <button style={{background:'purple', 
            padding:'5px',
            width:'70px',
            borderRadius:'10px'
            }} onClick={() =>{setGivenColor('purple')}}>Purple</button>
            <button style={{background:'green', 
            padding:'5px',
            width:'70px',
            borderRadius:'10px'
            }} onClick={() =>{setGivenColor('green')}}>Green</button>
            <button style={{ 
            padding:'5px',
            width:'70px',
            borderRadius:'10px'
            }} onClick={() =>{setGivenColor('blue')}}>Blue</button>
            <button style={{background:'orange', 
            padding:'5px',
            width:'70px',
            borderRadius:'10px'
            }} onClick={() =>{setGivenColor('orange')}}>default</button> */}
            {buttons.map((button,index) => (
                <button
                key={index}
                style={{...sharedButtonStyle, background:button.background}}
                onClick={() => setGivenColor(button.background)}
                >{button.label}</button>
            ))}
        </div>
    )
}

export default BgChanger;