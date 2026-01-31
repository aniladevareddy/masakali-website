export default function MenuSection({ title, items }) {
  return (
    <section style={{ margin: "2rem 0" }}>
      <h2 style={{ borderBottom: "2px solid #ddd", paddingBottom: "0.5rem" }}>
        {title}
      </h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {items.map((item, i) => (
          <li key={i} style={{ padding: "0.5rem 0", fontSize: "1.1rem" }}>
            • {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
