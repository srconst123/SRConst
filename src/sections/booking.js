import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Table } from 'reactstrap';
import illustration from 'assets/images/BlockB.jpg';
import { jsx, Box, Flex, Container, Heading, Text } from 'theme-ui';

const Booking = (props) => {
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
      <Table responsive>  
      <thead>
        <tr>
          <th>Apartment</th>
          <th>Rooms</th>
          <th>Block</th>
          <th>Floors</th>
          <th>Apartment Area</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">A</th>
          <td>3BHK</td>
          <td>A</td>
          <td>B+G+11</td>
          <td>1497.74</td>
          <td>AVAILABLE</td>
          <td><a href="https://rzp.io/l/mOzQnYq">Book Now</a></td>
        </tr>
        <tr>
          <th scope="row">B</th>
          <td>3BHK</td>
          <td>A</td>
          <td>B+G+11</td>
          <td>1527.01</td>
          <td>AVAILABLE</td>
          <td><a href="https://rzp.io/l/mOzQnYq">Book Now</a></td>
        </tr>
        <tr>
          <th scope="row">C</th>
          <td>3BHK</td>
          <td>A</td>
          <td>B+G+11</td>
          <td>1441.31</td>
          <td>AVAILABLE</td>
          <td><a href="https://rzp.io/l/mOzQnYq">Book Now</a></td>
        </tr>
        <tr>
          <th scope="row">D</th>
          <td>3BHK</td>
          <td>A</td>
          <td>B+G+11</td>
          <td>1527.01</td>
          <td>AVAILABLE</td>
          <td><a href="https://rzp.io/l/mOzQnYq">Book Now</a></td>
        </tr>
        <tr>
          <th scope="row">E</th>
          <td>3BHK</td>
          <td>A</td>
          <td>B+G+11</td>
          <td>1497.74</td>
          <td>AVAILABLE</td>
          <td><a href="https://rzp.io/l/mOzQnYq">Book Now</a></td>
        </tr>
        <tr>
          <th scope="row">F</th>
          <td>3BHK</td>
          <td>A</td>
          <td>B+G+11</td>
          <td>1509.97</td>
          <td>AVAILABLE</td>
          <td><a href="https://rzp.io/l/mOzQnYq">Book Now</a></td>
        </tr>
        <tr>
          <th scope="row">A</th>
          <td>3BHK</td>
          <td>B</td>
          <td>B+G+11</td>
          <td>1516.94</td>
          <td>AVAILABLE</td>
          <td><a href="https://rzp.io/l/mOzQnYq">Book Now</a></td>
        </tr>
        <tr>
          <th scope="row">B</th>
          <td>1BHK</td>
          <td>B</td>
          <td>B+G+11</td>
          <td>609.99</td>
          <td>AVAILABLE</td>
          <td><a href="https://rzp.io/l/mOzQnYq">Book Now</a></td>
        </tr>
        <tr>
          <th scope="row">C</th>
          <td>1BHK</td>
          <td>B</td>
          <td>B+G+11</td>
          <td>609.99</td>
          <td>AVAILABLE</td>
          <td><a href="https://rzp.io/l/mOzQnYq">Book Now</a></td>
        </tr>
        <tr>
          <th scope="row">D</th>
          <td>1BHK</td>
          <td>B</td>
          <td>B+G+11</td>
          <td>609.99</td>
          <td>AVAILABLE</td>
          <td><a href="https://rzp.io/l/mOzQnYq">Book Now</a></td>
        </tr>
        <tr>
          <th scope="row">E</th>
          <td>3BHK</td>
          <td>B</td>
          <td>B+G+11</td>
          <td>1516.94</td>
          <td>AVAILABLE</td>
          <td><a href="https://rzp.io/l/mOzQnYq">Book Now</a></td>
        </tr>
        <tr>
          <th scope="row">F</th>
          <td>3BHK</td>
          <td>B</td>
          <td>B+G+11</td>
          <td>1612.31</td>
          <td>AVAILABLE</td>
          <td><a href="https://rzp.io/l/mOzQnYq">Book Now</a></td>
        </tr>
        <tr>
          <th scope="row">G</th>
          <td>1BHK</td>
          <td>B</td>
          <td>B+G+11</td>
          <td>616.99</td>
          <td>AVAILABLE</td>
          <td><a href="https://rzp.io/l/mOzQnYq">Book Now</a></td>
        </tr>
        <tr>
          <th scope="row">H</th>
          <td>2BHK</td>
          <td>B</td>
          <td>B+G+11</td>
          <td>1071.31</td>
          <td>AVAILABLE</td>
          <td><a href="https://rzp.io/l/mOzQnYq">Book Now</a></td>
        </tr>
        <tr>
          <th scope="row">I</th>
          <td>3BHK</td>
          <td>B</td>
          <td>B+G+11</td>
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