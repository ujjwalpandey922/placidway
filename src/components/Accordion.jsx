import Accordion from "react-bootstrap/Accordion";
import "./accordion.css";
import { MdBedroomParent } from "react-icons/md";
import { BsFillCalendarCheckFill } from "react-icons/bs";
function AccordionComponent() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0" style={{ margin: "1rem" }}>
        <Accordion.Header>
          {" "}
          <BsFillCalendarCheckFill fontSize={30} color="#4c9e9e" />
          <h3>Program</h3>
        </Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" style={{ margin: "1rem" }}>
        <Accordion.Header className="header-accordion">
          <MdBedroomParent fontSize={30} color="#4c9e9e" />{" "}
          <h3>Accommodation</h3>
        </Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionComponent;
