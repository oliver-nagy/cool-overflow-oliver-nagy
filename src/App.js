import './App.css';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import About from "./pages/About";
import Home from "./pages/Home";
import Questions from "./pages/Questions";
import Help from "./pages/Help";
import Question from "./pages/Question";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />}/>
          <Route path="about" element={<About />} />
          <Route path="questions" element={<Questions />} />
          <Route path="help" element={<Help />} />
          <Route path="questions/:questionId" element={<Question />} />
        </Route>
    )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
