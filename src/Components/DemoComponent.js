//"rcc" Code tao ra component

import React, { Component } from 'react'

export default class DemoComponent extends Component {


    //Phuong thusc render chua noi dung giao dien cua the
    //Noi dung component phai duoc bao phu boi 1 the: thuong dung the div
    render() {
        return (
            <div>
                <div className="content m-2 bg-dark text-white">
                <p className="display-4 p-2">Title</p>
                <p>Content</p>
                </div>
            </div>
        )
    }
}
