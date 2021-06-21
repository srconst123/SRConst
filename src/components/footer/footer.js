/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, Box, Text, Container, Grid } from 'theme-ui';
import { Link } from 'components/link';
import Logo from 'components/logo';
import Widget from 'components/footer/widget';
import { layout } from 'styled-system';
export default function Footer() {
  return (
    <footer
      sx={{
        variant: 'layout.footer',
        backgroundColor: '#fff',
      }}
    >
      <Container
        sx={{
          variant: 'layout.toolbar',
          justifyContent: ['center', null, null, 'space-between'],
          flexDirection: ['column', null, null, null, 'row'],
          paddingTop: [30, 40],
          paddingBottom: [30, 65],
        }}
      >
        <Box sx={styles.ul}>
            <Text as="p" sx={
              {
                paddingBottom: [2,2],
              }
            }>
              <b>Address:</b><br />
              2nd Floor, Ganpati Complex<br />
              Opp. Sidhu Kanhu Park<br />
              Ranchi College Road<br />
              Ranchi, PIN: 834008<br />
            </Text></Box>
            <Box as="ul" sx={styles.ul}>
            <Text as="p" sx={
              {
                paddingBottom: [5,5],
              }
            }>
              <b>Email:</b> enquiry@sriramconstruction.com<br />
              <b>Phone:</b> 9234681459<br />
            </Text>
            </Box>
            <Container sx={{padding:'5px',}}>
            <iframe sx={{alignItems:'right',}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2708.8685183243324!2d85.32816364661211!3d23.382837228502936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e115f977f16b%3A0x6fd5460d2d38e2bc!2sSri%20Ram%20Constructions!5e0!3m2!1sen!2sin!4v1623913010030!5m2!1sen!2sin" width="250" height="250" allowFullScreen="true" loading="lazy"></iframe>
              </Container>
          
        <Box sx={styles.left}>
         
          <Text as="p">
            Sri Ram Construction &copy; {new Date().getFullYear()} All right reserved
            
          </Text>
        </Box>
        
      </Container>
    </footer>
  );
}

const styles = {
  ul: {
    display: 'flex',
    listStyle: 'none',
    margin: '28px 0 0',
    padding: 0,
    li: {
      display: 'flex',
      alignItems: 'center',
      img: {
        mr: '15px',
      },
    },
    a: {
      fontSize: '15px',
      textDecoration: 'none',
      lineHeight: 2.5,
    },
  },
  left: {
    display: 'flex',
    flexDirection: ['column', null, 'row'],
    alignItems: 'center',
    p: {
      fontSize: [0, 1],
      color: 'black',
      opacity: 0.6,
      mt: ['10px', null, '0'],
    },
  },
  grid: {
    gap: [6, null, 0],
    display: 'grid',
    alignItems: 'right',
    maxWidth: 1920,
    margin: '0 auto',
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      null,
      null,
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
    ],
    borderTop: (t) => [null, null, `1px solid ${t.colors.borderColor}`],
    borderLeft: (t) => [null, null, `1px solid ${t.colors.borderColor}`],
  },
  right: {
    display: ['none', null, null, null, 'flex'],
    flexDirection: ['column', null, 'row'],
    fontSize: 2,
    alignItems: 'center',
    color: 'black',
    a: {
      transition: '500ms',
      '&:hover': {
        color: 'primary',
      },
    },
    'a+a': {
      marginLeft: '30px',
    },
  },
  mapresponsive:{
    overflow:'hidden',
    pb:'56.25%',
    position:'relative',
    height:'0',
    iframe:{

      left:'0',
  
      top:'0',
  
      height:'100%',
  
      width:'100%',
  
      position:'absolute',
  
  },

},
};