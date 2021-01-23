import React from 'react'

const ColorBtn = ({ color, text }) => {
    const onClick = () => {
        console.log({ color })
    }
    return <button onClick={onClick} style={{ backgroundColor: color }} className="colorbtn">{text}</button>


}

export default ColorBtn
