/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, Box, Text, Container } from 'theme-ui';
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
        <Box as="ul" sx={styles.footer}>
            <Text as="p" sx={
              {
                paddingBottom: [2,2],
              }
            }>
              <b>Address:</b><br />
              <i>2nd Floor, Ganpati Complex</i><br />
              <i>Opp. Sidhu Kanhu Park</i><br />
              <i>Ranchi College Road</i><br />
              <i>Ranchi, PIN: 834008</i><br />
            </Text></Box>
            <Box as="ul" sx={styles.footer}>
            <Text as="p" sx={
              {
                paddingBottom: [5,5],
              }
            }>
              <b>Email:</b> enquiry@sriramconstruction.com<br />
              <b>Phone:</b> 0651-2285544<br />
            </Text></Box>
          
        <Box sx={styles.left}>
          <Logo />
          <Text as="p">
            &copy; {new Date().getFullYear()} All right reserved
            
          </Text>
        </Box>
        
      </Container>
    </footer>
  );
}

const styles = {
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
  right: {
    display: ['none', null, null, null, 'flex'],
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
};