import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layout/Layout';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import Chat from './pages/Chat';
import Email from './pages/Email';
import Authentication from './pages/Authentication';
import NotFound from './pages/NotFound';
import UserManagement from './pages/UserManagement';
import AccessControl from './pages/AccessControl';
import SystemSettings from './pages/SystemSettings';
import Integrations from './pages/Integrations';
import Reports from './pages/Reports';
import Notifications from './pages/Notifications';
import AuditTrail from './pages/AuditTrail';
import DataSecurity from './pages/DataSecurity';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="Dashboard" element={<Navigate to="/dashboard" replace />} /> {/* 👈 redirect */}
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
          <Route path="chat" element={<Chat />} />
          <Route path="email" element={<Email />} />
          <Route path="authentication" element={<Authentication />} />
          <Route path="users" element={<div className="p-6 text-white">Users Page</div>} />
          <Route path="*" element={<NotFound />} />
          <Route path="user-management" element={<UserManagement />} />
          <Route path="access-control" element={<AccessControl />} />
          <Route path="system-settings" element={<SystemSettings />} />
          <Route path="integrations" element={<Integrations />} />
          <Route path="reports" element={<Reports />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="audit-trail" element={<AuditTrail />} />
          <Route path="data-security" element={<DataSecurity />} />

        </Route>
      </Routes>
    </Router>
  );
}
