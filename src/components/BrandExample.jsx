import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function BrandExample() {
    return (
        <>
            <Navbar bg="light" style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
                <Container style={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-start" }}>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="https://www.xivtech.io./logo.svg"
                            width="100"
                            height="100"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="https://www.xivtech.io./Text.svg"
                            width="120"
                            height="120"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}

export default BrandExample;
