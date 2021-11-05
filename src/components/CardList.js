import React from "react";
import Card from "./Card";

import { useDashboard } from "../context/DashboardContext";

const CardList = () => {
	const { data, time } = useDashboard();

	return (
		<>
			{data.map((item, key) => (
				<Card item={item} time={time} key={key} />
			))}
		</>
	);
};

export default CardList;
