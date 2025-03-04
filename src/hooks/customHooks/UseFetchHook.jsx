/* eslint-disable no-unused-vars */
import { useFetch } from "usefetch";

const UseFetchHook = () => {
  const { isLoading, data, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (error) {
    return (
      <div>
        <p>Code: ${error.status}</p>
        <p>Message: ${error.statusText}</p>
      </div>
    );
  }
};

export default UseFetchHook;
