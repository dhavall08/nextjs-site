import Link from 'next/link';

function PageNotFound() {
  return (
    <div className="container">
      <div className="d-flex flex-column justify-content-center align-items-center text-center py-5">
        <h1 className="display-3 text-primary">404</h1>
        <p className="h5">Page Not Found</p>
        <p className="mb-4">
          Sorry! The page you&#39;re looking for doesn&#39;t exist.
        </p>
        <Link href="/">
          <a className="btn btn-outline-primary">Go to Homepage</a>
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
