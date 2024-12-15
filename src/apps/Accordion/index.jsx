import data from "./data";
import "./styles.css";
import { useState } from "react";

export default function Accordion() {
	const [selected, setSelected] = useState(null);
	const [multipleSelection, setMultipleSelection] = useState(false);
	const [multiple, setMultiple] = useState([]);

	const handleSelection = (id) => {
		if (multipleSelection) {
			let temp = [...multiple];
			if (temp.includes(id)) temp.splice(temp.indexOf(id), 1);
			else temp.push(id);

			console.log(temp);
			setMultiple(temp);
		} else {
			if (id === selected) setSelected(null);
			else setSelected(id);
		}
	};

  const toogleSelectionMode=()=>{
    setMultipleSelection(!multipleSelection);
    setSelected(null)
    setMultiple([])
  }

	return (
		<div className="position-wrapper">
			<div className="layout_wrapper">
				<button
					onClick={() => {toogleSelectionMode()}}
          className={multipleSelection ? "button_clicked":""}
				>
					Enable Multi-Selection
				</button>
				<div className="accordian">
					{data.map(({ id, question, answer }) => (
						<div className="item" key={id}>
							<div
								className="title"
								onClick={() => {
									handleSelection(id);
								}}
							>
								<h3 className="question">{question}</h3>
								<span>+</span>
							</div>

							{!multipleSelection
								? selected === id && <p>{answer}</p>
								: multiple.includes(id) && <p>{answer}</p>}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
