import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import UltimateFeatures from 'sections/ultimate-features';
import Support from 'sections/support';
import Clients from 'sections/clients';;
import Faq from 'sections/faq';
import CallToAction from 'components/footer/calltoaction';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Sri Ram Construction"
          description="Your house. Our duty."
        />
        <Banner />
        <Support />
        <UltimateFeatures />
        
        <Clients />
        
        <Faq />
      <CallToAction />
      </Layout>
    </ThemeProvider>
  );
}
