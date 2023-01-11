import { ReactNode } from "react";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="relative flex h-full min-h-screen max-w-full flex-col bg-gray-100 font-poppins text-stone-900 transition-colors duration-500 dark:bg-neutral-900 dark:text-stone-100">
      {children}
    </main>
  );
}
