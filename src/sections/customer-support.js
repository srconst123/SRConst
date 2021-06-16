/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Grid, Heading, Text } from 'theme-ui';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import Image from 'components/image';
import SectionHeading from 'components/section-heading';
import React from "react";
import { UncontrolledCarousel, Button, Row, Col, Modal, ModalBody, ModalFooter } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const list = [
  'Gated Community',
  'Landscape Garden',
  'Car Parking',
  '24x7 Security',
  'Pool/Billiards',
  'Badminton Court',
  'High Speed Lift',
  'Lightning Arrester',
  'Table Tennis',
  'Club & Gym',
];

const items = [
  {
    src: require("assets/images/shreedham/1.jpg"),
    altText: "Slide 1",
    caption: "",
    header: "",
    key: "1",
  },
  {
    src: require("assets/images/shreedham/2.jpeg"),
    altText: "Slide 2",
    caption: "",
    header: "",
    key: "2",
  },
  {
    src: require("assets/images/shreedham/3.jpg"),
    altText: "Slide 3",
    caption: "",
    header: "",
    key: "3",
  },
  {
    src: require("assets/images/shreedham/4.jpeg"),
    altText: "Slide 4",
    caption: "",
    header: "",
    key: "3",
  },
  {
    src: require("assets/images/shreedham/5.jpeg"),
    altText: "Slide 5",
    caption: "",
    header: "",
    key: "3",
  },
];

const CustomerSupport = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <Box as="section" sx={styles.section} id="shreedham">
      <Container sx={{
        pt:'100px',
        pb:'80px',
      }}>
        
          
          <Box sx={styles.content}>
          <Row>
    <Col md="8" className="mx-auto">
      <UncontrolledCarousel items={items} />
    </Col>
  </Row>
            
            <Heading sx={styles.title}>
            Shree Dham Residential Complex 
            </Heading>
            <Text as="p" sx={styles.p}>
            It is an upcoming project of Sri Ram Construction near Morabadi Ground. The Project is situated at a walking distance approx. 500 meter from Morabadi Football Ground, Ranchi.
            <br /> The Project caters to the needs of EWS/LIG/MIG and falls under <b>Affordable Housing</b> having <b>1/2/3 BHK</b> suites.
            </Text>

            <Grid sx={styles.list} as="ul">
              {list.map((item, i) => (
                <Text as="li" key={i}>
                  <IoIosCheckmarkCircle
                    sx={{ color: 'primary', mr: 2 }}
                    size="20px"
                  />
                  {item}
                </Text>
              ))}
            </Grid>
            <Container sx={{padding:[2,2]}}><Button><a target="_blank" className="rr" href="https://drive.google.com/file/d/1fQqzIPGCwlzdNc1HdCseH0ZtA7TtCjJ8/view?usp=sharing">View Brochure</a><style>{"\
      .rr{\
        color:black;\
        text-decoration:none;\
      }\
    "}</style></Button></Container>
    
         
          <Button
        color="primary"
        type="button"
        onClick={() => setModalOpen(!modalOpen)}
      >
        Book Now
      </Button>
      <Modal
      toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
        <div className=" modal-header">
          <h5 className=" modal-title" id="exampleModalLabel">
            Shree Dham Residential Complex
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
        <ModalBody>
          <h2 sx={{
            textAlign:'center',
          }}>Floor Structure</h2>
          <h4 sx={{ textAlign:'center'}}>Block A</h4>
          <p sx={{ textAlign:'center'}}><b>FLAT</b>&ensp;&ensp;<b>TYPE</b>&ensp;&ensp;&ensp;<b>AREA</b></p>
          <p sx={{ textAlign:'center'}}>A&ensp;&ensp;&ensp;&ensp;3BHK&ensp;&ensp;&ensp;1497.74</p>
          <p sx={{ textAlign:'center'}}>B&ensp;&ensp;&ensp;&ensp;3BHK&ensp;&ensp;&ensp;1527.01</p>
          <p sx={{ textAlign:'center'}}>C&ensp;&ensp;&ensp;&ensp;3BHK&ensp;&ensp;&ensp;1441.31</p>
          <p sx={{ textAlign:'center'}}>D&ensp;&ensp;&ensp;&ensp;3BHK&ensp;&ensp;&ensp;1527.01</p>
          <p sx={{ textAlign:'center'}}>E&ensp;&ensp;&ensp;&ensp;3BHK&ensp;&ensp;&ensp;1497.74</p>
          <p sx={{ textAlign:'center'}}>F&ensp;&ensp;&ensp;&ensp;3BHK&ensp;&ensp;&ensp;1509.97</p>
          <h4 sx={{ textAlign:'center'}}>Block A</h4>
          <p sx={{ textAlign:'center'}}><b>FLAT</b>&ensp;&ensp;<b>TYPE</b>&ensp;&ensp;&ensp;<b>AREA</b></p>
          <p sx={{ textAlign:'center'}}>A&ensp;&ensp;&ensp;&ensp;3BHK&ensp;&ensp;&ensp;1516.94</p>
          <p sx={{ textAlign:'center'}}>B&ensp;&ensp;&ensp;&ensp;1BHK&ensp;&ensp;&ensp;609.99</p>
          <p sx={{ textAlign:'center'}}>C&ensp;&ensp;&ensp;&ensp;1BHK&ensp;&ensp;&ensp;609.99</p>
          <p sx={{ textAlign:'center'}}>D&ensp;&ensp;&ensp;&ensp;1BHK&ensp;&ensp;&ensp;609.99</p>
          <p sx={{ textAlign:'center'}}>E&ensp;&ensp;&ensp;&ensp;3BHK&ensp;&ensp;&ensp;1516.94</p>
          <p sx={{ textAlign:'center'}}>F&ensp;&ensp;&ensp;&ensp;3BHK&ensp;&ensp;&ensp;1612.31</p>
          <p sx={{ textAlign:'center'}}>G&ensp;&ensp;&ensp;&ensp;1BHK&ensp;&ensp;&ensp;616.99</p>
          <p sx={{ textAlign:'center'}}>H&ensp;&ensp;&ensp;&ensp;2BHK&ensp;&ensp;&ensp;1071.31</p>
          <p sx={{ textAlign:'center'}}>I&ensp;&ensp;&ensp;&ensp;3BHK&ensp;&ensp;&ensp;1612.31</p>

        </ModalBody>
        <ModalFooter>
          <Button
            color="secondary"
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >
            Close
          </Button>
          <a href="https://rzp.io/l/mOzQnYq"><Button color="primary" type="button">
            Pay Booking Amount
          </Button></a>
        </ModalFooter>
      </Modal>
      </Box>
      </Container>
    </Box>
  );
};

