import React from "react";
import Wrapper from "./Wrapper";
import Screen from "./Screen";
import ButtonBox from "./ButtonBox";
import Button from "./Button";
import CalcProvider from "./CalcContext";

const btnValues = [
    [ 'c', '+-', '%', '/'],
    [ 1, 2, 3, '+'],
    [ 4, 5, 6, '-'],
    [ 7, 8, 9, 'x'],
    [ '.', 0, '='],
];

function Apps () {
    return (
        <CalcProvider>
            <Wrapper>
            <div className="div">Altschool Africa Frist Assigment</div>
                <Screen/>
                <ButtonBox>
                    {btnValues.flat().map((btn, i) => (
                    <Button value={btn} key ={i}/>
                    ))}
                </ButtonBox>
            </Wrapper>
        </CalcProvider>
    )
}

export default Apps;