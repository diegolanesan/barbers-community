import React from "react";
import { Link } from "react-router-dom";
export default function Barber({ barbersPerPage }) {
	return (
		<div className="grid sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 font-lato lg:grid-cols-4">
			{barbersPerPage &&
				barbersPerPage.map((n) => (
					<div
						key={n.id}
						className="text-center m-8 border-2 border-secondary rounded-xl pb-1 shadow-md"
					>
						<Link to={`Detail/${n.id}`}>
							<img
								className="rounded-lg h-48 w-full"
								src={n.image}
								alt=""
								width="200px"
								height="200px"
							/>
							<h4 className="font-bold">{`${n.name} ${n.lastname}`}</h4>
							<h4 className="font-bold">{`(${n.city}, ${n.state})`}</h4>
						</Link>
					</div>
				))}
		</div>
	);
}
