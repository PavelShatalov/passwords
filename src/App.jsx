import { useState } from "react";

const App = () => {
	const [password, setPassword] = useState("");
	const [passwordLength, setPasswordLength] = useState(12);
	const [useSymbols, setUseSymbols] = useState(true);
	const [useNumbers, setUseNumbers] = useState(true);
	const [useLowerCase, setUseLowerCase] = useState(true);
	const [useUpperCase, setUseUpperCase] = useState(true);
	const [successMessage, setSuccessMessage] = useState("");

	function generatePassword() {
		let newPassword = "";
		let charset = "";
		if (useSymbols) charset += "!@#$%^&*()";
		if (useNumbers) charset += "0123456789";
		if (useLowerCase) charset += "abcdefghijklmnopqrstuvwxyz";
		if (useUpperCase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		for (let i = 0; i < passwordLength; i++) {
			newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
		}
		setPassword(newPassword);
	}

	function copyPassword() {
		navigator.clipboard
			.writeText(password)
			.then(() => {
				setSuccessMessage("password is copied");
			})
			.catch((error) => {
				console.error(`password don't copied ${error}`);
				setSuccessMessage("");
			});
	}

	return (
		<div>
			<form>
				<input type="text" value={password} readOnly />
				<input type="button" value="copy" onClick={copyPassword} />
			</form>

			<form>
				<label htmlFor="Lenght"> </label>
				<input
					type="number"
					name="Lenght"
					id=""
					value={passwordLength}
					onChange={(e) => {
						setPasswordLength(Number(e.target.value));
						// console.log(passwordLength);
					}}
				/>
				<label htmlFor="Uppercase">Uppercase</label>
				<input
					type="checkbox"
					checked
					name="Uppercase"
					id=""
					onChange={() => {
						setUseUpperCase(!useUpperCase);
						// console.log(passwordLength);
					}}
					value={useUpperCase}
				/>
				<label htmlFor="Lowercase">Lowercase</label>
				<input
					type="checkbox"
					checked
					name="Lowercase"
					id=""
					onChange={() => {
						setUseLowerCase(!useLowerCase);
						// console.log(passwordLength);
					}}
					value={useLowerCase}
				/>
				<label htmlFor="Numbers">Numbers</label>
				<input
					type="checkbox"
					checked
					name="Numbers"
					id=""
					onChange={() => {
						setUseNumbers(!useNumbers);
					}}
					value={useNumbers}
				/>
				<label htmlFor="Symbols">Symbols</label>
				<input
					type="checkbox"
					checked
					name="Symbols"
					id=""
					onChange={() => {
						setUseSymbols(!useSymbols);
					}}
					value={useSymbols}
				/>
				<input type="button" value="generate" onClick={generatePassword} />
			</form>
			{successMessage && (
				<>
					<p>{successMessage}</p>
				</>
			)}
		</div>
	);
};

export default App;
