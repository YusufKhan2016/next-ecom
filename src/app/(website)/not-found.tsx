import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold text-red-500">404</h1>
      <p className="mt-4 text-lg">Page not found</p>

      <Link
        href="/"
        className="mt-6 px-4 py-2 bg-orange-500 text-white rounded"
      >
        Go Back Home
      </Link>
    </div>
  );
}