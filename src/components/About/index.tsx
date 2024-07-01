import aboutImage from "../../assets/images/aboutImage.png";
import aboutVideo from "../../assets/images/aboutVideo.png";
import abstractTwo from "../../assets/images/abstract-two.svg";
import Button from "../Button";
import SectionHeader from "../SectionHeader";

const About = () => {
	return (
		<div className="w-full flex flex-col items-center justify-center gap-16 lg:mt-44 mt-20 lg:px-80 p-5 relative">
			<SectionHeader
				title="about us"
				description="Recognize more about our company"
			/>
			<div className="flex lg:flex-row flex-col items-start gap-12">
				<img
					src={aboutImage}
					alt="aboutImage"
				/>
				<div className="flex flex-col">
					<img
						src={aboutVideo}
						alt="aboutVideo"
					/>
					<span className="font-Urbanist font-medium text-xl text-secondary mt-12">
						Enim leo leo non in viverra adipiscing nisi sed dictum nisi blandit.
					</span>
					<span className="font-Urbanist text-lg text-disabled mt-3">
						Gravida feugiat viverra porttitor semper in faucibus ut. Ipsum, vel aliquet purus
						urna placerat convallis felis. Pretium curabitur fames est.
					</span>
					<Button className="mt-10">About us</Button>
				</div>
			</div>
			<img
				src={abstractTwo}
				alt="abstractTwo"
				className="absolute top-0 left-0 z-[-1] lg:block hidden"
			/>
		</div>
	);
};

export default About;
