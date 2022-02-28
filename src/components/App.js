// Dependencies
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { StrictMode } from "react";
import { Provider } from "react-redux";

// Store
import store from "../state/store";

// Layout
import Layout from "../layout/Layout";

// Pages
import PlanetDetailsPage from "../pages/PlanetDetailsPage";

const App = () => {
  return (
    <StrictMode>
      <Provider store={store}>
        <HashRouter>
          <Layout>
            <Routes>
              <Route index element={<Navigate to="/earth/overview" />} />
              <Route path="/:planet/overview" element={<PlanetDetailsPage />} />
              <Route
                path="/:planet/structure"
                element={<PlanetDetailsPage />}
              />
              <Route path="/:planet/geology" element={<PlanetDetailsPage />} />
              <Route path="*" element={<Navigate to="/earth/overview" />} />
            </Routes>
          </Layout>
        </HashRouter>
      </Provider>
    </StrictMode>
  );
};

export default App;
