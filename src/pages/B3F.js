import Speciality from 'sections/speciality';
import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';

import { Box, Container, Flex, Heading, Text, Button } from 'theme-ui';
import Image from 'components/image';
import image1 from 'assets/images/3dmodel/AEFI2.png';

export default function A1A() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Sri Ram Construction"
          description="Your house. Our duty."
        />
        <Box sx={styles.boostAgencies}>
      <Container>
        <Box sx={styles.row}>
          <Flex sx={styles.col}>
            <Box sx={styles.content}>
              <Box sx={styles.titleBox}>
                <Heading as="h3">
                  Unit F
                </Heading>
                <Heading as="h2">
                  Floor 3 Block B
                </Heading>
                <Heading as="h4">
                Area : 1612.31 sqft
                </Heading>
              </Box>
              <a href="https://rzp.io/l/mOzQnYq">
                <Button><h3>Book Now</h3></Button>
              </a>
            </Box>
          </Flex>
          <Flex sx={styles.col}>
            <Image src={image1} sx={styles.image} alt="" />
          </Flex>
        </Box>
      </Container>
    </Box>
        <Speciality />
      </Layout>
    </ThemeProvider>
  );
}

const styles = {
    boostAgencies: {
      pt: ['70px', null, null, '80px', '120px', null, '130px'],
    },
    row: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: ['column', null, null, 'row-reverse'],
    },
    col: {
      flex: ['0 0 100%', null, null, '0 0 50%'],
    },
    image: {
      mt: ['25px', null, null, '0'],
      display: 'flex',
      marginLeft: ['0', null, null, null, 'auto'],
      marginRight: ['0', null, null, null, 'auto'],
      height: ['385px', null, null, 'auto'],
      position: 'relative',
      top: [null, null, null, '-20px', '-45px', 'auto'],
    },
    list: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      ml: ['25px', null, null, '0'],
      mb: ['10px'],
      mt: ['30px'],
      li: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: ['flex-start', null, null, null, null, 'flex-start'],
        fontSize: [1, null, 2, null, '18px'],
        color: 'text_secondary',
        lineHeight: [2.56],
        svg: {
          width: [17, null, null, 23],
          height: [17, null, null, 23],
          color: '#DADADA',
          borderRadius: '50%',
          marginRight: ['10px'],
        },
      },
    },
    titleBox: {
      textAlign: ['center', null, null, 'left'],
      pb: '10px',
      h3: {
        color: 'black',
        fontSize: [5, null, null, '21px', '36px', '32px', 8],
        lineHeight: [1.6, null, null, '1.5'],
        fontWeight: 'bold',
        letterSpacing: ['-0.5px', null, null, null, null, null, '-1.5px'],
      },
      p: {
        fontSize: [0, null, 2, null, '17px'],
        color: 'text_secondary',
        opacity: '.6',
        lineHeight: ['26px', null, null, 1.8, null, 2.06],
        padding: ['0 20px', null, null, '0'],
        mt: ['15px'],
      },
    },
    a: {
      color: 'primary',
      fontSize: [1, null, 2],
      display: 'inline-block',
      verticalAlign: 'middle',
      fontWeight: 'bold',
      pl: ['30px', null, null, '4px', null, '4px'],
      mt: ['5px', null, null, null, '10px'],
      svg: {
        position: 'relative',
        top: '3px',
      },
    },
    content: {
      width: '100%',
      textAlign: ['left', null, null, null, 'left'],
      pt: [null, null, null, null, null, '100px'],
      pl: [null, null, null, null, null, '60px', '140px'],
    },
  };