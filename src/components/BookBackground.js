import styled from 'styled-components';

export const BookBackground = styled.div`
width: 100%;
height: 100vh;
background-image: url("${props => props.backgroundImage}");
background-size: cover;
background-position: center;
`