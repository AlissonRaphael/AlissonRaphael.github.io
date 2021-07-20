import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Frame = styled(motion.div)`

  height: calc(450vw/16);
  width: calc(760vw/9);

  display: grid;
  grid-template-areas: 'mobH frontH backH devopH manH'
                       'mobB frontB backB devopB manB';
  grid-template-rows: 7% 93%;

  .header {
    font-size: 1.2vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .header#mobile {
    grid-area: mobH;

  }

  .header#front {
    grid-area: frontH;

  }

  .header#back {
    grid-area: backH;

  }

  .header#devop {
    grid-area: devopH;

  }

  .header#others {
    grid-area: manH;
  }

  .body {
    display: flex;
    align-content: flex-start;
    justify-content: center;
    flex-wrap: wrap;
  }

  .body#mobile {
    grid-area: mobB;
    justify-content: flex-end;
  }

  .body#front {
    grid-area: frontB;
    justify-content: flex-end;
  }

  .body#back {
    grid-area: backB;

  }

  .body#devop {
    grid-area: devopB;
    justify-content: flex-start;
  }

  .body#others {
    grid-area: manB;
    justify-content: flex-start;
  }
`

export const TComponent = styled(motion.div)`
  position: fixed;
  top: 35vw;
  left: 14vw;
  height: 8vw;
  width: 8vw;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;



  #gen, #esp {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8vw;
    color: rgb(90,90,90);
    border: 1px solid rgb(50,50,50);
    background-color: #2b2b2b;
  }

  #gen {
    height: 2vw;
    width: 8vw;
  }

  #esp {
    height: 6vw;
    width: 2vw;
    writing-mode: vertical-rl;
  }
`

export const TLegend = styled(motion.div)`
  position: fixed;
  top: 40vw;
  left: 20vw;
  font-size: 0.8vw;
`
