import './category-list.scss';
import { CategoryListItem } from '../../components';

export const blogCategories = [
  {
    slug: 'ai',
    title: 'ШІ',
  },
  {
    slug: 'instructions',
    title: 'Інструкції',
  },
  {
    slug: 'international-promotion',
    title: 'Просування за кордоном',
  },
  {
    slug: 'cases',
    title: 'Кейси',
  },
  {
    slug: 'internet-marketing',
    title: 'Інтернет маркетинг',
  },
  {
    slug: 'ppc',
    title: 'Контекстна реклама',
  },
  {
    slug: 'seo',
    title: 'Просування сайтів',
  },
  {
    slug: 'smm',
    title: 'Соціальні мережі',
  },
];

const CategoryList = () => {
  return (
    <nav className="category-list">
      <ul>
        {blogCategories.map(({ slug, title }) => (
          <CategoryListItem key={slug} slug={slug} title={title} />
        ))}
      </ul>
    </nav>
  );
};

export default CategoryList;
