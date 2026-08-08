export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <p>© {new Date().getFullYear()} Shrijan Pokharel. Built with React &amp; Vite.</p>
        <a className="back-to-top" href="#top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
