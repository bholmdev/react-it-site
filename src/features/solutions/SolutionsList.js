import { Row, Col } from "reactstrap";
import Solution from "./Solution";
import { selectAllSolutions } from "./solutionsSlice";

const SolutionsList = () => {
    const solutions = selectAllSolutions();

    return (
        <Row className="ms-auto">
            <Col>
            {solutions.map((solution) => {
                return (
                    <Col
                        md="5"
                        className="m-4"
                        key={solution.id}>
                        <Solution partner={solution} />
                    </Col>
                )
            })}
            </Col>
        </Row>
    )
}

export default SolutionsList