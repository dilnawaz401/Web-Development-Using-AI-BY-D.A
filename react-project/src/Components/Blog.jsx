const Blog = () => {
  const title = "Getting Started with React";
  const author = "Dilnawaz Ansari";
  const date = "05 November 2026";
  const content =
    "React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small, isolated pieces of code called components. This blog post is rendered purely with JSX.";

  return (
    <article>
      <h1>{title}</h1>
      <h3>
        By {author} on {date}
      </h3>
      <p>{content}</p>
    </article>
  );
};

export default Blog;
