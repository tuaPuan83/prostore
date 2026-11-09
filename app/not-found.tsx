import Image from "next/image";
import Link from "next/link";

import { APP_NAME } from "@/lib/constants";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Image
        src="/images/logo.svg"
        width={48}
        height={48}
        alt={`${APP_NAME} logo`}
      />

      <div className="w-full max-w-md rounded-lg p-6 text-center shadow-md">
        <h1 className="mb-4 text-3xl font-bold">Not Found</h1>

        <p className="text-destructive">Could not find requested page.</p>

        <Link
          href="/"
          className={`${buttonVariants({ variant: "outline" })} mt-4`}
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
