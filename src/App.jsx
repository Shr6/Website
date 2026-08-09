import { RouterProvider, useRouter } from "./router.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ExperiencePage from "./pages/ExperiencePage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import SkillsPage from "./pages/SkillsPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

// path -> page component. Add new pages here.
const ROUTES = {
  "/": Home,
  "/about": AboutPage,
  "/experience": ExperiencePage,
  "/projects": ProjectsPage,
  "/skills": SkillsPage,
  "/contact": ContactPage,
};

function Routes() {
  const { path } = useRouter();
  const Page = ROUTES[path] || NotFoundPage;
  return <Page />;
}

export default function App() {
  return (
    <RouterProvider>
      <Navbar />
      <main>
        <Routes />
      </main>
      <Footer />
    </RouterProvider>
  );
}
