import { Container } from "reactstrap";
import SubHeader from "../components/SubHeader";


const HomePage = () => {
    return(
        <Container>
            <SubHeader current="Home" />
            <div className="info">
                <h1>Welcome to BHolm IT Services</h1>
                <p>BHolm IT Services is a 100% Veteran Owned Company that delivers state of the art technologies from the most renowned and leading manufactures in the IT & Security Systems Industry.  Strategically positioned to lead the “IT & Security Systems Solutions" service industry in the world by leveraging its Key partnerships with world class technology vendors, solid service infrastructure and a commitment to the IT security industry.</p>
            </div>
            <div className="embededVideo">
                <iframe width="774" height="472.2" src="https://www.youtube-nocookie.com/embed/wjORorezVeQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <hr />
            <div>
                <h3>Securing Your Future!!</h3>
                <p>Our focus is aimed on distributing and promoting IT, Security, Telecom, and Services from the world's most leading technology providers.</p>
                <p>Our experts strive on providing the highest quality, cost effective solutions, with prompt deliveries that serve the demanding and challenging market needs.</p>
                <p>We thrive on the mission of enabling the best business results through IDEAS, PEOPLE and TECHNOLOGY.</p>
                <p>As a 360 Degrees Turn Key Solutions Provider, we offer a full spectrum of services that includes Consulting, Design, Implementation, Integration and a whole host of value added Services.</p>
                <p>Committed to our full service value proposition model, we pride ourselves with our strong alliances from the world's most renowned technology providers to offer the most effective and reliable solutions to our customers.</p>
            </div>
        </Container>
    );
}

export default HomePage;