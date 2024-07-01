import { CaretForwardOutline } from "react-ionicons";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface ButtonProps {
	whiteButton?: boolean;
	transparentButton?: boolean;
	children: any;
	className?: string;
}
const Button = ({
	whiteButton = false,
	children,
	className = "",
	transparentButton = false,
}: ButtonProps) => {
	return (
		<button
			className={`outline-none ${
				whiteButton ? "bg-white" : transparentButton ? "bg-transparent" : "bg-secondary"
			} rounded-[14px] w-fit px-5 h-[60px] flex items-center justify-center gap-2 ${className}`}
		>
			<span
				className={`${
					whiteButton || transparentButton ? "text-secondary" : "text-white"
				} font-Urbanist font-semibold text-lg`}
			>
				{children}
			</span>
			<CaretForwardOutline
				cssClasses={`${
					whiteButton || transparentButton
						? "!text-secondary !fill-secondary"
						: "!text-white !fill-white"
				}`}
			/>
		</button>
	);
};

export default Button;
