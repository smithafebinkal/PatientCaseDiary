import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import PatientInTake from './components/Patient/Patient';
import CaseList from './pages/CaseList';
import CaseEdit from './pages/CaseEdit';
import './App.scss';
import './components/TopNavigation/TopNavigation.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/patient-intake" element={<PatientInTake />} />
        <Route path="/cases" element={<CaseList />} />
        <Route path="/cases/:id" element={<CaseEdit />} />
        <Route path="/cases/new" element={<CaseEdit />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
