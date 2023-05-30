import { Routes, Route } from "react-router-dom";

import Navigation from "./Routes/Navigation/Navigation.component";

import Home from "./Routes/Home/Home.component";
import Authentication from "./Routes/authentication/authentication.component";

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
