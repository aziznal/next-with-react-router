"use client";

import { useState, useEffect } from "react";

export function useSlowData() {
  const [data, setData] = useState<string>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a 3-second loading time
    const timer = setTimeout(() => {
      setData("Data loaded successfully after 3 seconds!");
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return { data, isLoading };
}

// Create a wrapper for our slow resource
export const createSlowResource = () => {
  let status = "pending";
  let result: any;

  const promise = new Promise((resolve) => {
    setTimeout(() => {
      status = "success";
      result = "Data loaded successfully after 3 seconds!";
      resolve(result);
    }, 3000);
  });

  return {
    read() {
      if (status === "pending") {
        throw promise;
      }
      return result;
    },
  };
};
