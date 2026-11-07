import Link from "next/link";
import {Button} from "@/components/ui";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold text-red-500">404</h1>
      <p className="mt-4 text-lg">Admin Page not found</p>

      <Link
        href="/admin/dashboard"
      >
          <Button size={'lg'} className="mt-2 cursor-pointer" >
            Go Back Home
          </Button>
      </Link>
    </div>
  );
} 