import React from 'react';
import CodeToggle from 'react-code-toggle';

import {
  Container,
  Column,
  Row,
  Table
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
          Other
        </h2>

        <Row id='other-example'>
          <Column>
            <CodeToggle
              jsxCode={'<ClearFloat />'}
              >
              {`<ClearFloat />`}
            </CodeToggle>
          </Column>
        </Row>
      </Container>
    )
}
