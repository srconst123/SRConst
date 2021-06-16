/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Heading, Flex, Text } from 'theme-ui';
import Image from 'components/image';
import illustration from 'assets/images/support-2.png';
import SectionHeading from 'components/section-heading';

const Support = () => {
  return (
    <section id="support" sx={styles.section}>
      <Container>
        
       
           
            <SectionHeading
          sx={styles.heading}
          
          title="About Us"
        />
              <Text as="p" sx={styles.summary}>
              <b>Sri Ram Construction was founded in the year 1995 by Sri Sanjay Kumar. He foresaw the development of Ranchi from a budding city to a hub of development, and even before many had thought of it, he put his dreams into action, and laid the foundation of Sri Ram Construction.
              <br />With over 24 years of experience in construction and real estate development, Sanjay Kumar, as proprietor of Sri Ram Construction has been at the forefront of the real estate industry, through building world class residential and commercial projects. As a construction and contracting company, Sri Ram Construction successfully executed many commercial and residential project as well as Civil and Electrical work in Jharkhand and Bihar.
              <br />To undertake this ever expanding work, Sri Ram Construction today, is backed by a professional and competent team constantly growing workforce of currently over fifty, experienced Engineers, Skilled Supervisor, Civil Foreman, Architects, Chartered Accountant, MBA, etc.</b>
              </Text>
              
              
         
          
         
            <Flex as="figure" sx={styles.illustration}>
            <Image src={illustration} alt="illustration" width="300px" alignItems="center"/>
          </Flex>
          <div>
          <Box sx={styles.inner}>
          <Text as="p" sx={styles.summary}>
              <b>"Our vision gives us a sense of direction and destination to be respectable building contractors delivering beyond expectations, always. It captures our aspiration of being the best at everything we do. Our mission is to procure projects at competitive pricing, provide safe working conditions and deliver quality work within reasonable time."</b>
              </Text></Box></div>
        
      </Container>
    </section>
  );
};

export default Support;

const styles = {
  section: {
    pt: [8, null, null, null, 10, 17],
    pb: [8, null, null, null, 10, 16],
  },

  grid: {
    gap: [5, null, null, 10, 4],
    mx: 'auto',
    maxWidth: 1193,
    display: 'grid',
    alignItems: 'center',
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      null,
      null,
      null,
      '360px 1fr',
      '470px 1fr',
    ],
  },
  content: {
    display: [null, null, null, 'grid', 'unset'],
    gridTemplateColumns: [null, null, null, 'repeat(2, 1fr)', 'unset'],
  },
  summary: {
    textAlign: 'center',
  },
  heading: {
    gridColumn: [null, null, null, '1/3', 'unset'],
    maxWidth: [null, null, null, 420, 'none'],
    mx: [null, null, null, 'auto', 'unset'],
    textAlign: ['center', null, null, 'center'],
    h2: {
      color: 'heading',
      fontFamily: 'headingAlt',
      fontSize: [4, null, 6, 8, null, null, 11],
      fontWeight: 500,
      lineHeight: [1.33, null, 1.4, 1.53],
      letterSpacing: ['-0.5px', null, null, '-1px'],
      textAlign: ['center', null, null, null, 'center'],
      span: {
        backgroundSize: 'cover',
        px: 2,
      },
      mb: 4,
    },
    p: {
      color: 'textSecondary',
      fontSize: ['13px', null, null, 2, '15px', 2],
      lineHeight: [1.86, null, null, null, 1.86, 2.25],
      maxWidth: 470,
      m: [null, null, null, '20px auto 0', '15px 0 0', null, 'unset'],
      textAlign: ['center', null, null, null, 'center'],
    },
  },
  inner: {
    padding: ['45px 30px 50px', '45px 50px', '45px 50px', '45px 50px', '45px 50px', '45px 70px'],
    mt: [0, null, null, null, null],
    position: 'relative',
    zIndex: '10',
    backgroundColor: 'primary',
    //backgroundImage: ['none', null, null, null, null, `url(${BgShape})`],
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '60% center',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    textAlign: ['center', null, null, 'center'],
    flexDirection: ['column', null, null, 'row'],
    justifyContent: ['center', null, null, 'space-between'],
  },
  illustration: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: [3, null, null, 0],
    marginBottom: [3,null,null,0],
  },
  p: {
      color: 'textSecondary',
      fontSize: ['13px', null, null, 2, '15px', 2],
      lineHeight: [1.86, null, null, null, 1.86, 2.25],
      maxWidth: 470,
      m: [null, null, null, '20px auto 0', '15px 0 0', null, 'unset'],
      textAlign: ['center', null, null, null, 'center'],
    },
};
