import styled from "styled-components";

const index = () => {
	return (
		<>
			<Button>
				<strong>Learn More</strong>
			</Button>
		</>
	);
};

export default index;

const Button = styled.button`
	cursor: pointer;
	padding: 15px 25px;
	border: transparent 3px solid;
	border-radius: 50px;
	outline: none;
	color: inherit;
	font-family: "Lexend Deca", sans-serif;
	font-size: 15px;
	background-color: hsl(0, 0%, 95%);
	transition: all 0.2s ease-in-out;

	&:hover {
		border: hsl(0, 0%, 95%) 3px solid;
		background-color: hsl(0, 0%, 95%, 0);
		color: hsl(0, 0%, 95%);
	}
`;
