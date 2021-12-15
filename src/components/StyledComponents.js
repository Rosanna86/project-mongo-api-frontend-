import styled from 'styled-components'

export const BookSection = styled.section`
	display: grid;
	grid-gap: 5px;
	grid-template-columns: repeat(1, 1fr);
	grid-template-rows: 1fr;
`;

export const BookCard = styled.div`
  margin: 20px;
  text-align: center;
  align-items: center;
  color:black;
  background-color: rgba(0, 0, 0, 0.5);
  font-family: 'Rubik', sans-serif;
  border-radius: 20px;
  box-shadow:0 0 8px 3px black;
  & h1 {
    padding: 0 10px 0 10px;
    font-size: 18px;
    color: white;
}
& h2 {
  padding: 0 10px 0 10px;
    font-size: 16px;
    color: white;
    font-style: italic;
}
& h3 {
    font-size: 14px;
    color: white;
}
`;
