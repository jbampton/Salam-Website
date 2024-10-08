"use client";

import { useEffect } from "react";
import "./globals.css";
import "../styles/font.css";
import { usePathname } from "next/navigation";
import nProgress from "nprogress";
import { LayoutProvider } from "@/utils/contexts/LayoutProvider";
import ReactQueryProvider from "@/utils/react-query/ReactQueryProvider";
import React from "react";

function RootLayout({ children }) {
  const pathname = usePathname(); // Get the current path

  useEffect(() => {
    // Function to start the nProgress loading bar
    const handleStart = () => {
      nProgress.start();
    };

    // Function to stop the nProgress loading bar
    const handleComplete = () => {
      nProgress.done();
    };

    // Start the loading bar when the path changes
    handleStart();

    // Stop the loading bar when the new content is loaded
    handleComplete();

    // Cleanup function to stop the loading bar on unmount
    return () => {
      nProgress.done();
    };
  }, [pathname]); // Dependency array to re-run effect on pathname change

  return (
    <>
      <ReactQueryProvider>
        <LayoutProvider>{children}</LayoutProvider>
      </ReactQueryProvider>
    </>
  );
}

export default RootLayout;
