import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import Layout from "./components/Layout";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import AboutBioPages from "./pages/about/AboutBioPages";
import AboutUniversityPages from "./pages/about/AboutUniversity.Page";
import AboutWorkPages from "./pages/about/AboutWorkPages";
import AboutCertificationsPage from "./pages/about/AboutCertificationsPage";
import AboutInterestsPage from "./pages/about/AboutInterestsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />}>
          <Route index element={<AboutBioPages />} />
          <Route path="work" element={<AboutWorkPages />} />
          <Route path="interests" element={<AboutInterestsPage />} />
          <Route path="university" element={<AboutUniversityPages />} />
          <Route path="certifications" element={<AboutCertificationsPage />} />
        </Route>
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
