import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import ReadyToMove from 'sections/readytomove'
import CallToAction from 'components/footer/calltoaction'


export default function PageThree() {
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <SEO
            title="Sri Ram Construction"
            description="Your house. Our duty."
          />
          <ReadyToMove />
       
            <CallToAction />
       </Layout>
    </ThemeProvider>
  );
}