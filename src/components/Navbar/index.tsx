import {
	LogoBehance,
	LogoDiscord,
	LogoFacebook,
	LogoInstagram,
	LogoLinkedin,
	MenuOutline,
} from "react-ionicons";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
	const navItems = [
		{ title: "Home", active: true },
		{ title: "About", active: false },
		{ title: "Projects", active: false },
		{ title: "Services", active: false },
		{ title: "News", active: false },
		{ title: "Contact", active: false },
	];

	return (
		<div className="w-full lg:px-12 p-5 lg:h-24 h-20 border-b border-navBorder flex items-center justify-between">
			<img
				src={logo}
				alt="logo"
				className="cursor-pointer"
			/>
			<div className="lg:flex hidden items-center gap-8">
				{navItems.map((item) => (
					<div
						key={item.title}
						className={`${
							item.active ? "text-primary" : "text-secondary"
						} font-Urbanist font-semibold text-lg cursor-pointer`}
					>
						{item.title}
					</div>
				))}
			</div>
			<div className="lg:flex hidden items-center gap-7">
				<LogoFacebook cssClasses={"!fill-secondary !text-secondary cursor-pointer"} />
				<LogoInstagram cssClasses={"!fill-secondary !text-secondary cursor-pointer"} />
				<LogoLinkedin cssClasses={"!fill-secondary !text-secondary cursor-pointer"} />
				<LogoBehance cssClasses={"!fill-secondary !text-secondary cursor-pointer"} />
				<LogoDiscord cssClasses={"!fill-secondary !text-secondary cursor-pointer"} />
			</div>
			<div className="cursor-pointer lg:hidden block">
				<MenuOutline
					cssClasses={"!fill-secondary !text-secondary"}
					width={"32px"}
					height={"32px"}
				/>
			</div>
		</div>
	);
};

export default Navbar;
