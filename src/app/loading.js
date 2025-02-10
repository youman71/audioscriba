'use client'
import React, { useState, useEffect } from "react";

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a timeout to change the loading state after 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1); // Waits for 3000ms (3 seconds)

    // Cleanup the timeout if the component unmounts before 3 seconds
    return () => clearTimeout(timer);
  }, []); // The empty dependency array ensures this runs only once, when the component mounts

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {isLoading ? (
        <>
          <h2>Loading...</h2>
          <p>Please wait while we load your data.</p>
        </>
      ) : (
        <h2>Data Loaded!</h2> // This will show after 3 seconds
      )}
    </div>
  );
}
