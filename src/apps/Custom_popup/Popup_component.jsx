// eslint-disable-next-line react/prop-types
export default function Popup_component({ header, footer, body, onClose }) {
	return (
		<div className="model">
			<div className="model-container">
				<div className="header">
					<span onClick={onClose} className="close">
						&times;
					</span>
					<h2>{header ? header : "header"}</h2>
				</div>
				<div className="body">{body ? body : "body"}</div>
				<div className="footer"><h2>{footer ? footer : "footer"}</h2></div>
			</div>
		</div>
	);
}
