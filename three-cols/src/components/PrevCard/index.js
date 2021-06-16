import sedan from "../../images/icon-sedans.svg";
import suvs from "../../images/icon-suvs.svg";
import luxury from "../../images/icon-luxury.svg";
import PrevCardItem from "../PrevCardItem";
import styled from "styled-components";

const PrevCard = () => {
	return (
		<Container>
			<PrevCardItem
				mainColor={"hsl(31, 77%, 52%)"}
				image={sedan}
				title="sedans"
				desc="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
			/>
			<PrevCardItem
				mainColor={"hsl(184, 100%, 22%)"}
				image={suvs}
				title="suvs"
				desc="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
			/>
			<PrevCardItem
				mainColor={"hsl(179, 100%, 13%)"}
				image={luxury}
				title="luxury"
				desc="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
			/>
		</Container>
	);
};

export default PrevCard;

const Container = styled.article`
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	overflow: hidden;

	@media screen and (min-width: 1280px) {
		flex-direction: row;
	}
`;
