import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import logo from '@assets/img/logo.png'

const Container = styled.div`
  background: #f4f4f6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${tw`md:px-24 py-4 px-4`}
  flex-direction: column;
`

const Content = styled.div`
  ${tw`flex-col md:flex-row flex`}
`

function Context(props: { style: {}, className: string }) {
    return null;
}

const Footer = () => {
  return (
    <div>
        <Container>
            <Content
                className='flex justify-center'
                style={{
                    alignItems: 'center',
                }}
            >
                <img src={logo} alt='Logo' className='w-16 h-16' />
                <div className='text-3xl'>UniqueCode</div>
            </Content>
            <div>2021 &copy; UniqueCode all rights reserved.</div>
        </Container>
    </div>
  )
}

export default Footer
