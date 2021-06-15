/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Flex, Container, Heading, Text } from 'theme-ui';
import SubscriptionForm from 'components/subscription-form';
import illustration from 'assets/images/banner-bg.png';

const Banner = () => {
  return (
    <Box as="section" id="home" sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.bannerContent}>
            <Heading as="h1">
              One place.
            </Heading>
            <Heading as="h1" sx={{
              textAlign:'center',
            }}>
              Many things.
            </Heading>
            <Heading as="pp">.
            </Heading>
           <br />
           
            
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;

const styles = {
  section: {
    background: `transparent url(${illustration}) no-repeat center top / cover`,
    pt: [18, null, null, 17, null, null, 0],
    pb: [12, null, null, 12, 7, 11, 0],
  },
  contentWrapper: {
    gap: [null, null, null, null, 8, 15],
    display: ['block', null, null, null, 'grid'],
    alignItems: 'center',
    gridTemplateColumns: [null, null, null, null, '1fr 1fr', '530px 1fr'],
    minHeight: ['auto', null, null, null, '42vh', '81vh', '100vh'],
    pt: [null, null, null, 50, 0, null],
    '@media only screen and (min-width:1501px) and (max-width:1600px)': {
      pt: 14,
    },
  },
  bannerContent: {
    maxWidth: [null, null, 450, '600px', null, 'none'],
    m: [null, null, '0 auto', null, 0],
    textAlign: ['center', null, null, null, 'left'],
    h1: {
      fontFamily: 'headingAlt',
      fontSize: [9, null, null, 10, 12, 45, 16],
      lineHeight: [1.31, null, null, 1.5, null, 1.26],
      letterSpacing: [0, null, null, null, '-1.5px'],
      color: ['red',null,null,null,'textSecondary'],
    },
    pp: {
      fontFamily: 'headingAlt',
      fontSize: [0, null, null, 10, 12, 45, 16],
      lineHeight: [1.31, null, null, 1.5, null, 1.26],
      letterSpacing: [0, null, null, null, '-1.5px'],
      color: 'white',
    },
    p: {
      fontSize: ['15px', null, null, 2, 3],
      lineHeight: [1.87, null, null, 2, null, 2.33],
      color: 'textSecondary',
      background: ['white',null,null,null,3],
      opacity: '0.85',
      maxWidth: [null, null, 370, 460],
      m: ['20px auto 0', null, null, null, '25px auto 0'],
    },
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
