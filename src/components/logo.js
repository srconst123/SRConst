/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'components/link';
import LogoSvg from 'components/icons/logo';
import { AiFillGoogleCircle } from 'react-icons/ai';

export default function Logo({ isSticky, footer, ...props }) {
  return (
    <Link path={'index'} sx={styles.logo} {...props}>
      <LogoSvg />
    </Link>
  );
}
const styles = {
  logo: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'inline-flex',
    maxWidth: [null, null, null, 185, null, 'none'],
    svg: {
      height: 'auto',
      width: [128, null, '100%'],
    },
  },
};
