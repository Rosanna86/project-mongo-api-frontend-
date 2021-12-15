import styled from 'styled-components'

export const BookSection = styled.section`
	display: grid;
	grid-gap: 5px;
	grid-template-columns: repeat(1, 1fr);
	grid-template-rows: 1fr;
	padding: 10px;
@media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
  /* desktop */
  @media (min-width: 1024px) {
      grid-template-columns: repeat(4, 1fr);
  }
`;

export const BookCard = styled.div`
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  padding: 25px;
  align-items: center;
  color:black;
  background-color: rgba(255, 255, 255, 0.6);
  font-family: 'Rubik', sans-serif;
  & h1 {
    font-size: 20px;
}
& h2 {
    font-size: 18px;
}
& h3 {
    font-size: 16px;
}
`;
