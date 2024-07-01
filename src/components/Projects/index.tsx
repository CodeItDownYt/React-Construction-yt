import { useState } from "react";
import p1 from "../../assets/images/p1.png";
import p2 from "../../assets/images/p2.png";
import p3 from "../../assets/images/p3.png";
import SectionHeader from "../SectionHeader";
import Button from "../Button";

const Projects = () => {
	const [categories, setCategories] = useState([
		{ title: "All", active: true },
		{ title: "Buildings", active: false },
		{ title: "Interior & Exterior", active: false },
		{ title: "Renovate", active: false },
		{ title: "Industry", active: false },
		{ title: "Road", active: false },
	]);

	const projects = [
		{ title: "Jaguare garment industry", image: p1 },
		{ title: "Outbox creatives building", image: p2 },
		{ title: "Slova private residence", image: p3 },
	];

	const handleClick = (title: string) => {
		setCategories((prev) =>
			prev.map((item) =>
				item.title === title ? { ...item, active: true } : { ...item, active: false }
			)
		);
	};
	return (
		<div className="w-full flex flex-col items-center justify-center gap-6 lg:mt-44 mt-20 lg:px-80 p-5">
			<SectionHeader
				title="latest projects"
				description="Explore our works"
			/>
			<div className="w-full flex items-center justify-between">
				<div className="flex items-center gap-11 overflow-x-auto lg:pb-0 pb-3">
					{categories.map((item) => (
						<div
							key={item.title}
							onClick={() => handleClick(item.title)}
							className={`${
								item.active ? "text-primary" : "text-disabled"
							} text-lg font-Urbanist font-medium cursor-pointer whitespace-nowrap`}
						>
							{item.title}
						</div>
					))}
				</div>
				<Button
					transparentButton
					className="lg:flex hidden"
				>
					View All Projects
				</Button>
			</div>
			<div className="w-full flex lg:flex-row flex-col items-center justify-between gap-6">
				{projects.map((project) => (
					<div className="flex flex-col gap-2 cursor-pointer">
						<img
							src={project.image}
							alt={project.title}
						/>
						<span className="text-secondary font-Fira font-medium text-[22px]">
							{project.title}
						</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;
