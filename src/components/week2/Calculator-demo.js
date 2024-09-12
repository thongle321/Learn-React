import { useState } from "react";
export default function Calculatordemo() {
    const [number1, setNumber1] = useState('')
    const [number2, setNumber2] = useState('')
    const [result, setResult] = useState('')
    const [valid, setValid] = useState(false)
    const [valid2, setValid2] = useState(false)
    const isNumber = (s) => {
        return !isNaN(parseFloat(s))
    }
    const Calculate = (operator) => {
        let num1 = parseFloat(number1)
        let num2 = parseFloat(number2)
        switch (operator) {
            case '+':
                setResult(num1 + num2)
                break
            case '-':
                setResult(num1 - num2)
                break
            case '*':
                setResult(num1 * num2)
                break
            case '/':
                if (num2 == 0) {
                    alert("Can't divide by 0")
                }
                else {
                    setResult(num1 / num2)
                    break
                }

        }
    }
    return (
        <div>
            <h1>Calculator</h1>
            num1: <input type="text" value={number1} onChange={e => {setNumber1(e.target.value); setValid(isNumber(e.target.value))} }/>
            <br />
            num2: <input type="text" value={number2} onChange={e => {setNumber2(e.target.value); setValid2(isNumber(e.target.value))} }/>
            <br />
            <button disabled={!valid || !valid2} onClick={() => Calculate("+")}>+</ button>
            <button disabled={!valid || !valid2} onClick={() => Calculate("-")}>-</ button>
            <button disabled={!valid || !valid2} onClick={() => Calculate("*")}>*</ button>
            <button disabled={!valid || !valid2} onClick={() => Calculate("/")}>/</ button>
            <p>{result}</p>
        </div>
    );
}
