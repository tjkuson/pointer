import type React from "react";

const Footer: React.FC = () => {
	return (
		<footer className="footer">
			<p>
				Africa, D. D., Vasic, M., Caito, M., Shreder, A., Cravaris, C. M., Su,
				D., Hadome, J., Toomey, M., Acolatse, R. S., & Khandaker, S. A. (2025).
				World Universities Debating Championships Manual.{" "}
				<a
					href="https://doi.org/10.5281/ZENODO.17279094"
					rel="noopener noreferrer"
				>
					10.5281/zenodo.17279094
				</a>
				.
			</p>
			<p>
				View the{" "}
				<a href="https://github.com/tjkuson/pointer" rel="noopener noreferrer">
					source code
				</a>
				.
			</p>
		</footer>
	);
};

export default Footer;
