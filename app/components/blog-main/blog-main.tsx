import {
  TagFilter,
  SearchBar,
  BlogList,
  PaginationMenu,
} from '../../components';
import './blog-main.scss';

const BlogMain = () => {
  return (
    <section className={'blog-main'}>
      <SearchBar />

      <TagFilter />

      <BlogList />

      <PaginationMenu />
    </section>
  );
};

export default BlogMain;
