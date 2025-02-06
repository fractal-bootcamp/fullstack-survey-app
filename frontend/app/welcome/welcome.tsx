import apiClient from "client";
import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import { useEffect, useState } from "react";

export function Welcome() {
  const [data, setData] = useState<number>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await apiClient.user({ id: 1 }).get();
      if (response.data) {
        console.log(response.data);
        setData(response.data);
      }
    };
    fetchData();
  }, []);

  return (
    <main className="flex items-center justify-center h-screen w-screen">
      <div>{data}</div>
    </main>
  );
}
