import styled from 'styled-components'

export const BookSection = styled.section`
  width: 80%;
  display: grid;
  grid-gap: 20px 20px;
  position: absolute;
  top: 80vh;
  @media (min-width: 650px) {
    grid-template-columns: 50% 50%;
  }
`
export const BookCard = styled.div`
  border-radius: 15px;
  height: 300px;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.6);
  h2 {
    font-size: 20px;
  }
  p {
    font-size: 18px;
    margin: 0;
  }
  span {
    font-size: 13px;
    background-color: #b9314f;
    border-radius: 10px;
    padding: 5px;
    color: #fff;
  }
`