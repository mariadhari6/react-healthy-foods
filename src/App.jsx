import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import HomeContext from "./contexts/HomeContext";
import Recipe from "./pages/Recipe";
const { FoodsProvider } = HomeContext;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <FoodsProvider>
                <Home />
              </FoodsProvider>
            }
          />
          <Route path="about" element={<About />} />
          <Route path="foods">
            <Route path="recipe/:foodId" element={<Recipe />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
