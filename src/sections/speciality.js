import React from 'react';
import { Box, Container, Grid, Heading, Text, Flex } from 'theme-ui';
import Image from 'components/image';
import { Link } from 'components/link';
import { IoIosCheckmarkCircle } from 'react-icons/io';

import { FaAngleRight } from 'react-icons/fa';
import image1 from 'assets/images/building/a1.jpg';

import icon1 from 'assets/images/service1.jpg';
import icon2 from 'assets/images/service2.jpg';
import icon3 from 'assets/images/service3.jpg';
import icon4 from 'assets/images/service4.jpg';
import icon5 from 'assets/images/service5.jpg';
import icon6 from 'assets/images/service6.jpg';
import icon7 from 'assets/images/service7.jpg';
import icon8 from 'assets/images/service8.jpg';
import SectionHeading from 'components/section-heading';

const SERVICES_DATA = [
  {
    icon: icon1,
    title: 'Structure',
    text:
      'Standard RCC framed structure with in filled brick wall.',
  },
  {
    icon: icon2,
    title: 'Flooring',
    text:
      'Bedroom and Kitchen made of Vitrified Tiles. Toilet made of Anti-skid ceramic tiles. Common Areas are made of Granite.',
  },
  {
    icon: icon3,
    title: 'Doors and Windows',
    text:
      'Main doors laminated and made with Sal Wood. Flush doors with standard locks. All windiws are of UPVC frames.',
  },
  {
    icon: icon4,
    title: 'Electrical',
    text:
      'Modular electrical switches. TV and Telephone points in bedroom and living room. Provision for A/C point in all rooms.',
  },
  {
    icon: icon5,
    title: 'Kitchen',
    text:
      'Design to suit modular kitchen. Cooking platform with granite top. Designer tiles utp 2 feet height above the platform.',
  },
  {
    icon: icon6,
    title: 'Toilet',
    text:
      'CP fittings of standard make. Designer tiles on walls upto 7 feet. Provision for exhaust fan and geyser.',
  },
  {
    icon: icon7,
    title: 'Wall',
    text:
      'Internal wall of Pop design. External wall is a combination of texture and weather resistant paints. ',
  },
  {
    icon: icon8,
    title: 'Clubhouse',
    text:
      'A clubhouse with all modern fun activities to let off stress and enjoy evenings at.',
  },
];

const Speciality = () => {
  return (
    <Box sx={styles.services} id="services">
      <Container>
        <Box sx={{
          pb:'30px',
        }}>
        <SectionHeading
          slogan="Quality features"
          styles={styles.blockTitle}
        /></Box>
        <Grid sx={styles.grid}>
          {SERVICES_DATA.map((service, index) => (
            <Box
              className="service-card"
              sx={styles.serviceCard}
              key={`service-post-${index}`}
            >
              <Box className="service-icon" sx={styles.icon}>
                <Image src={service.icon} alt="" />
              </Box>
              <Heading as="h3">{service.title}</Heading>
              <Text as="p">{service.text}</Text>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Speciality;

const styles = {
  services: {
    pt: ['80px', null, null, null, null, null, '140px'],
    },
  blockTitle: {
    textAlign: 'center',
  },
  grid: {
    display: 'grid',
    gridGap: ['30px', null, null, null, null, '60px'],
    gridTemplateColumns: [
      '1fr',
      null,
      null,
      '1fr 1fr',
      null,
      '1fr 1fr 1fr 1fr',
    ],
  },
  icon: {
    display: 'flex',
    ml: 'auto',
    mr: 'auto',
    width: ['80px', null, null, '110px'],
    height: ['80px', null, null, '110px'],
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: ['20px', null, null, '40px'],
  },
  serviceCard: {
    textAlign: 'center',
    h3: {
      margin: 0,
      fontSize: ['18px', null, null, 3],
      fontWeight: 'bold',
      lineHeight: 1,
      color: 'black',
      mt: ['30px', null, null],
      mb: ['20px', null, null],
    },
    p: {
      margin: 0,
      fontSize: [0, null, null, '15px'],
      color: 'heading_secondary',
      width: '100%',
      maxWidth: [null, null, null, null, '84%', '100%'],
      mx: [null, null, null, null, 'auto', '0'],
    },
  },
};
