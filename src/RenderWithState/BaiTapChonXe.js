import React, { Component } from 'react'
//import đường dẫn css : Ảnh hưởng toàn bộ ứng dụng
import './BaiTapChonXe.css' ;
//import cach 2
import style from './BaiTapChonXe.module.css';
export default class BaiTapChonXe extends Component {
/*
    Các bước thực hành bài tập react
    1/ Dàn layout chia component
    2/ Xác định state: Xác định thành phần thay đổi trênn giao diện là gì? (src, innerHTML,value)? dùng kiểu dữ liệu nào để lưu trữ nó
    (string, number,array,obj)
    3/ Xử lý setState làm thay đổi giá trị đó cài đặt vào các event (onclick, onchange, onblur,...)

    */
    state={
        imgSrc: "./img/CarBasic/products/black-car.jpg"
    }
    handleChangColor = (color) =>{
        this.setState({
            imgSrc: `./img/CarBasic/products/${color}-car.jpg`
        })
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <img className="w-100" src={this.state.imgSrc} alt="..." />
                    </div>
                    <div className="col-6">
                        <div className="card">
                            <div className="card-header text-red">Exterior</div>
                            <div className="card-body">
                                <div className="row mt-2 border border-dark p-2" style={{cursor:'pointer'}}>
                                    <div className="col-2">
                                        <img className="w-100" src="./img/CarBasic/icons/icon-black.jpg"></img>
                                    </div>
                                    <div className="col-10 d-flex justify-content-start align-items-center" onClick={()=>{
                                      this.handleChangColor('black')
                                    }}>
                                        Black color
                                    </div>
                                </div>

                                <div className="row mt-2 border border-dark p-2" style={{cursor:'pointer'}}>
                                    <div className="col-2">
                                        <img className="w-100" src="./img/CarBasic/icons/icon-red.jpg"></img>
                                    </div>
                                    <div className="col-10 d-flex justify-content-start align-items-center" onClick={()=>{
                                       this.handleChangColor('red')
                                        
                                    }}>
                                        Red color
                                    </div>
                                </div>

                                <div className="row mt-2 border border-dark p-2" style={{cursor:'pointer'}}>
                                    <div className="col-2">
                                        <img className="w-100" src="./img/CarBasic/icons/icon-silver.jpg"></img>
                                    </div>
                                    <div className="col-10 d-flex justify-content-start align-items-center" onClick={()=>{
                                        this.handleChangColor('silver')
                                    }}>
                                        Silver color
                                    </div>
                                </div>

                                <div className="row mt-2 border border-dark p-2" style={{cursor:'pointer'}}>
                                    <div className="col-2">
                                        <img className="w-100" src="./img/CarBasic/icons/icon-steel.jpg"></img>
                                    </div>
                                    <div className="col-10 d-flex justify-content-start align-items-center" onClick={()=>{
                                        this.handleChangColor('steel')
                                    }}>
                                        Steel color
                                    </div>
                                </div>

                            </div>
                            <div className={`card-footer ${style.textGreen}`}>Wheels</div>
                                    {/* Nếu sau style. có ký tự đặc biệt thì dùng obj[''] */}

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
