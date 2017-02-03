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
          The Grid
        </h2>

        <Row id='grid-example'>
          <Column>
            <CodeToggle>
              <Container>
                <Row>
                  <Column size={11} offset={1}>11 column with offset of 1</Column>
                </Row>

                <Row>
                  <Column size={10} offset={2}>10</Column>
                </Row>

                <Row>
                  <Column size={9} offset={3}>9</Column>
                </Row>

                <Row>
                  <Column size={8} offset={4}>8</Column>
                </Row>

                <Row>
                  <Column size={7} offset={5}>7</Column>
                </Row>

                <Row>
                  <Column size={6} offset={6}>6</Column>
                </Row>

                <Row>
                  <Column size={5} offset={7}>6</Column>
                </Row>

                <Row>
                  <Column size={4} offset={8}>4</Column>
                </Row>

                <Row>
                  <Column size={3} offset={9}>3</Column>
                </Row>

                <Row>
                  <Column size={2} offset={10}>2</Column>
                </Row>

                <Row>
                  <Column size={1} offset={11}>1</Column>
                </Row>

                <Row>

                </Row>
              </Container>
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
                  <td>size</td>
                  <td>Number</td>
                  <td>12</td>
                  <td>Width of columns for element</td>
                </tr>
                <tr>
                  <td>offset</td>
                  <td>Number</td>
                  <td>0</td>
                  <td>The offset columns to the left of the element</td>
                </tr>
                <tr>
                  <td>[all other]</td>
                  <td></td>
                  <td></td>
                  <td>All other props are spread on the {`<div>`}</td>
                </tr>
              </tbody>
            </Table>
          </Column>
        </Row>
      </Container>
    )
}
