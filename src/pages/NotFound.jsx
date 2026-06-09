import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold">404</h1>
        <p className="text-gray-500 mt-2">Page not found.</p>
        <Link className="underline mt-3 inline-block" to="/">Go home</Link>
      </div>
    </div>
  );
}
