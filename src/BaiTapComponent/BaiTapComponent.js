import React, { Component } from 'react';
import Header from './Header';
import HomeComponent from './HomeComponent';
import NavigationComponent from './NavigationComponent';
import ContentComponent from './ContentComponent';
import Footer from './Footer';
export default class BaiTapComponent extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <HomeComponent />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Header />
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <NavigationComponent />
                    </div>
                    <div className="col-8">
                        <ContentComponent />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Footer />
                    </div>
                </div>
            </div>
        )
    }
}
