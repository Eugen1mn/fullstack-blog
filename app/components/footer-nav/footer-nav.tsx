import { FooterNavItem } from '../../components';
import './footer-nav.scss';

interface ServiceList {
  title: string;
  id: string;
  optionList: string[];
}

const serviceList: ServiceList[] = [
  {
    title: 'Навігація',
    id: 'navigation',
    optionList: ['Портфоліо', 'Про нас', 'Парнерство', 'Блог', 'Контакти'],
  },
  {
    title: 'Послуги',
    id: 'services',
    optionList: ['Дизайн', 'Розробка', 'Маркетинг', 'Підтримка'],
  },
  {
    title: 'Розробка',
    id: 'development',
    optionList: [
      'Інтернет-магазин',
      'Корпоративний сайт',
      'Landing Page',
      'Сайт-візитка',
      'Сайт-квіз',
    ],
  },
  {
    title: 'Додаткові послуги',
    id: 'additional-services',
    optionList: [
      'Технічні доопрацювання',
      'Прискорення сайту',
      'Переведення сайту на HTTPS',
      'Очищення від вірусів',
      'Синхронізація з 1С',
    ],
  },
  {
    title: 'Корисні посилання',
    id: 'useful-links',
    optionList: [
      'Політика конфіденційності',
      'Умови використання',
      'Карта сайту',
    ],
  },
];

const FooterNav = () => (
  <nav className="footer-nav">
    <ul>
      {serviceList.map(({ title, id, optionList }) => (
        <FooterNavItem key={id} id={id} title={title} optionList={optionList} />
      ))}
    </ul>
  </nav>
);

export default FooterNav;
