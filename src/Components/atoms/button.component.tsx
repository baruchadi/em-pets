import React from 'react'

type props={
    onClick: Function;
    text:string;
}

export const ButtonComponent = ({onClick,text}:props)=>{
    return <button onClick={()=>onClick()} className="bg-green pa1">{text}</button>
}