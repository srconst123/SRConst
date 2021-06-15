import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import UltimateFeatures from 'sections/ultimate-features';
import CustomerSupport from 'sections/customer-support';
import Pricing from 'sections/pricing-flawed';
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
        <CustomerSupport />
        
        <Clients />
        
        <Faq />
      <CallToAction />
      </Layout>
    </ThemeProvider>
  );
}
