import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./Components/PrivateRoute";

import UsersPage from "./Pages/UsersPage";
import HomePage from "./Pages/HomePage";
import MessagesPage from "./Pages/MessagesPage";
import OrdersPage from "./Pages/OrdersPage";
import ProductsPage from "./Pages/ProductsPage";
import ProfilePage from "./Pages/ProfilePage";
import StatisticPage from "./Pages/StatisticPage";

import LogoutPage from "./Pages/LogoutPage";
import LoginPage from "./Pages/LoginPage";

import NoPage from "./Pages/NoPage";

function App() {
  return (
    <div dir="rtl" className="bg-teal-50 h-screen relative font-body">
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<HomePage />} />
            <Route path="messages" element={<MessagesPage />} />
            <Route path="orders" element={<OrdersPage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="statistic" element={<StatisticPage />} />
            <Route path="users" element={<UsersPage />} />
            <Route path="logout" element={<LogoutPage />} />
            <Route path="*" element={<NoPage />} />
          </Route>
          <Route path="login" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
