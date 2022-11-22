import contestImg from "./img-contest.jpg";
const Contest = (props) => {
	const secondConvertor = (num) => {
		let days = Math.floor(num / (3600 * 24));
		num -= days * 3600 * 24;
		let hrs = Math.floor(num / 3600);
		num -= hrs * 3600;
		let mnts = Math.floor(num / 60);
		num -= mnts * 60;
		return (
			days + " days, " + hrs + " Hrs, " + mnts + " Minutes, " + num + " Seconds"
		);
	};

	return (
		<div className="contest-component">
			<div>
				<h1 className="contest-name">{props.name}</h1>
				<h3 className="site-name">{props.site}</h3>
				<span className="span">
					<h4>
						Start Time : {new Date(props.startTime).toLocaleDateString()}{" "}
						{new Date(props.startTime).toLocaleTimeString()}
					</h4>
				</span>
				<span className="span">
					<h4>
						End Time : {new Date(props.endTime).toLocaleDateString()}{" "}
						{new Date(props.endTime).toLocaleTimeString()}
					</h4>
				</span>
				<br />
				<span className="span">
					<h4>Duration : {secondConvertor(props.duration)}</h4>
				</span>
				<span className="span">
					<h4>
						{props.in24hours === "Yes" ? "Starting withing 24 hours" : ""}
					</h4>
					<h4>{props.status === "CODING" ? "Running" : "Not running"}</h4>
				</span>
			</div>
			<div className="link-div">
				<img className="contest-img" alt="contest" src={contestImg}></img>
				<a target="_blank" rel="noreferrer" className="link" href={props.url}>
					Go to contest
				</a>
			</div>
		</div>
	);
};

export default Contest;
