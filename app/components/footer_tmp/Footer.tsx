import './footer.scss';

import { Locale } from '@/i18n.config';

import {
  ContentWrapper,
  FooterNav,
  LangList,
  Logo,
  SocialList,
} from '../../components';

type Props = {
  lang: Locale;
};

export default async function Footer({ lang }: Props) {
  return (
    <ContentWrapper>
      <footer className="footer">
        <article>
          <section>
            <Logo />

            <SocialList />
          </section>

          <FooterNav />
        </article>

        <article>
          <LangList />
          <p className="footer-copy">
            &copy; 2021-2025 «FULLSTACK-INNOVATIONS» Створення сайтів
          </p>
        </article>
      </footer>
    </ContentWrapper>
  );
}
