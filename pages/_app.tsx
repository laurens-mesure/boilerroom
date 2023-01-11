import { Poppins } from "@next/font/google";
import type { AppProps } from "next/app";

const poppins = Poppins({
  weight: ["300", "500", "700"],
  subsets: ["latin"],
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={
        poppins.className +
        "relative flex h-full min-h-screen max-w-full flex-col bg-neutral-900 text-gray-100"
      }
    >
      <Component {...pageProps} />
    </main>
  );
}
