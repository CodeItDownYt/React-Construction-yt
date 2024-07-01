import banner2 from "../../assets/images/banner2.png";
import Button from "../Button";

const ActionBanner = () => {
	return (
		<div className="w-full lg:mt-44 mt-20 h-[600px] bg-black relative flex items-center justify-center gap-3">
			<img
				src={banner2}
				alt="banner"
				className="absolute top-0 left-0 w-full h-full z-[50]"
			/>
			<div className="flex flex-col items-center justify-center gap-5 lg:px-0 px-8">
				<span className="text-white text-center font-Fira font-bold text-[70px] z-[100] max-w-[800px]">
					Are You Ready To Start Your Next Project?
				</span>
				<Button
					whiteButton
					className="z-[100]"
				>
					Get In Touch
				</Button>
			</div>
		</div>
	);
};

export default ActionBanner;
