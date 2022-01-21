import { GetStaticProps } from 'next';
import Link from 'next/link';

import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.posts}>
        <Link href="/posts">
          <a>
            <strong>Como utilizar Hooks</strong>
            <p>Pensando em sincronização em vez de ciclos de vida.</p>
            <div className={styles.info}>
              <img src="./calendar.png" alt="calendar" />
              <time>15 Mar 2021</time>
              <p>Joseph Oliveira</p>
            </div>
          </a>
        </Link>
        <Link href="/posts">
          <a>
            <strong>Criando um app CRA do zero</strong>
            <p>
              Tudo sobre como criar a sua primeira aplicação utilizando Create
              React App
            </p>
            <div className={styles.info}>
              <time>19 Abr 2021</time>
              <p>Danilo Vieira</p>
            </div>
          </a>
        </Link>
      </div>
      <div className={styles.keepRolling}>
        <a>Carregar mais posts</a>
      </div>
    </main>
  );
}

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient();
//   // const postsResponse = await prismic.query(TODO);

//   // TODO
// };
