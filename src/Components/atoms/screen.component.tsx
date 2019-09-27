import React from 'react'

export const ScreenComponent = ({children}:{children:React.ReactNode}) =>{
    return <div  className="bg-white vh-75 vw-50 flex flex-column justify-between" >{children}</div>
}