import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import Layout from "./components/Layout";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import AboutContentPage from "./pages/AboutContentPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />}>
          <Route index element={<AboutContentPage slug="bio" />} />
          <Route path="work" element={<AboutContentPage slug="work" />} />
          <Route
            path="interests"
            element={<AboutContentPage slug="interests" />}
          />
          <Route
            path="university"
            element={<AboutContentPage slug="university" />}
          />
          <Route
            path="certifications"
            element={<AboutContentPage slug="certifications" />}
          />
        </Route>
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
