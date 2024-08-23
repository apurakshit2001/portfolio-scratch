import React, { useEffect, useState } from 'react'

const UseeStateeee = () => {
    const [text, setTextt] = useState('UseeStatee')
    const textTramsfer = (e) => {
        setTextt(e.target.value)
        console.log("Text updated" + text);
    }
    // useEffect(() => {
    //     setInterval(() => {
    //         setTextt(text + '-' + 1);
    //     }, 1000)
    // }, [])

    return (
        <div>
            <h1 className='animate__animated animate__rubberBand'>{text}</h1>
            <div className="input-container">
                <input className="input" name="text" type="text" value={text} onChange={textTramsfer}/>
                    <label className="label" for="input">Update The Text</label>
                    <div className="topline"></div>
                    <div className="underline"></div>
            </div>
        </div>
    )
}

export default UseeStateeee