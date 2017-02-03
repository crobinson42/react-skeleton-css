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
          Table
        </h2>

        <Row id='table-example'>
          <Column>
            <CodeToggle>
              <Table>
                <thead>
                  <tr>
                    <td>Name</td>
                    <td>Rank</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Cory</td>
                    <td>SSG</td>
                  </tr>
                  <tr>
                    <td>John</td>
                    <td>CPL</td>
                  </tr>
                </tbody>
              </Table>
            </CodeToggle>
          </Column>
        </Row>


        <Row>
          <Column>
            <Table>
              <thead>
                <tr>
                  <td>Prop</td>
                  <td>Type</td>
                  <td>Default</td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>[all props]</td>
                  <td></td>
                  <td></td>
                  <td>All props are spread on the {`<table>`}</td>
                </tr>
              </tbody>
            </Table>
          </Column>
        </Row>
      </Container>
    )
}
