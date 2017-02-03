import React from 'react';
import CodeToggle from 'react-code-toggle';

import {
  Container,
  Column,
  Row,
  Table,
  Input,
  Select,
  Textarea
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
          Form Inputs
        </h2>

        <Row id='form-example'>
          <Column>
            <CodeToggle
              jsxCode={`
                <Input
                  label='Input'
                  onChange={(event) => { /* this.setState(event.target.value) */}}
                  placeholder='Placeholder...'
                  />

                <Select
                  label='Select'
                  onChange={(event) => { /* this.setState(event.target.value) */}}
                  options={[{value:1, text:'Option 1'}, {value:2, text:'Option 2'}]}
                  />

                <Textarea
                  label='Textarea'
                  onChange={(event) => { /* this.setState(event.target.value) */}}
                  placeholder='Placeholder...'
                  />
                `}

              >
              <Row>
                <Column size={6}>
                  <Input
                    label='Input'
                    onChange={(event) => { /* this.setState(event.target.value) */}}
                    value={''}
                    placeholder='Placeholder...'
                    />
                </Column>

                <Column size={6}>
                  <Select
                    label='Select'
                    onChange={(event) => { /* this.setState(event.target.value) */}}
                    value={''}
                    options={[{value:1, text:'Option 1'}, {value:2, text:'Option 2'}]}
                    />
                </Column>

                <Column size={8} offset={2}>
                  <Textarea
                    label='Textarea'
                    onChange={(event) => { /* this.setState(event.target.value) */}}
                    value={''}
                    placeholder='Placeholder...'
                    />
                </Column>
              </Row>
            </CodeToggle>
          </Column>
        </Row>

        <h5>{`<Input>`}</h5>
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
                  <td>label</td>
                  <td>String</td>
                  <td></td>
                  <td>Adds a label element</td>
                </tr>
                <tr>
                  <td>pull</td>
                  <td>['left', 'right']</td>
                  <td></td>
                  <td>Add class to pull element - remember to add {`<ClearFloat />`} after</td>
                </tr>
                <tr>
                  <td>placeholder</td>
                  <td>String</td>
                  <td></td>
                  <td>Adds an input placeholder</td>
                </tr>
                <tr>
                  <td>onChange</td>
                  <td>Function</td>
                  <td>required</td>
                  <td>Input onChange event handler - see controlled components usage</td>
                </tr>
                <tr>
                  <td>value</td>
                  <td>String</td>
                  <td></td>
                  <td>Input value</td>
                </tr>
              </tbody>
            </Table>
          </Column>
        </Row>


        <h5>{`<Select>`}</h5>
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
                  <td>label</td>
                  <td>String</td>
                  <td></td>
                  <td>Adds a label element</td>
                </tr>
                <tr>
                  <td>pull</td>
                  <td>['left', 'right']</td>
                  <td></td>
                  <td>Add class to pull element - remember to add {`<ClearFloat />`} after</td>
                </tr>
                <tr>
                  <td>onChange</td>
                  <td>Function</td>
                  <td>required</td>
                  <td>Select value onChange event handler - see controlled components usage</td>
                </tr>
                <tr>
                  <td>value</td>
                  <td>String</td>
                  <td></td>
                  <td>Selected value</td>
                </tr>
                <tr>
                  <td>options</td>
                  <td>Array[Object, Object]</td>
                  <td></td>
                  <td>The options - object structure: {`{value: 0, text: 'Option Text'}`}</td>
                </tr>
              </tbody>
            </Table>
          </Column>
        </Row>

        <h5>{`<Textarea>`}</h5>
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
                  <td>label</td>
                  <td>String</td>
                  <td></td>
                  <td>Adds a label element</td>
                </tr>
                <tr>
                  <td>pull</td>
                  <td>['left', 'right']</td>
                  <td></td>
                  <td>Add class to pull element - remember to add {`<ClearFloat />`} after</td>
                </tr>
                <tr>
                  <td>onChange</td>
                  <td>Function</td>
                  <td>required</td>
                  <td>Textarea value onChange event handler - see controlled components usage</td>
                </tr>
                <tr>
                  <td>value</td>
                  <td>String</td>
                  <td></td>
                  <td>Textarea value</td>
                </tr>
              </tbody>
            </Table>
          </Column>
        </Row>


      </Container>
    )
}
