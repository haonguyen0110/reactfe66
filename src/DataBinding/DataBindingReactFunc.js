import React from 'react'

export default function DataBindingReactFunc() {

    const title ='cybersoft';
    const renderImg =() =>{
        return <img src="https://picsum.photos/200/200"/>
    }
    return (
        <div>
            <p>Tieu de: {title}</p>
            {renderImg()}
        </div>
    )
}
