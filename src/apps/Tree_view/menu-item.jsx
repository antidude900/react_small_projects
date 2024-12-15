/* eslint-disable react/prop-types */

import { useState } from "react";
import MenuList from "./menu-list";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function MenuItem({ item }) {
	const [showChildren, setShowChildren] = useState(false);
	return (
		<li className="menu-item-container">
		
				<p>
					{item.label}
					{item.children ? (
						!showChildren ? (
							<FaPlus
								onClick={() => {
									setShowChildren(true);
								}}
								className="icon"
							/>
						) : (
							<FaMinus
								onClick={() => {
									setShowChildren(false);
								}}
								className="icon"
							/>
						)
					) : null}
				</p>

				{item.children && showChildren ? (
					<MenuList list={item.children} />
				) : null}
		
		</li>
	);
}
