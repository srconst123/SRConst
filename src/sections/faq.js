/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Button } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Accordion from 'components/accordion/accordion';

const data = [
  {
    id: 1,
    title: `01. How do I book my home at Sri Ram Constructions?`,
    contents: (
      <div>
        Identify your apartment. Fill the booking application form. Pay the booking amount as stated in the payment schedule by cheque/DD/online transfer.
      </div>
    ),
  },
  {
    id: 2,
    title: `02. What happens after booking?`,
    contents: (
      <div>
        On receiving approvals, Monarch will invite the selected apartment owner’s for allotment and you will be required to pay the allotment amount within 2 weeks, against which a formal letter of allotment will be issued. Agreements will follow in 2 weeks from the date of allotment.
      </div>
    ),
  },
  {
    id: 3,
    title: `03. How are installments to be paid and is it milestone bound?`,
    contents: (
      <div>
        Installments can be made by way of cheque or bank disbursements based on schedule of payments as mentioned in the cost sheet. The payment structure is on a Construction Milestone basis.
      </div>
    ),
  },
  {
    id: 4,
    title: `04. Is there a clubhouse and what are the facilities?`,
    contents: (
      <div>
        Yes. We offers an array of state-of-the-art facilities, such as: gymnasium, multi-purpose hall, indoor squash court, health club, library, table tennis, cards room, TV room, yoga terrace, swimming pool and children’s play area.
      </div>
    ),
  },
  {
    id: 5,
    title: `05. What happens if I have any more questions/clarifications?`,
    contents: (
      <div>
        You can email us at: customerrelations@monarchproperties.in.
        You can always get in touch with us vie phone at 91 9590 113 113.
      </div>
    ),
  },
];

const Faq = () => {
  return (
    <section id="faq" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={{ mb: [6, null, null, 12, 17] }}
          slogan="Get your questions answered"
          title="Frequently asked question"
        />

        <Accordion items={data} />
    
      </Container>
    </section>
  );
};

export default Faq;

const styles = {
  section: {
    pt: [6, null, null, null, 6, 10, 14],
    pb: [12, null, null, null, 10, 22],
  },
  loadMore: {
    paddingTop: [3, null, null, 0],
    textAlign: 'center',
    button: {
      backgroundColor: '#738295',
      color: '#738295',
      minHeight: 50,
      px: '22px',
    },
  },
};
