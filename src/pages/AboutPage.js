import { Col, Row, Container, Card, CardBody, CardHeader } from "reactstrap";
import SubHeader from "../components/SubHeader";
import PartnersList from "../features/partners/PartnersList";

const AboutPage = () => {
    return(
        <Container>
            <SubHeader current="About Us" />
            <Row className="row-content">
                <Col sm="6">
                    <h3>Executive Summary</h3>
                    <p>BHolm IT Services is emerging as a leading IT & Security Systems Solutions Provider focused on Systems Integration.</p>
                    <p>We operate primarily within the United States of America where the technology and service industry networks are experiencing a burst of growth and revitalised development in both the urban and rural markets.</p>
                    <p>Tasked with integrating divergent technologies, training programs, professional and technology services from across the globe that produce strong, reliable and economically viable offerings for its clients.</p>
                    <p>Our professionals are located within the the United States of America and are specialised in directly engineering sophisticated designs and solutions for our customers in compliance with the highest standards of the Industry Practices.</p>
                </Col>
                <Col sm="6">
                    <Card>
                        <CardHeader className="bg-success text-white">
                            <h3>Facts About Us</h3>
                        </CardHeader>
                        <CardBody>
                        <dl className='row'>
                                <dt className='col-6'>Founded</dt>
                                <dd className='col-6'>December 15, 2022</dd>
                                <dt className='col-6'>No. of Reviews in 2022</dt>
                                <dd className='col-6'>500</dd>
                                <dt className='col-6'>Employees</dt>
                                <dd className='col-6'>20</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="6">
                    <Card className="bg-light mt-3">
                        <CardBody className="blockquote">
                            <p>“Passwords are like underwear: don't let people see it, change it very often, and you shouldn't share it with strangers.”</p>
                            <footer className="blockquote-footer">
                                Chris Pirillo
                            </footer>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row className="row-content">
                <Col xs="12">
                    <h3>Technology Partnerships</h3>
                </Col>
                <PartnersList />
            </Row>
        </Container>
    );
}

export default AboutPage;