import a1 from "../../assets/images/a1.png";
import a2 from "../../assets/images/a2.png";
import a3 from "../../assets/images/a3.png";
import abstract from "../../assets/images/abstract-three.png";
import Button from "../Button";
import SectionHeader from "../SectionHeader";

const Articles = () => {
	const articles = [
		{
			title: "Top 10 Mindblowing Architecture Buildings In The World",
			image: a1,
			date: "Feb 1, 2022",
			category: "Buildings",
		},
		{
			title: "Amazing Technologies That Helped To Create Creative Works",
			image: a2,
			date: "Feb 2, 2022",
			category: "Construction",
		},
		{
			title: "Top 100 Best Construction Companies Around The World",
			image: a3,
			date: "Feb 3, 2022",
			category: "Company",
		},
	];
	return (
		<div className="w-full flex flex-col items-center justify-center gap-6 lg:mt-44 mt-20 lg:px-80 px-5 relative">
			<SectionHeader
				title="News articles"
				description="Read some latest news articles"
			/>
			<img
				src={abstract}
				alt="abstract"
				className="absolute top-[-85px] right-0 z-[-1]"
			/>
			<div className="w-full flex lg:flex-row flex-col items-center justify-between gap-6">
				{articles.map((article) => (
					<div
						key={article.title}
						className="flex flex-col gap-4 cursor-pointer"
					>
						<img
							src={article.image}
							alt={article.title}
						/>
						<div className="flex flex-col">
							<span className="font-medium font-Urbanist text-articlesDesc">
								{article.date} / {article.category}
							</span>
							<span className="text-secondary font-Fira font-medium text-[22px] max-w-[500px]">
								{article.title}
							</span>
						</div>
					</div>
				))}
			</div>
			<div className="w-full flex items-center justify-center mt-8">
				<Button>All Articles</Button>
			</div>
		</div>
	);
};

export default Articles;
