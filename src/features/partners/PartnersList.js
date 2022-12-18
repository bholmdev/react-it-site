import { Row, Col } from "reactstrap";
import Partner from "./Partner";
import { selectAllPartners } from "./partnersSlice";

const PartnersList = () => {
    const partners = selectAllPartners();

    return (
        <Row className="ms-auto">
            {partners.map((partner) => {
                return (
                    <Col
                        md="5"
                        className="m-4"
                        key={partner.id}>
                        <Partner partner={partner} />
                    </Col>
                )
            })}
        </Row>
    )
}

export default PartnersList