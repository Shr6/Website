export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      <div className="wrap">
        <p>© {new Date().getFullYear()} Shrijan Pokharel. Built with React &amp; Vite.</p>
        {/* Real href so it still works (jumps to top) without JS or if the
            click handler is ever removed — just not smoothly animated. */}
        <a className="back-to-top" href="#" onClick={scrollToTop}>
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
