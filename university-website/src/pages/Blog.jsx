import { useMemo, useState } from "react";
import PageHeader from "../components/PageHeader";
import { posts, allTags } from "../data/posts";

const formatDate = (isoDate) =>
  new Date(isoDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

const Blog = () => {
  const [activeTag, setActiveTag] = useState("All");
  const [search, setSearch] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const visiblePosts = useMemo(() => {
    const term = search.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesTag = activeTag === "All" || post.tags.includes(activeTag);
      const matchesSearch =
        !term ||
        post.title.toLowerCase().includes(term) ||
        post.excerpt.toLowerCase().includes(term) ||
        post.author.toLowerCase().includes(term);
      return matchesTag && matchesSearch;
    });
  }, [activeTag, search]);

  const handleSubscribe = (event) => {
    event.preventDefault();
    setSubscribed(true);
  };

  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="From the Blog"
        subtitle="News, study tips and stories from across the Tech University community."
      />

      {/* ---------- Filters ---------- */}
      <section className="tu-section pb-0">
        <div className="container">
          <div className="row g-3 align-items-center mb-4">
            <div className="col-lg-6">
              <div className="d-flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    className={`btn btn-sm ${
                      activeTag === tag
                        ? "btn-primary"
                        : "btn-outline-secondary"
                    }`}
                    onClick={() => setActiveTag(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="input-group">
                <span className="input-group-text bg-white">
                  <i className="bi bi-search"></i>
                </span>
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search posts by title, topic or author..."
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                />
              </div>
            </div>
          </div>

          <p className="text-secondary small">
            Showing {visiblePosts.length} of {posts.length} posts
            {activeTag !== "All" && (
              <>
                {" "}
                tagged <strong>{activeTag}</strong>
              </>
            )}
          </p>
        </div>
      </section>

      {/* ---------- Post cards ---------- */}
      <section className="tu-section pt-4">
        <div className="container">
          {visiblePosts.length === 0 ? (
            <div className="text-center py-5">
              <i className="bi bi-journal-x display-4 text-secondary"></i>
              <h4 className="fw-bold mt-3">No posts found</h4>
              <p className="text-secondary">
                Try a different search term or tag.
              </p>
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() => {
                  setActiveTag("All");
                  setSearch("");
                }}
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="row g-4">
              {visiblePosts.map((post) => (
                <div className="col-md-6 col-lg-4" key={post.id}>
                  <article className="tu-card h-100 bg-white d-flex flex-column">
                    <img
                      src={post.image}
                      className="w-100"
                      style={{ height: 190, objectFit: "cover" }}
                      alt={post.title}
                      loading="lazy"
                    />
                    <div className="p-4 d-flex flex-column flex-grow-1">
                      <div className="d-flex flex-wrap gap-1 mb-2">
                        {post.tags.map((tag) => (
                          <span
                            className="badge text-bg-light border"
                            key={tag}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h5 className="fw-bold">{post.title}</h5>

                      <div className="text-secondary small mb-3">
                        <i className="bi bi-person me-1"></i>
                        {post.author}
                        <span className="mx-2">•</span>
                        <i className="bi bi-calendar3 me-1"></i>
                        {formatDate(post.date)}
                        <span className="mx-2">•</span>
                        <i className="bi bi-clock me-1"></i>
                        {post.readingTime}
                      </div>

                      <p className="text-secondary flex-grow-1">
                        {post.excerpt}
                      </p>

                      <button
                        type="button"
                        className="btn btn-link px-0 align-self-start fw-semibold"
                      >
                        Read more <i className="bi bi-arrow-right ms-1"></i>
                      </button>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ---------- Newsletter ---------- */}
      <section className="tu-section-alt">
        <div className="container tu-section">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="tu-card bg-white p-4 p-lg-5 text-center">
                <span className="tu-icon-tile mx-auto mb-3">
                  <i className="bi bi-envelope-paper"></i>
                </span>
                <h2 className="fw-bold mb-2">Subscribe to our newsletter</h2>
                <p className="text-secondary mb-4">
                  Get the latest campus news, events and study tips delivered
                  once a month. No spam, ever.
                </p>

                {subscribed ? (
                  <div className="alert alert-success mb-0" role="alert">
                    <i className="bi bi-check-circle me-2"></i>
                    Thanks for subscribing! Please check your inbox to confirm.
                  </div>
                ) : (
                  <form
                    className="row g-2 justify-content-center"
                    onSubmit={handleSubscribe}
                  >
                    <div className="col-sm-8">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="you@example.com"
                        required
                        aria-label="Email address"
                      />
                    </div>
                    <div className="col-sm-4">
                      <button type="submit" className="btn btn-primary w-100">
                        Subscribe
                      </button>
                    </div>
                  </form>
                )}

                <p className="text-secondary small mb-0 mt-3">
                  We respect your privacy. Your email is only used to send the
                  newsletter and you can unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
