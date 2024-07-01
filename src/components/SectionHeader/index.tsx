interface SectionHeaderProps {
	title: string;
	description: string;
}
const SectionHeader = ({ title, description }: SectionHeaderProps) => {
	return (
		<div className="flex flex-col gap-3 self-start">
			<div className="flex items-center gap-2">
				<span className="w-[24px] h-[2px] bg-primary"></span>
				<span className="font-Fira text-lg text-lightText uppercase">{title}</span>
			</div>
			<span className="font-Fira text-5xl text-secondary max-w-[450px] font-bold">
				{description}
			</span>
		</div>
	);
};

export default SectionHeader;
