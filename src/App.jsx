import { Route, Routes } from "react-router-dom";

import UsersPage from "./pages/UsersPage";
import MutationUserPage from "./pages/UserMutationPage";

const App = () => (
  <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
    <h1 className="text-2xl font-bold text-center text-gray-700 p-2">Users CRUD with React-Redux</h1>
    <Routes>
      <Route path="/" element={<UsersPage />} />
      <Route path="/add-user" element={<MutationUserPage />} />
      <Route path="/update-user" element={<MutationUserPage />} />
    </Routes>
  </div>
);

export default App;
