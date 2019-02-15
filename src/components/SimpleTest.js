import React, { Component } from 'react';
import axios from 'axios';
import { Server } from './Properties';

export default class SimpleTest extends Component {

    componentWillMount() { //init영역 : 화면이 그려지기 전에 불리는 시스템함수임.
    }

    onSetClick = async () => { //SET 클릭시 컨트랙트의 setValue호출
        let ret = await this.setOwner(this.setCarInput.value, this.setOwnerInput.value);
        console.log('onSetClick:');
        console.log(ret);
    }

    onGetClick = async () => { //GET 클릭시 컨트랙트의 getValue호출
        let carOwner = await this.getOwner(this.setCarInput.value);
        this.getInput.value = carOwner;
    }

    ////  REST API CALL promise/////////////////////////////////////////////////
    getOwner = (car) =>
        axios(Server.getRestAPIHost() + '/admin/owner?car=' + car)
            .then((response) => {
                let carInfo = response.data;  //{"colour":"red","make":"Ford","model":"Mustang","owner":"Brad"}
                console.log('getOwner:' + carInfo.owner);
                return carInfo.owner;
            });

    setOwner = (car, owner) =>
        axios.put(Server.getRestAPIHost() + '/admin/owner?car=' + car + '&owner=' + owner)
            .then((response) => {
                console.log('setOwner:' );
                console.log(response.data );
                return response.data;
            });

    render() {
        return (
            <div>
                <br/>                    {/* CAR INPUT  */ }
                <h5> Car Test</h5>
                <input type="text" placeholder="carID - ex)CAR0"
                       ref = {(input) => {this.setCarInput = input}}
                />

                <br/>                       {/* GetOwner버튼 + INPUT */}
                <button onClick = {this.onGetClick}> GET Owner</button>
                <input type="text"
                       ref = {(input) => {this.getInput = input}}
                />

                <br/>                       {/* INPUT + SET버튼*/}
                <input type="text"  placeholder="Owner"
                       ref = {(input) => {this.setOwnerInput = input}}
                />
                <button onClick = {this.onSetClick}> SET </button>

                <br/>
                <br/>

            </div>
        );
    }
}
