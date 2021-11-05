import React from "react";

const Card = ({ item, time }) => {
	return (
		<div className={"card-box "+item["title"].toString().toLowerCase().replace(/ /g, "")}>
            <div className="card-props">
                <div className="row">
					<div className="title">{item["title"]}</div>
					<div className="points">
                        <div className="point"></div>
                        <div className="point"></div>
                        <div className="point"></div>
                    </div>
					</div>
                <div className="row2">
                   <div className="hours">{item["timeframes"][time]["current"]}hrs</div>
                   <div className="description">{time==="daily"? "Last Day":""}{time==="monthly"? "Last Month":""}{time==="weekly"? "Last Week":""} - {item["timeframes"][time]["previous"]}hrs</div> 
                </div>
            </div>
		</div>
	);
};

export default Card;
