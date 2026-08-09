import { RouterLink } from "../router.jsx";

export default function NotFoundPage() {
  return (
    <section className="page-section">
      <div className="wrap" style={{ textAlign: "center" }}>
        <div className="eyebrow" style={{ justifyContent: "center" }}>
          404
        </div>
        <h2 className="section-heading" style={{ margin: "0 auto" }}>
          Page not found.
        </h2>
        <p className="section-sub" style={{ margin: "18px auto 0" }}>
          That page doesn't exist — it may have moved.
        </p>
        <div style={{ marginTop: 32 }}>
          <RouterLink className="btn btn-primary" to="/">
            Back to home
          </RouterLink>
        </div>
      </div>
    </section>
  );
}
