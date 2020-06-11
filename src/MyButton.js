import React from 'react'

function MyButton({ text, toggle, setToggle }) {
    return (

        text && <button onClick={() => {setToggle(toggle)}}className='button bg-white p-10-20 rounded button-size m-1'>
            <b>{text}</b>
        </button>

    )
}

export default MyButton
