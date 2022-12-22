import { Container, Row, Col } from "reactstrap";
import SubHeader from "../components/SubHeader";
import SolutionsList from "../features/solutions/SolutionsList";

const SolutionsPage = () => {
    return (
        <Container>
            <SubHeader current="Solutions" />
            <Row className="row-content">
                <Col sm="6">
                    <h1>Securing your future is at the heart of everything we do.</h1>
                    <p className="blockquote">"BHolm IT Products & Solutions provide businesses with innovative tools that secure, automate, revamp and improve business processes. Our Products & Solutions are designed and built to suit different industries by an expert team with deep domain knowledge. Our team also consults with you and customises our solutions to your requirements, delivering further improvement in cost and operational efficiency.”</p>
                </Col>
            </Row>
            <Row className="row-content">
                <Col xs="12">
                    <h3>Technology Solutions</h3>
                </Col>
                <SolutionsList />
            </Row>
        </Container>
    );
}

export default SolutionsPage;