import Button from "../Button";
import styled from "styled-components";

const PrevCardItem = ({ mainColor, image, title, desc }) => {
	return (
		<Article mainColor={mainColor}>
			<Img src={image} alt="luxury car" />
			<TextSection>
				<Title>{title}</Title>
				<Description>{desc}</Description>
			</TextSection>
			<BtnSection mainColor={mainColor}>
				<Button />
			</BtnSection>
		</Article>
	);
};

export default PrevCardItem;

const Article = styled.article`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	height: 430px;
	width: 300px;
	padding: 2rem;
	background-color: ${({ mainColor }) => mainColor};
	color: hsla(0, 0%, 100%, 0.75);
	line-height: 1.4;

	@media screen and (min-width: 1280px) {
		width: 275px;
	}
`;
const Img = styled.img`
	width: 30%;
`;
const TextSection = styled.section`
	font-family: "Lexend Deca", sans-serif;
`;
const BtnSection = styled.section`
	margin-top: 30px;
	color: ${({ mainColor }) => mainColor};

	@media screen and (min-width: 1280px) {
		margin-top: 75px;
	}
`;
const Title = styled.h1`
	color: hsl(0, 0%, 95%);
	text-transform: uppercase;
	font-size: 2rem;
	font-family: "Big Shoulders Display", cursive;
	letter-spacing: 1.5px;
	margin-top: 30px;
	margin-bottom: 20px;
`;
const Description = styled.p`
	font-size: 15px;
	font-family: "Lexend Deca", sans-serif;
`;
