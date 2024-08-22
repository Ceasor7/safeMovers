import PostCard from './PostCard';

const posts = [
  {
    image: '/path/to/image1.jpg',
    title: 'Post Title 1',
    datePublished: 'Jan 1, 2024',
  },
  {
    image: '/path/to/image2.jpg',
    title: 'Post Title 2',
    datePublished: 'Feb 2, 2024',
  },
  {
    image: '/path/to/image2.jpg',
    title: 'Post Title 2',
    datePublished: 'Feb 2, 2024',
  },
  {
    image: '/path/to/image2.jpg',
    title: 'Post Title 2',
    datePublished: 'Feb 2, 2024',
  },
];

const PostCardItems = () => {
  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.title} post={post} />
      ))}
    </div>
  );
};

export default PostCardItems;
