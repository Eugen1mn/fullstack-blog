import './Blog.scss';

import { BlogHero, BlogLayout, ContentWrapper } from '../../components';

export default function BlogPage() {
  return (
    <div className="blog-page">
      <BlogHero />

      <ContentWrapper>
        <BlogLayout />
      </ContentWrapper>
    </div>
  );
}
