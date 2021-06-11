/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Feature from 'components/cards/feature';

import icon1 from 'assets/images/features/1.png';
import icon2 from 'assets/images/features/2.png';
import icon3 from 'assets/images/features/3.png';
import icon4 from 'assets/images/features/4.png';
import icon5 from 'assets/images/features/5.png';
import icon6 from 'assets/images/features/6.png';

const data = [
  {
    id: 1,
    icon: icon1,
    path: '#!',
    title: 'Vital Sustainability',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus massa vel nunc pellentesque imperdiet.`,
  },
  {
    id: 2,
    icon: icon2,
    path: '#!',
    title: 'Entertainment and Sports',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus massa vel nunc pellentesque imperdiet.`,
  },
  {
    id: 3,
    icon: icon3,
    path: '#!',
    title: 'Health and Relaxation',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus massa vel nunc pellentesque imperdiet.`,
  },
  {
    id: 4,
    icon: icon4,
    path: '#!',
    title: 'Business and Socialising',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus massa vel nunc pellentesque imperdiet.`,
  },
  {
    id: 5,
    icon: icon5,
    path: '#!',
    title: 'Security and Privacy',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus massa vel nunc pellentesque imperdiet.`,
  },
  {
    id: 6,
    icon: icon6,
    path: '#!',
    title: 'Elder care and Children’s activities',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus massa vel nunc pellentesque imperdiet.`,
  },
];

const UltimateFeatures = () => {
  return (
    <section id="features" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          slogan="Our feature list"
          title="We've got all you need"
        />
        <Box sx={styles.grid}>
          {data?.map((item) => (
            <Feature className="feature-item" key={item.id} data={item} />
          ))}
        </Box>
      </Container>
    </section>
  );
};

export default UltimateFeatures;

const styles = {
  section: {
    backgroundColor: '#F9FBFD',
    pt: [8, null, null, 12, null, 10],
    pb: [9, null, null, 12, 16, 18],
  },
  heading: {
    marginBottom: [7, null, null, 8, 7],
    p: {
      maxWidth: 490,
      margin: ['10px auto 0'],
    },
  },
  grid: {
    gap: [6, null, 0],
    display: 'grid',
    maxWidth: 1080,
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
};
