import React from 'react';

import {
  Container,
  Column,
  Row,
} from '../index'

const styles= {
  textAlign: 'center'
}

export default () => {
    return (
      <Container>
        <h2
          className='u-full-width'
          style={styles}
          >
          The Grid
        </h2>

        <Row>
          <Column>

          </Column>
        </Row>

        <Row>
          
        </Row>
      </Container>
    )
}
