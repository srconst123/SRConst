import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

// reactstrap components
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

import { Table } from 'reactstrap';
import illustration from 'assets/images/BlockB.jpg';
import { jsx, Box, Flex, Container, Heading, Text } from 'theme-ui';

const Booking = (props) => {
    const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <Box as="section" id="home" sx={styles.section}>
    <Container sx={{
        pt:'95px',
        pb:'80px',
      }}>
    <Container sx={{background:'white', opacity:'80%',}}>
    <h1 sx={{
            align: 'center',
        }}>Choose your apartment</h1>
        <h1 sx={{
            align: 'center',
        }}>Block A</h1>
      <Table responsive>  
      <thead>
        <tr>
          <th>Floor</th>
          <th>Rooms</th>
          <th>Unit</th>
          <th>Apartment Area</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>3BHK</td>
          <td>A&emsp;B&emsp;D&emsp;E</td>
          <td>1527.01</td>
          <td>AVAILABLE</td>
          <td><Button
        color="primary"
        type="button"
        onClick={() => setModalOpen(!modalOpen)}
      >
        View Details
      </Button><Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
        <div className=" modal-header">
          <h5 className=" modal-title" id="exampleModalLabel">
            Block A<br />Floor 1<br />Units:&emsp;A&emsp;B&emsp;D&emsp;E
          </h5>
          <button
            aria-label="Close"
            className=" close"
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <ModalBody>...</ModalBody>
        <ModalFooter>
          <Button
            color="secondary"
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >
            Close
          </Button>
          <Button color="primary" type="button">
            Save changes
          </Button>
        </ModalFooter>
      </Modal></td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>3BHK</td>
          <td>C&emsp;F</td>
          <td>1509.97</td>
          <td>AVAILABLE</td>
          <td><Button
        color="primary"
        type="button"
        onClick={() => setModalOpen(!modalOpen)}
      >
        View Details
      </Button><Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
        <div className=" modal-header">
          <h5 className=" modal-title" id="exampleModalLabel">
            Modal title
          </h5>
          <button
            aria-label="Close"
            className=" close"
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <ModalBody>...</ModalBody>
        <ModalFooter>
          <Button
            color="secondary"
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >
            Close
          </Button>
          <Button color="primary" type="button">
            Save changes
          </Button>
        </ModalFooter>
      </Modal></td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>3BHK</td>
          <td>A&emsp;B&emsp;D&emsp;E</td>
          <td>1527.01</td>
          <td>AVAILABLE</td>
          <td><Button
        color="primary"
        type="button"
        onClick={() => setModalOpen(!modalOpen)}
      >
        View Details
      </Button></td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>3BHK</td>
          <td>C&emsp;F</td>
          <td>1509.97</td>
          <td>AVAILABLE</td>
          <td><Button
        color="primary"
        type="button"
        onClick={() => setModalOpen(!modalOpen)}
      >
        View Details
      </Button></td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>3BHK</td>
          <td>A&emsp;B&emsp;D&emsp;E</td>
          <td>1527.01</td>
          <td>AVAILABLE</td>
          <td><Button
        color="primary"
        type="button"
        onClick={() => setModalOpen(!modalOpen)}
      >
        View Details
      </Button></td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>3BHK</td>
          <td>C&emsp;F</td>
          <td>1509.97</td>
          <td>AVAILABLE</td>
          <td><Button
        color="primary"
        type="button"
        onClick={() => setModalOpen(!modalOpen)}
      >
        View Details
      </Button></td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>3BHK</td>
          <td>A&emsp;B&emsp;D&emsp;E</td>
          <td>1527.01</td>
          <td>AVAILABLE</td>
          <td><Button
        color="primary"
        type="button"
        onClick={() => setModalOpen(!modalOpen)}
      >
        View Details
      </Button></td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>3BHK</td>
          <td>C&emsp;F</td>
          <td>1509.97</td>
          <td>AVAILABLE</td>
          <td><Button
        color="primary"
        type="button"
        onClick={() => setModalOpen(!modalOpen)}
      >
        View Details
      </Button></td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>3BHK</td>
          <td>A&emsp;B&emsp;D&emsp;E</td>
          <td>1527.01</td>
          <td>AVAILABLE</td>
          <td><Button
        color="primary"
        type="button"
        onClick={() => setModalOpen(!modalOpen)}
      >
        View Details
      </Button></td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>3BHK</td>
          <td>C&emsp;F</td>
          <td>1509.97</td>
          <td>AVAILABLE</td>
          <td><Button
        color="primary"
        type="button"
        onClick={() => setModalOpen(!modalOpen)}
      >
        View Details
      </Button></td>
        </tr>
        <tr>
          <th scope="row">6</th>
          <td>3BHK</td>
          <td>A&emsp;B&emsp;D&emsp;E</td>
          <td>1527.01</td>
          <td>AVAILABLE</td>
          <td><Button
        color="primary"
        type="button"
        onClick={() => setModalOpen(!modalOpen)}
      >
        View Details
      </Button></td>
        </tr>
        <tr>
          <th scope="row">6</th>
          <td>3BHK</td>
          <td>C&emsp;F</td>
          <td>1509.97</td>
          <td>AVAILABLE</td>
          <td><Button
        color="primary"
        type="button"
        onClick={() => setModalOpen(!modalOpen)}
      >
        View Details
      </Button></td>
        </tr>
        <tr>
          <th scope="row">7</th>
          <td>3BHK</td>
          <td>A&emsp;B&emsp;D&emsp;E</td>
          <td>1527.01</td>
          <td>AVAILABLE</td>
          <td><Button
        color="primary"
        type="button"
        onClick={() => setModalOpen(!modalOpen)}
      >
        View Details
      </Button></td>
        </tr>
        <tr>
          <th scope="row">7</th>
          <td>3BHK</td>
          <td>C&emsp;F</td>
          <td>1509.97</td>
          <td>AVAILABLE</td>
          <td><Button
        color="primary"
        type="button"
        onClick={() => setModalOpen(!modalOpen)}
      >
        View Details
      </Button></td>
        </tr>
        <tr>
          <th scope="row">8</th>
          <td>3BHK</td>
          <td>A&emsp;B&emsp;D&emsp;E</td>
          <td>1527.01</td>
          <td>AVAILABLE</td>
          <td><Button
        color="primary"
        type="button"
        onClick={() => setModalOpen(!modalOpen)}
      >
        View Details
      </Button></td>
        </tr>
        <tr>
          <th scope="row">8</th>
          <td>3BHK</td>
          <td>C&emsp;F</td>
          <td>1509.97</td>
          <td>AVAILABLE</td>
          <td><Button
        color="primary"
        type="button"
        onClick={() => setModalOpen(!modalOpen)}
      >
        View Details
      </Button></td>
        </tr>
        <tr>
          <th scope="row">9</th>
          <td>3BHK</td>
          <td>A&emsp;B&emsp;D&emsp;E</td>
          <td>1527.01</td>
          <td>AVAILABLE</td>
          <td><Button
        color="primary"
        type="button"
        onClick={() => setModalOpen(!modalOpen)}
      >
        View Details
      </Button></td>
        </tr>
        <tr>
          <th scope="row">9</th>
          <td>3BHK</td>
          <td>C&emsp;F</td>
          <td>1509.97</td>
          <td>AVAILABLE</td>
          <td><Button
        color="primary"
        type="button"
        onClick={() => setModalOpen(!modalOpen)}
      >
        View Details
      </Button></td>
        </tr>
        <tr>
          <th scope="row">10</th>
          <td>3BHK</td>
          <td>A&emsp;B&emsp;D&emsp;E</td>
          <td>1527.01</td>
          <td>AVAILABLE</td>
          <td><Button
        color="primary"
        type="button"
        onClick={() => setModalOpen(!modalOpen)}
      >
        View Details
      </Button></td>
        </tr>
        <tr>
          <th scope="row">10</th>
          <td>3BHK</td>
          <td>C&emsp;F</td>
          <td>1509.97</td>
          <td>AVAILABLE</td>
          <td><Button
        color="primary"
        type="button"
        onClick={() => setModalOpen(!modalOpen)}
      >
        View Details
      </Button></td>
        </tr>
        </tbody>
        </Table>
        <h1 sx={{
            align: 'center',
        }}>Block B</h1>
      <Table responsive>
        <thead>
        <tr>
          <th>Apartment</th>
          <th>Rooms</th>
          <th>Floors</th>
          <th>Apartment Area</th>
          <th>Status</th>
        </tr>
      </thead>
 
        <tbody>
        <tr>
          <th scope="row">A</th>
          <td>3BHK</td>
          <td>1&emsp;2&emsp;3&emsp;4&emsp;5&emsp;6&emsp;7&emsp;8&emsp;9&emsp;10</td>
          <td>1516.94</td>
          <td>AVAILABLE</td>
          <td><a href="https://rzp.io/l/mOzQnYq">Book Now</a></td>
        </tr>
        <tr>
          <th scope="row">B</th>
          <td>1BHK</td>
          <td>1&emsp;2&emsp;3&emsp;4&emsp;5&emsp;6&emsp;7&emsp;8&emsp;9&emsp;10</td>
          <td>609.99</td>
          <td>AVAILABLE</td>
          <td><a href="https://rzp.io/l/mOzQnYq">Book Now</a></td>
        </tr>
        <tr>
          <th scope="row">C</th>
          <td>1BHK</td>
          <td>1&emsp;2&emsp;3&emsp;4&emsp;5&emsp;6&emsp;7&emsp;8&emsp;9&emsp;10</td>
          <td>609.99</td>
          <td>AVAILABLE</td>
          <td><a href="https://rzp.io/l/mOzQnYq">Book Now</a></td>
        </tr>
        <tr>
          <th scope="row">D</th>
          <td>1BHK</td>
          <td>1&emsp;2&emsp;3&emsp;4&emsp;5&emsp;6&emsp;7&emsp;8&emsp;9&emsp;10</td>
          <td>609.99</td>
          <td>AVAILABLE</td>
          <td><a href="https://rzp.io/l/mOzQnYq">Book Now</a></td>
        </tr>
        <tr>
          <th scope="row">E</th>
          <td>3BHK</td>
          <td>1&emsp;2&emsp;3&emsp;4&emsp;5&emsp;6&emsp;7&emsp;8&emsp;9&emsp;10</td>
          <td>1516.94</td>
          <td>AVAILABLE</td>
          <td><a href="https://rzp.io/l/mOzQnYq">Book Now</a></td>
        </tr>
        <tr>
          <th scope="row">F</th>
          <td>3BHK</td>
          <td>1&emsp;2&emsp;3&emsp;4&emsp;5&emsp;6&emsp;7&emsp;8&emsp;9&emsp;10</td>
          <td>1612.31</td>
          <td>AVAILABLE</td>
          <td><a href="https://rzp.io/l/mOzQnYq">Book Now</a></td>
        </tr>
        <tr>
          <th scope="row">G</th>
          <td>1BHK</td>
          <td>1&emsp;2&emsp;3&emsp;4&emsp;5&emsp;6&emsp;7&emsp;8&emsp;9&emsp;10</td>
          <td>616.99</td>
          <td>AVAILABLE</td>
          <td><a href="https://rzp.io/l/mOzQnYq">Book Now</a></td>
        </tr>
        <tr>
          <th scope="row">H</th>
          <td>2BHK</td>
          <td>1&emsp;2&emsp;3&emsp;4&emsp;5&emsp;6&emsp;7&emsp;8&emsp;9&emsp;10</td>
          <td>1071.31</td>
          <td>AVAILABLE</td>
          <td><a href="https://rzp.io/l/mOzQnYq">Book Now</a></td>
        </tr>
        <tr>
          <th scope="row">I</th>
          <td>3BHK</td>
          <td>1&emsp;2&emsp;3&emsp;4&emsp;5&emsp;6&emsp;7&emsp;8&emsp;9&emsp;10</td>
          <td>1612.31</td>
          <td>AVAILABLE</td>
          <td><a href="https://rzp.io/l/mOzQnYq">Book Now</a></td>
        </tr>
      </tbody>
    </Table>
    </Container>
    </Container>
  </Box>
    
  );
}

export default Booking;

const styles = {
    section: {
      background: `transparent url(${illustration}) no-repeat center top / cover`,
      pt: [10, null, null, 17, null, null, 0],
      pb: [12, null, null, 12, 7, 11, 0],
    },
    subscriptionForm: {
      maxWidth: [null, null, null, 470, 'none'],
      m: ['30px 0 0', null, null, '30px auto', '35px 0 0'],
      button: {
        fontSize: [0, 1, null, null, 2],
        minHeight: [40, 50, null, null, null, 60],
        px: ['18px', null, null, null, 6],
      },
    },
    
  };