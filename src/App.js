import "./App.css";
import axios from "axios";
import { useState } from "react";
import Contest from "./components/Contest";
import Nav from "./components/Nav";

function App() {
	const [response, setResponse] = useState([]);

	const show = () => {
		axios
			.get("https://kontests.net/api/v1/all")
			.then((res) => {
				setResponse(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
		const btn = document.getElementById("btn");
		btn.classList.add("hidden");
	};

	return (
		<div className="App">
			<div className="nav">
				<Nav />
				<button id="btn" onClick={show}>
					Show Contests
				</button>
			</div>
			<div className="comp-div">
				{/* eslint-disable-next-line */}
				{[...response].map((elem, idx) => {
					return (
						<Contest
							key={idx}
							name={elem.name}
							startTime={elem.start_time}
							site={elem.site}
							endTime={elem.end_time}
							duration={elem.duration}
							in24hours={elem.in_24_hours}
							status={elem.status}
							url={elem.url}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default App;
