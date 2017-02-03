import React from 'react';
import CodeToggle from 'react-code-toggle';

import {
  Container,
  Column,
  Row,
  Table,
  Button,
  Link
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
          Button & Link
        </h2>

        <Row id='button-example'>
          <Column>
            <CodeToggle
              jsxCode={`
              <Button primary={true}>
                Button
              </Button>

              <Button>
                Button
              </Button>

              <Link primary={true}>
                Link
              </Link>

              <br/>

              <Link>
                Link
              </Link>`}

              >
              <Row>
                <Column size={6}>
                  <Button primary={true}>
                    Button
                  </Button>

                  <br/>

                  <Button>
                    Button
                  </Button>

                </Column>

                <Column size={6}>
                  <Link primary={true}>
                    Link
                  </Link>

                  <br/>

                  <Link>
                    Link
                  </Link>

                </Column>
              </Row>
            </CodeToggle>
          </Column>
        </Row>

        <h5>{`<Button>`}</h5>
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
                  <td>primary</td>
                  <td>Number</td>
                  <td>false</td>
                  <td>Adds the button-primary class to element</td>
                </tr>
                <tr>
                  <td>pull</td>
                  <td>['left', 'right']</td>
                  <td></td>
                  <td>Add class to pull element - remember to add {`<ClearFloat />`} after</td>
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

        <h5>{`<Link>`}</h5>
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
                  <td>primary</td>
                  <td>Number</td>
                  <td>false</td>
                  <td>Adds the button-primary class to element</td>
                </tr>
                <tr>
                  <td>href</td>
                  <td>String</td>
                  <td>#</td>
                  <td>href for element click</td>
                </tr>
                <tr>
                  <td>pull</td>
                  <td>['left', 'right']</td>
                  <td></td>
                  <td>Add class to pull element - remember to add {`<ClearFloat />`} after</td>
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
