import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';

const HomePage = lazy(() => import("../../pages/Home/Home"));
const RegisterPage = lazy(() => import("../../pages/Registration/Registration"));
const LoginPage = lazy(() => import("../../pages/Login/Login"));
const ContactsPage = lazy(() => import("../../pages/Contacts/Contacts"));

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
};

export default App;
