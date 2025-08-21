export default function ({ children }) {
  return (
    <div>
      <h1>Blogs</h1>
      <div
        style={{
          marginTop: "50px",
          background: "blue",
          padding: "20px",
          borderRadius: "20px",
        }}
      >
        {children}
      </div>
    </div>
  );
}
