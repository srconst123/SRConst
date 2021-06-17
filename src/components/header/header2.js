/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container } from 'theme-ui';
import { useState } from 'react';
import Sticky from 'react-stickynode';
import { DrawerProvider } from 'contexts/drawer/drawer-provider';
import NavbarDrawer from './navbar-drawer';
import Logo from 'components/logo';
import { Link } from 'components/link';

import menuItems from './header.data';

export default function Header2() {
  const [state, setState] = useState({
    isMobileMenu: false,
    isSticky: false,
  });
  const handleStateChange = (status) => {
    status.status === Sticky.STATUS_FIXED
      ? setState({ ...state, isSticky: true })
      : setState({ ...state, isSticky: false });
  };

  return (
    <DrawerProvider>
      <Sticky
        enabled={true}
        top={0}
        activeClass="is-sticky"
        innerZ={100}
        onStateChange={handleStateChange}
      >
        <header
          sx={styles.header}
          className={state.isSticky ? 'is-sticky' : ''}
        >
          <Container sx={styles.container}>
            <Logo sx={styles.logo} />
            <nav as="nav" sx={styles.navbar} className={'navbar'}>
             
                <a href='/#home'>HOME</a>
                <a href='/#support'>ABOUT US</a>
                <a href='/#features'>FEATURE</a>
                <a href='/ongoing'>ONGOING PROJECTS</a>
                <a href='/readytomove'>READY TO MOVE</a>
                <a href='/#clients'>CLIENTS</a>
                <a href='/#faq'>FAQ</a>
             
            </nav>
          </Container>
        </header>
      </Sticky>
    </DrawerProvider>
  );
}

const styles = {
  header: {
    backgroundColor: 'white',
    position: 'fixed',
    left: 0,
    right: 0,
    py: [5],
    transition: 'all 0.3s ease-in-out 0s',
    '&.is-sticky': {
      backgroundColor: 'white',
      boxShadow: '0px 20px 50px rgba(59, 90, 136, 0.05)',
      py: [3],
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    //position: ['relative', null, null, 'static'],
  },
  logo: {
    mr: [null, null, null, null, 30, 12],
  },
  navbar: {
    display: ['none', null, null, null, 'flex'],
    alignItems: 'left',
    flexGrow: 1,
    // justifyContent: 'center',
    a: {
      cursor: 'pointer',
      display: ['flex'],
      fontWeight: 400,
      color: 'heading',
      padding: 0,
      textDecoration:'none',
      behaviour:'smooth',
      transition: 'all 0.3s ease-in-out 0s',
      '+ a': {
        ml: 7,
      },
    },
    '.active': {
      color: 'primary',

    },
  },
};
