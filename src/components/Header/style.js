import styled from 'styled-components'
import { motion } from 'framer-motion'


export const HeaderComponent = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 292;
  width: 100vw;
  padding: 32px 32px;
  display: flex;
  justify-content: flex-end;
`

export const Nav = styled(motion.nav)`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
