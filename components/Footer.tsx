import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled.div`
  background: #f4f4f6;
  min-height: 11rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${tw`md:px-24 py-4 px-4 flex-col md:flex-row`}
`

const Footer = () => {
  return (
    <Container>
      <div>LEFT</div>
      <div>CENTER</div>
      <div>RIGHT</div>
    </Container>
  )
}

export default Footer
