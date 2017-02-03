import {
  Button,
  Container,
  Column,
  Link,
  Row,
} from '../index'


export default () => {
    return (
      <Container>
        <Row>
          <Column size={6}>
            <Button>
              Click Me!
            </Button>
          </Column>

          <Column size={6}>
            <Link>
              WWW.GOOGLE.COM
            </Link>
          </Column>
        </Row>
      </Container>
    )
}
