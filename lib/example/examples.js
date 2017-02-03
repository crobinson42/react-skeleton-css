import React from 'react';

import GridSection from './GridSection';
import ButtonLinkSection from './ButtonLinkSection';
import FormInputsSection from './FormInputsSection';
import TableSection from './TableSection';
import OtherSection from './OtherSection';

import {
  Button,
  Container,
  Column,
  Input,
  Link,
  Row,
  Select,
  Table,
  Textarea,
} from '../index'

class Examples extends React.Component {

  render() {
    return (
      <div>
        <Row>
          <h1 style={{textAlign: 'center'}}>REACT-SKELETON-CSS</h1>
          <Column size={6} offset={3}>
            <div>
              Library of useful React components that use the Skeleton css.
                <pre>
                  <code>
                  {`npm i -S react-skeleton-css`}
                </code>
              </pre>
            </div>

            <div>
              <strong>Skeleton CSS</strong> is a "micro" css framework: <a href="http://getskeleton.com/">http://getskeleton.com</a>
            </div>

            <br/>

            <div>
              <strong>Caveat:</strong> You must include the stylesheet in your project.
              You can do this via import if your'e using webpack css-loader.
              <pre><code>
                {`import 'react-skeleton-css/styles/skeleton.2.0.4.css'
// normalize is also available
import 'react-skeleton-css/styles/normalize.3.0.2.css';`}
              </code></pre>
            Or use a CDN
              <pre><code>
                {`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css">`}
              </code></pre>
          </div>
          </Column>
        </Row>

        <Row>
          <GridSection />
          <ButtonLinkSection />
          <FormInputsSection />
          <TableSection />
          <OtherSection />
        </Row>
      </div>
    );
  }

}

export default Examples;