export default CustomerSupport;

const styles = {
  section: {
    pt: [8, null, 12, 6, null, 15],
    pb: [null, null, null, 8, 0],
  },
  grid: {
    gap: [null, null, null, null, null],
    display: ['flex', null, null, 'flex'],
    flexDirection: ['column-reverse', null, null, 'unset'],
    alignItems: 'center',
    gridTemplateColumns: ['1fr', null, null, null, '1fr', '1fr'],
  },
  content: {
    marginTop: [null, null, null, null, null, -16],
    maxWidth: [null, null, null, 420, 560, 'none'],
    margin: [null, null, null, '0 auto', 'unset'],
    textAlign: ['center', null, null, null, 'center'],
  },
  title: {
    color: 'heading',
    fontFamily: 'headingAlt',
    fontSize: [4, null, null, 8, null, null, 11],
    fontWeight: 500,
    lineHeight: [1.33, null, 1.4, 1.53],
    textAlign: ['center', null, null, null, 'center'],
    pt:'10px',
    p: {
      color: 'textSecondary',
      fontSize: ['13px', null, null, 2, '15px', 2],
      lineHeight: [1.86, null, null, null, 1.86, 1.86],
      m: [null, null, null, '20px auto 0', '15px 0 0', null, 'unset'],
      textAlign: ['center', null, null, null, 'center'],
    },
    letterSpacing: ['-0.5px', null, null, '-1px'],
    mb: 3,
    span: {
      backgroundSize: 'cover',
      px: 2,
    },
  },
  p: {
    color: 'textSecondary',
    fontSize: ['13px', null, null, 2, '15px', 2],
    lineHeight: [1.86, null, null, null, 1.86, 2.25],
    m: [null, null, null, '20px auto 0', '15px 0 0', null, 'unset'],
    textAlign: ['center', null, null, null, 'center'],
    span: {
      backgroundSize: 'cover',
      px: 2,
    },
  },
  summary: {
    color: 'textSecondary',
    fontSize: ['13px', null, null, 2, '15px', 2],
    lineHeight: [1.86, null, null, null, 1.86, 2.25],
    maxWidth: 470,
    m: [null, null, null, '20px auto 0', '15px 0 0', null, 'unset'],
  },
  list: {
    gap: '0 18px',
    gridTemplateColumns: ['repeat(2, 142px)', null, null, 'repeat(5, 200px)'],
    justifyContent: [null, null, null, 'center', 'center'],
    listStyle: 'none',
    mt: [4, null, null, 5, 4, 5],
    p: 0,
    li: {
      fontSize: [0, 1, null, 2, '15px', 2],
      fontWeight: 500,
      alignItems: 'center',
      color: 'textSecondary',
      display: 'flex',
      lineHeight: [2.81, null, null, null, 2.2, 2.81],
    },
  },
};
