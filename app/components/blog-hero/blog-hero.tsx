import './blog-hero.scss';
import Image from 'next/image';

const BlogHero = () => {
  return (
    <article className="blog-hero">
      <video autoPlay muted loop playsInline preload="metadata">
        <source src="/video/blog-hero.mp4" type="video/mp4" />
      </video>

      <section>
        <p>
          Головна » <span>Партнерство</span>
        </p>
      </section>

      <section>
        <h1>Блог</h1>
        <button>
          <span>Підписатись на розсилку</span>
          <Image
            src="/icons/move-right.svg"
            alt="arrow right"
            width={24}
            height={24}
            priority
          />
        </button>
      </section>

      <Image
        className={'blog-hero__scroll'}
        src="/icons/scroll.svg"
        alt="scroll"
        width={70}
        height={70}
        priority
      />
    </article>
  );
};

export default BlogHero;
