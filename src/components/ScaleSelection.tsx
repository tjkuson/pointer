import type React from "react";
import type { ScaleType } from "../types";

interface ScaleSelectionProps {
	selectedScale: ScaleType;
	onChange: (scale: ScaleType) => void;
}

const ScaleSelection: React.FC<ScaleSelectionProps> = ({
	selectedScale,
	onChange,
}) => {
	return (
		<div className="scale-selection">
			<label htmlFor="scale-select">Select scale: </label>
			<select
				id="scale-select"
				value={selectedScale}
				onChange={(e) => onChange(e.target.value as ScaleType)}
			>
				<option value="speaker">Speaker</option>
				<option value="chair">Chair</option>
				<option value="panellist">Panellist and Trainee</option>
			</select>
		</div>
	);
};

export default ScaleSelection;
