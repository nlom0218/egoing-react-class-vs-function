import React, { useEffect, useState } from 'react';

const FuncComp = (props) => {
    const [num, setNum] = useState(props.initNum)
    const [_date, setDate] = useState(new Date().toString())
    useEffect(() => {
        console.log("render가 호출 및 state가 업데이트 될때");
        return () => {
            console.log("useEffect가 호출될 때 가장 먼저 호출 및 해당 함수가 죽을 때");
        }
    })
    return (
        <div className="container">
            <h2>Function Style Component</h2>
            <p>Number: {num}</p>
            <p>Date: {_date}</p>
            <input type="button" value="Random" onClick={() => {
                const num = Math.floor((Math.random() * 10) + 1)
                setNum(num)
            }} />
            <input type="button" value="Date" onClick={() => {
                const date = new Date().toString()
                setDate(date)
            }} />
        </div>
    )
}

export default FuncComp