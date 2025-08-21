import Link from "next/link";
export default async function PostsPage(){
  const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
    next:{
      revalidate:120,
    }
  });
  const posts = await response.json();
  const postsJsx = posts.map((post) => {
    return (
      <Link key={post.id} href={`/posts/${post.id}`}>
      <div style={{width:"70%",
        bachground:"#fff",
        padding:"3rem"
        }}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
      </Link>
    )
  });
  console.log(posts);
  return (
    <div>
      <h1>Posts</h1>
      {postsJsx}
    </div>
  )
}