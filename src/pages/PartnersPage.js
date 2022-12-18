import SubHeader from "../components/SubHeader";
import { Container, Row, Col } from "reactstrap";
import PartnersList from "../features/partners/PartnersList";

const PartnersPage = () => {
    return (
        <Container>
            <SubHeader current="Technology Partners" />
            <Row className="row-content">
                <Col xs="12">
                    <h3>Technology Partnerships</h3>
                </Col>
                <PartnersList />
            </Row>
        </Container>
    );
}

export default PartnersPage;