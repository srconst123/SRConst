import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout2';
import Booking from 'sections/booking'
import CallToAction from 'components/footer/calltoaction'


export default function PageThree() {
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <SEO
            title="Sri Ram Construction"
            description="Your house. Our duty."
          />
          <Booking />
          <CallToAction />
       </Layout>
    </ThemeProvider>
  );
}