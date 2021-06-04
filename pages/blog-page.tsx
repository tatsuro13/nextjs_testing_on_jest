import { GetStaticProps } from 'next';
import Layout from '../components/Layout';
import Post from '../components/Post';
import { getAllPostsData } from '../lib/fetch';
import { POST } from '../types/Types';

interface STARICPROPS {
  posts: POST[];
}

const BrogPage: React.FC<STARICPROPS> = ({ posts }) => {
  return (
    <Layout title="BrogPage">
      <p className="text-4xl mb-10">Blog Page</p>
      <ul>{posts && posts.map((post) => <Post key={post.id} {...post} />)}</ul>
    </Layout>
  );
};

export default BrogPage;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPostsData();
  return {
    props: { posts },
  };
};
