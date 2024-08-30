import styled from 'styled-components'

export const Container = styled.div`
  padding: 0px 40px 20px 40px;
`

export const CategoryTitle = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  p {
    font-size: 21px;
    font-weight: 500;
  }
`

export const ProductsContainer = styled.div`
  display: flex;
  //  grid-template-columns: repeat(4, 1fr);
  justify-items: start;
  margin-top: 5px;
  grid-row-gap: 20px;
  grid-column-gap: 50px;
  flex-wrap: wrap;
`

export const IconContainer = styled.div`
  display: flex;

  &:hover {
    cursor: pointer;
  }
`
