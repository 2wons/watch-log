import { Helmet } from "react-helmet-async";

type HeadProps = {
  title?: string;
  description?: string;
};

const Head = ({ title = "", description = "" }: HeadProps = {}) => {
  return (
    <Helmet
      title={title ? `${title} | Letterboxd` : undefined}
      defaultTitle="Letterboxd"
    >
      <meta name="description" content={description} />
    </Helmet>
  );
};
export default Head;
