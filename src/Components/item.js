import React, { useState } from "react";

let style = {
    width: '20px',
    height: '20px',
    backgroundColor: 'rgb(200,200,200)',
    border: '1px solid',
    borderRadius: '3px'
}

export default function Item() {
    const [inputVisible, setInputVisible] = useState(false);
    const [color, setColor] = useState({ r: 200, g: 200, b: 200 });
    const [newColor, setNewColor] = useState({ r: 0, g: 0, b: 0 });

    const handleClick = () => {
        setInputVisible(true);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewColor(prevState => ({
            ...prevState,
            [name]: parseInt(value)
        }));
    }
    const styleInput = {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center',
        flexDirection: 'column',
    }
    const handleSubmit = () => {
        setColor(newColor);
        setInputVisible(false);
    }

    const bgColor = `rgb(${color.r},${color.g},${color.b})`;

    return (
        <div>
            {inputVisible ? (
                <div style={styleInput}>
                    <input type="number" name="r" value={newColor.r} onChange={handleInputChange} />
                    <input type="number" name="g" value={newColor.g} onChange={handleInputChange} />
                    <input type="number" name="b" value={newColor.b} onChange={handleInputChange} />
                    <button onClick={handleSubmit}>Apply</button>
                </div>
            ) : (
                <div style={{ ...style, backgroundColor: bgColor }} onClick={handleClick}>
                    
                </div>
            )}
        </div>
    )
}
