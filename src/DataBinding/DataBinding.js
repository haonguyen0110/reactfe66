import React, { Component } from 'react'

export default class DataBinding extends Component {
    product = {
        id: 1,
        name: 'Iphone X',
        price: 1000,
        img: 'https://picsum.photos/200/200'
    }
    renderProduct = () =>{
        return <div>
            
                <div className="w-25 mt-2">
                    <div className="card">
                            <img src={this.product.img} alt='...' />
        
                        <div className="card-body">
                            <p>{this.product.name}</p>
                            <p>{this.product.price}</p>
                        </div>
                        <div className="card-footer bg-dark text-white text-center">
                            <button className="btn btn-success">Đặt mua</button>
                        </div>
                    </div>
                </div>
        </div>
    }


    //Phuong thusc render

    render() {

        let hoTen = 'Nguyen Van A'
        

        return (
            <div>
               
            {this.renderProduct()}
            </div>

        )
    }
}
