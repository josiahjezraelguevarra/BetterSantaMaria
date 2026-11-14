import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-12 px-4 sm:px-6">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
        <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center text-3xl mx-auto font-bold">
          404
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-site-text">Page Not Found</h1>
          <p className="text-sm text-site-text-light leading-relaxed">
            The page or municipal document you requested could not be located. It may have been moved or updated.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Link href="/" className="btn btn-primary text-sm">
            <i className="bi bi-house-door"></i> Return Home
          </Link>
          <Link href="/services" className="btn btn-secondary text-sm">
            <i className="bi bi-grid"></i> Browse Services
          </Link>
        </div>
      </div>
    </div>
  );
}
