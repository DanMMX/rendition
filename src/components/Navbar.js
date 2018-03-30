import * as React from 'react'
const MenuIcon = require('react-icons/lib/md/dehaze')
const CloseIcon = require('react-icons/lib/md/close')
import styled, { withTheme } from 'styled-components'
import { responsiveStyle } from 'styled-system'
import { Flex, Box } from './Grid'
import Container from './Container'

const display = responsiveStyle('display', 'display')
const maxHeight = responsiveStyle('max-height', 'maxHeight')

const BrandBox = styled(Box)`
  display: flex;
  height: auto;
  min-width: 150px;
  align-self: center;
`

const IconBox = styled(Box)`
  ${display} align-self: center;
  cursor: pointer;
`

const MenuBox = styled(Flex)`
  ${display} ${maxHeight};
  text-align: center;
  transition: max-height 0.4s ease-in-out;
  align-self: center;
  overflow: hidden;

  a {
    width: 100%;
    display: inline-block;
  }
`

class Navbar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
  }

  toggle () {
    this.setState({
      open: !this.state.open
    })
  }

  render () {
    const { children, brand, ...props } = this.props
    return (
      <Box {...props}>
        <Container>
          <Flex direction={['column', 'row']}>
            <Flex>
              <BrandBox p={2}>{brand}</BrandBox>
              <IconBox
                onClick={() => this.toggle()}
                ml={['auto', 0]}
                p={2}
                display={['block', 'none']}
              >
                {this.state.open ? <CloseIcon /> : <MenuIcon />}
              </IconBox>
            </Flex>
            <MenuBox
              maxHeight={[this.state.open ? '100vh' : '0vh', 'none']}
              width={['100%', 'auto']}
              ml={[0, 'auto']}
            >
              <Flex width={['100%', 'auto']} direction={['column', 'row']}>
                {children.map((child, i) => {
                  return (
                    <Box
                      onClick={() => this.toggle()}
                      width={['100%', 'auto']}
                      p={2}
                      key={i}
                    >
                      {child}
                    </Box>
                  )
                })}
              </Flex>
            </MenuBox>
          </Flex>
        </Container>
      </Box>
    )
  }
}

Navbar.defaultProps = {
  color: 'white',
  bg: 'gray.dark'
}

export default withTheme(Navbar)
