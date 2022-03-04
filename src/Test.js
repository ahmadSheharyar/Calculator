import React from "react";

function Test() {
    const [firstValue, setfirstValue] = React.useState('');
    const [secondValue, setSecondValue] = React.useState('');
    const [operator, setoperator] = React.useState(null);
    const [display, setdisplay] = React.useState(null);




    const handleClick = (value) => {
        if (!operator) {
            setfirstValue(firstValue + value.toString());
            setdisplay(firstValue + value.toString());
            return
        }
        setSecondValue(secondValue + value.toString());
        setdisplay(secondValue + value.toString());
        return
    }


    const handleOperator = (operator) => {
        if (!firstValue) {
            return
        }
        setoperator(operator);


    }
    const evaluate = () => {

        if (operator === '+') {
            setdisplay(Number(firstValue) + Number(secondValue));
            setoperator(null);
            setSecondValue('');
            setfirstValue((Number(firstValue) + Number(secondValue)).toString());
        }
        if (operator === '*') {
            setdisplay(Number(firstValue) * Number(secondValue));
            setoperator(null);
            setSecondValue('');
            setfirstValue((Number(firstValue) + Number(secondValue)).toString());
        }
        if (operator === '-') {
            setdisplay(Number(firstValue) - Number(secondValue));
            setoperator(null);
            setSecondValue('');
            setfirstValue((Number(firstValue) + Number(secondValue)).toString());;
        }
        if (operator === '/') {
            setdisplay(Number(firstValue) / Number(secondValue));
            setoperator(null);
            setSecondValue('');
            setfirstValue((Number(firstValue) + Number(secondValue)).toString());
        }
    }

    const clear = () => {
        setdisplay('');
        setfirstValue('');
        setSecondValue('');
        setoperator(null);
    }



    return <>








        <table className="tab">

            <tr className="tr">
                < td className="td"> <input type='button' value="clear" className="inp" onClick={clear} /></td>
                <td colSpan='3'><input type="text" className="src" value={display} /></td>

            </tr >
            <tr className="tr">
                <td className="td">   <input type="button" value="+" className="inp" onClick={() => handleOperator('+')} /></td>
                <td className="td"><input type="button" value="1" className="inp" onClick={() => handleClick(1)} /></td>
                <td className="td"><input type="button" value="2" className="inp" onClick={() => handleClick(2)} /></td>
                <td className="td"><input type="button" value="3" className="inp" onClick={() => handleClick(3)} /></td>
            </tr>
            <tr className="tr">
                <td className="td"><input type="button" value="-" className="inp" onClick={() => handleOperator('-')} /></td>
                <td className="td"><input type="button" value="4" className="inp" onClick={() => handleClick(4)} /></td>
                <td className="td"><input type="button" value="5" className="inp" onClick={() => handleClick(5)} /></td>
                <td className="td"><input type="button" value="6" className="inp" onClick={() => handleClick(6)} /></td>
            </tr>
            <tr className="tr">
                <td className="td"><input type="button" value="*" className="inp" onClick={() => handleOperator('*')} /></td>
                <td className="td"><input type="button" value="7" className="inp" onClick={() => handleClick(7)} /></td>
                <td className="td"><input type="button" value="8" className="inp" onClick={() => handleClick(8)} /></td>
                <td className="td"><input type="button" value="9" className="inp" onClick={() => handleClick(9)} /></td>
            </tr>
            <tr className="tr">
                <td className="td"><input type="button" value="/" className="inp" onClick={() => handleOperator('/')} /></td>
                <td className="td"><input type="button" value="." className="inp" onClick={() => handleClick('.')} /></td>
                <td className="td"><input type="button" value="0" className="inp" onClick={() => handleClick(0)} /></td>
                <td className="td"><input type="button" value="=" className="inp" onClick={evaluate} /></td>
            </tr>




        </table>





















    </>
}
export default Test;