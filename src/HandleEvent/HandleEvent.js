import React, { Component } from 'react'

export default class HandleEvent extends Component {
    showMesasge = () => {
        alert(123123)
    }

    showTile= (tenLop)=>{
        console.log(`Hello ${tenLop}`)
    }
    render() {
        const name = 'phuong'
        const handleClick = (event) => {
            alert('Hello CyberSoft')
        }
        return (

            <div className="container">
                Xử lý sự kiện trong react
                <br></br>
                <button id="btnCLick" onClick={handleClick}>Click me !!!</button>
                <button onClick={()=>{
                    alert(`Hello ${name}`);
                    this.showTile('FE66');
                    }}>Show message !!!</button>

            </div>
        )
    }
}
