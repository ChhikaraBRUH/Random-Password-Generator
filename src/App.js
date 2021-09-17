import React, { useState } from "react";
import "./styles.css";

export default function App() {
	const [finalPass, setFinalPass] = useState("");
	var [finalPassLen, setFinalPassLen] = useState(12);

	const abcLower = "abcdefghijklmnopqrstuvwxyz";
	const abcUpper = abcLower.toUpperCase();
	const numbers = "1234567890";
	const syms = "!#$%&()*+,-.<=>?@^/";

	const allVal = abcLower + abcUpper + numbers + syms;
	const allValArr = allVal.split("");
	const allValLen = allVal.length;

	function getRandomInt(max) {
		return Math.floor(Math.random() * max);
	}

	function passGenerator() {
		var tempPass = "";
		if (finalPassLen === "") {
			finalPassLen = 12;
		}
		if (finalPassLen > 5 && finalPassLen < 129) {
			for (let i = 0; i < finalPassLen; i++) {
				var randomNum = getRandomInt(allValLen);
				tempPass = tempPass + allValArr[randomNum];
				setFinalPass(tempPass);
			}
		} else {
			alert(
				"Please select the password length between 6 & 128 characters."
			);
		}
	}

	return (
		<div className="App">
			<h1 className="heading">Strong Random Password Generator</h1>
			<hr />
			<h3 className="description">
				Hit the Generate Now button to instantly create a new random
				strong password or enter the number of digits characters you
				want.
			</h3>
			<div className="charNumSelectorArea">
				<label htmlFor="charNumSelectorInput">
					Number of characters you want in your password:{" "}
				</label>
				<input
					id="charNumSelectorInput"
					type="number"
					min="6"
					max="128"
					placeholder="Default: 12"
					onChange={(e) => setFinalPassLen(e.target.value)}
				/>
			</div>
			<button className="btn generateBtn" onClick={passGenerator}>
				Generate Now!
			</button>

			<div className="finalPass">
				<h3 style={{ margin: "1rem" }}>{finalPass}</h3>
				<button
					className="btn copyBtn"
					onClick={() => {
						if (finalPass === "") {
							alert("Click on Generate Now button first!");
						} else {
							navigator.clipboard.writeText(finalPass);
							alert("Your password is copied to your clipboard!");
						}
					}}
				>
					Copy to Clipboard
				</button>
			</div>
			<hr />
			<div>
				Made with{"  "}
				<span role="img" aria-label="Red Heart">
					❤️{" "}
				</span>
				by <a href="https://bruh.dev">Chaitanya</a>
			</div>
			<a href="https://twitter.com/ChhikaraBRUH">
				<img
					alt="Twitter Icon"
					src="https://image.flaticon.com/icons/png/512/1384/1384017.png"
				/>
			</a>
			<a href="https://github.com/ChhikaraBRUH">
				<img
					alt="GitHub Icon"
					src="https://image.flaticon.com/icons/png/512/733/733609.png"
				/>
			</a>
			<a href="https://linkedin.com/in/ChaitanyaChhikara">
				<img
					alt="LinkedIn Icon"
					src="https://image.flaticon.com/icons/png/512/1384/1384014.png"
				/>
			</a>
		</div>
	);
}
