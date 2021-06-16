/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Feature from 'components/cards/feature';
import React from "react";

import icon1 from 'assets/images/building/a1.jpg';
import icon2 from 'assets/images/building/a2.jpg';
import icon3 from 'assets/images/building/a3.jpg';

const data = [
  {
    id: 1,
    icon: icon1,
    path: '/shreedham',
    title: 'Shree Dham',
    description: `Our premiere project located near Sri Ram Krishna Enclave, Edalhatu, Morabadi, Ranchi. We have 1/2/3 BHK flats available here. We have all modern living facilities available here. Enjoy the city life in this beauty, located at the heart of the city.`,
  },
  {
    id: 2,
    icon: icon2,
    path: '#!',
    title: 'Jatra Tower',
    description: `This project is located in Vikash Nagar, Road No. 2, 500m from Singh More, Hatia, Ranchi. We will have 2/3 BHK flats available here. We have all state-of-the-art facilities available here and the scenic beauty of the city of Ranchi stand proudly behind it.`,
  },
  {
    id: 3,
    icon: icon3,
    path: '#!',
    title: 'Sri Ram Tower (Phase II)',
    description: `This project is located in Green Park Area, 350m from Manya Place, Morabadi, Ranchi. We will have 2/3 BHK flats available here. We have all state-of-the-art facilities available here and you can enjoy city life at this place located in the heart of the city.`,
  },
];

const OngBuild = () => {
  return (
    <section id="features" sx={styles.sectioni}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="See what we've been working on"
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

export default OngBuild;

const styles = {
  sectioni: {
    backgroundColor: '#F9FBFD',
    padding:'10px',
    pt: [8, null, null, 12, null, 10],
    pb: [9, null, null, 12, 16, 18],
  },
  heading: {
    marginBottom: [7, null, null, 8, 7],
    pt:'40px',
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
