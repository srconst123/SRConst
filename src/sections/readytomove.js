/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Feature2 from 'components/cards/feature2';
import React from "react";

import icon1 from 'assets/images/building/a4.jpg';
import icon2 from 'assets/images/building/a5.jpg';


const data = [
  {
    id: 1,
    icon: icon1,
    path: '#!',
    title: 'Sri Ram Krishna Enclave',
    description: `This site is located in Green Park Area, 350m from Manya Place, Morabadi, Ranchi.`,
  },
  {
    id: 2,
    icon: icon2,
    path: '#!',
    title: 'Sri Ram Tower (Phase I)',
    description: `This commercial cum residential tower is located in Gandhi Nagar, Dhanbad.`,
  },
];

const ReadyToMove = () => {
  return (
    <section id="features" sx={styles.sectioni}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Our ready to move projects"
        />
        <Box sx={styles.grid}>
          {data?.map((item) => (
            <Feature2 className="feature-item" key={item.id} data={item} />
          ))}
        </Box>
      </Container>
    </section>
  );
};

export default ReadyToMove;

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
      'repeat(2, 1fr)',
    ],
    borderTop: (t) => [null, null, `1px solid ${t.colors.borderColor}`],
    borderLeft: (t) => [null, null, `1px solid ${t.colors.borderColor}`],
  },
};
