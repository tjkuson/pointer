import type React from "react";

interface BracketDescriptionProps {
	description: string;
}

const BracketDescription: React.FC<BracketDescriptionProps> = ({
	description,
}) => {
	const renderDescription = (description: string) => {
		const items = description
			.split("\n")
			.map((item) => item.trim())
			.filter(Boolean);

		return (
			<ul>
				{items.map((point) => (
					<li key={point}>{point}</li>
				))}
			</ul>
		);
	};

	return <>{renderDescription(description)}</>;
};

export default BracketDescription;
