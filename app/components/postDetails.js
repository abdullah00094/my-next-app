export default async function PostDetails({ postId }) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      next: {
        revalidate: 120,
      },
    }
  );
  const post = await response.json();
  return (
    <div>
      <div>
        <h1>post ID : {post.id}</h1>
        <h1>post title : {post.title}</h1>
        <h1>post user : {post.userId}</h1>
      </div>
    </div>
  );
}
