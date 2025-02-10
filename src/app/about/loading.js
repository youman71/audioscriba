'use client'
import React, { useState, useEffect } from "react";

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a timeout to change the loading state after 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100000); // 3000ms = 3 seconds

    // Clean up the timeout if the component unmounts before the timeout
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {isLoading ? (
        <>
          <h2>Loading...</h2>
          <h1>Please youssef wait while we load your data.</h1>
        </>
      ) : (
        <h2>Data Loaded!</h2> // After 3 seconds, show "Data Loaded"
      )}
    </div>
  );
}
