import styled from 'styled-components';

export const BookBackground = styled.div`
	display: grid;
	grid-gap: 5px;
	grid-template-columns: repeat(1, 1fr);
	grid-template-rows: 1fr;
	padding: 10px;
@media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
  @media (min-width: 1024px) {
      grid-template-columns: repeat(4, 1fr);
  }
width: 100%;
height: 100%;
background-image: url("${props => props.backgroundImage}");
background-size: cover cover;
background-position: center;
background-repeat: repeat;
`