import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import OngBuild from 'sections/ongbuiding'
import CallToAction from 'components/footer/calltoaction'


export default function PageTwo() {
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <SEO
            title="Sri Ram Construction"
            description="Your house. Our duty."
          />
          <OngBuild />
       
            <CallToAction />
       </Layout>
    </ThemeProvider>
  );
}