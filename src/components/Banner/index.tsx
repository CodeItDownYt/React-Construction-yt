import banner1 from "../../assets/images/banner1.png";
import comma from "../../assets/images/comma.png";

const Banner = () => {
	return (
		<div className="w-full lg:mt-44 mt-20 h-[800px] bg-black relative flex items-center justify-center gap-3 lg:px-0 px-5">
			<img
				src={banner1}
				alt="banner1"
				className="absolute top-0 left-0 w-full h-full z-[50]"
			/>
			<div className="flex items-start gap-6 lg:flex-row flex-col">
				<img
					src={comma}
					alt="comma"
					className="z-[100]"
				/>
				<div className="flex flex-col gap-8">
					<span className="text-white max-w-[1200px] font-Urbanist text-[45px] font-semibold z-[100]">
						At the core of our practice is the idea that cities are the incubators of our
						greatest achievements, and the best hope for a sustainable future.
					</span>
					<span className="text-white font-Fira text-lg font-medium z-[100]">
						John Geoffrey | Hexagon Builders inc., USA
					</span>
				</div>
			</div>
		</div>
	);
};

export default Banner;
