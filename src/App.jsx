import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import RecipeProvider from "./providers/RecipeProvider";
import FoodsProvider from "./providers/FoodsProvider";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<FoodsProvider />} />
          <Route path="about" element={<About />} />
          <Route path="foods">
            <Route path="recipe/:foodId" element={<RecipeProvider />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
