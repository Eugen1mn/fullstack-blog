import './web-development.scss';

import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import {
  WebDevelopmentHero,
  WebDevelopmentProcess,
  WhyUs,
  HowWeWork,
  PortfolioPromo,
  OurPortfolio,
  Contacts,
  FaqSection,
  // ToolsSection,
} from '../../components';

type Props = {
  params: { lang: Locale };
};

export default async function WebDevelopmentPage({ params: { lang } }: Props) {
  const { webDevelopmentPage, home, contacts } = await getDictionary(lang);

  return (
    <>
      <div className="web-development-page">
        <WebDevelopmentHero lang={lang} dictionary={webDevelopmentPage.hero} />
        <WebDevelopmentProcess dictionary={webDevelopmentPage.process} />
        <WhyUs dictionary={webDevelopmentPage.whyUs} />
        <HowWeWork dictionary={webDevelopmentPage.howWeWork} />
        <PortfolioPromo dictionary={webDevelopmentPage.casePromo} />
        {/* <ToolsSection dictionary={webDevelopmentPage.tools} /> */}
        <FaqSection dictionary={webDevelopmentPage.faq} />
      </div>
      <OurPortfolio dictionary={home.OurPortfolio} />
      <Contacts lang={lang} dictionary={contacts} />
    </>
  );
}
