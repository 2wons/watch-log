import Head from "@/components/seo/head";
import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div className="p-5">
      <Head title="Page Not Found" />
      <h1 className="text-4xl font-bold">Oops!</h1>
      <p>Sorry, an unexpected error has occured.</p>
      <p className="text-gray-600">{error.statusText || error.message}</p>
    </div>
  );
};

export default NotFound;
