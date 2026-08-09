import { createContext, useContext, useEffect, useState, useCallback } from "react";

// A minimal client-side router — no external dependency, so every line of
// it runs on plain browser APIs (History API + popstate). It renders real
// <a href="..."> links (RouterLink below) that work even if JS fails to
// load (the browser just does a normal navigation, which the GitHub Pages
// 404.html redirect trick — see public/404.html — turns back into the
// right in-app route).

const RouterContext = createContext(null);

export function RouterProvider({ children }) {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const navigate = useCallback((to) => {
    if (to === window.location.pathname) return;
    window.history.pushState({}, "", to);
    setPath(to);
    // New "page" — jump to top instantly rather than inheriting the
    // smooth-scroll behaviour used for in-page anchors.
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const ctx = useContext(RouterContext);
  if (!ctx) throw new Error("useRouter must be used inside a RouterProvider");
  return ctx;
}

// A real <a href> — crawlable, middle-click/"open in new tab" still works,
// and it degrades to a normal full-page navigation without JS. With JS, we
// intercept plain left-clicks to route client-side instead of reloading.
export function RouterLink({ to, className, children, onClick, ...rest }) {
  const { navigate } = useRouter();

  const handleClick = (e) => {
    if (onClick) onClick(e);
    const isModifiedClick =
      e.defaultPrevented ||
      e.button !== 0 ||
      e.metaKey ||
      e.altKey ||
      e.ctrlKey ||
      e.shiftKey;
    if (isModifiedClick) return;
    e.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} className={className} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
