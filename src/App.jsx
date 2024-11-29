import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Enterprise from "./components/Enterprise";
import Support from "./components/Support";
import Features from "./components/Features";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <div className="h-screen max-w-6xl mx-auto p-4 text-slate-900 flex flex-col">
            <Header />
            <Outlet />
            <Footer />
          </div>
        }
      >
        <Route path="home" index element={<Home />} />
        <Route path="features" element={<Features />} />
        <Route path="enterprise" element={<Enterprise />} />
        <Route path="support" element={<Support />} />
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
