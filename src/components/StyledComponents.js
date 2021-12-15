import styled from 'styled-components'

export const BookSection = styled.section`
	display: grid;
	grid-gap: 5px;
	grid-template-columns: repeat(1, 1fr);
	grid-template-rows: 1fr;
	padding: 10px;
  & img {
    width: 100%;
}
@media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
  /* desktop */
  @media (min-width: 1024px) {
      grid-template-columns: repeat(4, 1fr);
  }
`;

export const BookCard = styled.p`
  border-radius: 15px;
  height: 200px;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  align-items: center;
  color:red;
  background-color: rgba(255, 255, 255, 0.6);
  font-family: 'Rubik', sans-serif;
`;