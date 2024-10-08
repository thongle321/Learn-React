import "../../tuan2_css/Calculator.css";
import { useState } from "react";
export default function Calculator() {
	const [inputValue, setInputValue] = useState("");
	const input = (value) => {
		setInputValue(inputValue + value.target.innerHTML);
	};
	const clear = () => {
		setInputValue("");
	};
	const equal = () => {
		setInputValue(eval(inputValue));
	};
	return (
		<div className="container">
			<div className="Calculator">
				<input id="display" type="text" value={inputValue} readOnly />
				<div className="keys">
					<button type="button" Click={clear} className="operator-btn-alt">
						C
					</button>
					<button type="button" onClick={input} className="operator-btn-alt">
						+/-
					</button>
					<button type="button" onClick={input} className="operator-btn-alt">
						%
					</button>
					<button type="button" onClick={input} className="operator-btn">
						/
					</button>
					<button type="button" onClick={input}>
						7
					</button>
					<button type="button" onClick={input}>
						8
					</button>
					<button type="button" onClick={input}>
						9
					</button>
					<button type="button" onClick={input} className="operator-btn">
						*
					</button>
					<button type="button" onClick={input}>
						4
					</button>
					<button type="button" onClick={input}>
						5
					</button>
					<button type="button" onClick={input}>
						6
					</button>
					<button type="button" onClick={input} className="operator-btn">
						-
					</button>
					<button type="button" onClick={input}>
						1
					</button>
					<button type="button" onClick={input}>
						2
					</button>
					<button type="button" onClick={input}>
						3
					</button>
					<button type="button" onClick={input} className="operator-btn">
						+
					</button>
					<button type="button" onClick={input}>
						0
					</button>
					<button type="button" onClick={input}>
						.
					</button>
					<button type="button" onClick={equal} className="operator-btn">
						=
					</button>
					//{" "}
					{/* <div>
//               <input type="button" value="C" />
//               <input type="button" value="%" />
//               <input type="button" value="." />
//               <input type="button" value="/" />
//           </div>
//           <div>
//               <input type="button" value="7" />
//               <input type="button" value="8" />
//               <input type="button" value="9" />
//               <input type="button" value="*" />
//           </div>
//           <div>
//               <input type="button" value="4" />
//               <input type="button" value="5" />
//               <input type="button" value="6" />
//               <input type="button" value="-" />
//           </div>
//           <div>
//               <input type="button" value="1" />
//               <input type="button" value="2" />
//               <input type="button" value="3" />
//               <input type="button" value="+" />
//           </div>
//           <div>
//               <input type="button" value="0" />
//               <input type="button" value="=" />
//           </div> */}
				</div>
			</div>
		</div>
	);
}
