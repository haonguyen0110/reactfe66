import React, { Component } from 'react'

export default class RenderWithMap extends Component {

    arrProduct = [
        {id:1, name:'iphone',price:1000,img:'https://picsum.photos/id/10/200/200'},
        {id:2, name:'iphone X',price:2000,img:'https://picsum.photos/id/20/200/200'},
        {id:3, name:'iphone XS',price:3000,img:'https://picsum.photos/id/30/200/200'},
        {id:4, name:'iphone XS Max',price:4000,img:'https://picsum.photos/id/40/200/200'},
    ]

    renderProduct= () =>{

        //Cách 1:

        // let arrTagProduct =[];

        // for(let i=0;i<this.arrProduct.length;i++){
        //     let product = this.arrProduct[i];
        //     //Từ obj tạo ra tag html của react
        //     let tagJSX = <tr>
        //         <td>{product.id}</td>
        //         <td>{product.name}</td>
        //         <td>{product.price}</td>
        //         <td><img src={product.img} width={50} height={50}></img></td>
        //     </tr>

        //     arrTagProduct.push(tagJSX);
        // }


        // return arrTagProduct

        //Cách 2 : Sử dụng hàm map
        let arrResult = this.arrProduct.map((product,index)=>{
            return <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td><img src={product.img} width={50} height={50} alt="..."></img></td>
            </tr>
        })

        return arrResult;
    }
    render() {
        return (
            <div className="container">
                <h3>Danh sách sản phẩm</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã sp</th>
                            <th>Tên sp</th>
                            <th>Giá sp</th>
                            <th>Hình ảnh</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderProduct()}
                    </tbody>
                </table>
            </div>
        )
    }
}
