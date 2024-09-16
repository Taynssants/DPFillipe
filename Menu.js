import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

function Menu(){
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to="/"></Nav.Link>
                    <Nav.Link as={NavLink} to="/produto">Produto</Nav.Link>
                    <Nav.Link as={NavLink} to="/criaProduto"> Criar Produto</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Menu;