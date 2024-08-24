// layout.js
import { Inter } from "next/font/google";
import "../globals.css";
import "../../styles/font.css";
import SecondHeader from "@/components/templates/SecondHeader";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/templates/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "salam",
  description: "salam language",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Toaster
          reverseOrder={false}
          toastOptions={{
            // Define default options
            className: "",
            duration: 2000,
            style: {
              background: "#363636",
              color: "#fff",
            },
          }}
        />

        <div className="relative w-full min-h-screen overflow-auto flex flex-col justify-start">
          <SecondHeader />
          <div className="w-full h-full flex flex-col flex-grow">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
