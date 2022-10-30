import React, { useContext } from "react";
import { CalcContext } from "./CalcContext";


const Screen=() => {
const {calc} = useContext(CalcContext)
    return (
        < div className="screen" max= {70} mod ="single">
            {calc.num ? calc.num : calc.res}</div>
        )
}
export default Screen;