import luxuryCar from "../../images/icon-luxury.svg";
import styled from "styled-components";

const PrevCard = () => {
	return (
		<Container>
			<Article>
				<Img src={luxuryCar} alt="luxury car" />
				<Section>
					<Title>LUXURY</Title>
					<Description>
						Cruise in the best car brands without the bloated prices. Enjoy the
						enhanced comfort of a luxury rental and arrive in style.
					</Description>
				</Section>
				{/* <Section>
        <Button/>
      </Section> */}
			</Article>
		</Container>
	);
};

export default PrevCard;

const Container = styled.div`
	border-radius: 10px;
	background-color: black;
	overflow: hidden;
`;
const Article = styled.article`
	height: 400px;
	width: 250px;
	padding: 3rem;
	background-color: hsl(179, 100%, 13%);
	color: hsla(0, 0%, 100%, 0.75);
`;
const Img = styled.img``;
const Section = styled.section``;
const Title = styled.h1`
	color: hsl(0, 0%, 95%);
	font-size: 1.2rem;
`;
const Description = styled.p``;
