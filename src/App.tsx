import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Step1 from './pages/Step1';
import Step2 from './pages/Step2';
import { step2Loader } from './loaders/step2Loader';
import Step3 from './pages/Step3';

const router = createBrowserRouter([
  { path: '/', element: <Navigate to="/step1" replace /> },
  { path: '/step1', element: <Step1 /> },
  { path: '/step2', element: <Step2 />, loader: step2Loader },
  { path: '/step3', element: <Step3 /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}