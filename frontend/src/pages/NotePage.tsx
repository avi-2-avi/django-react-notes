import { useParams } from "react-router-dom";

export const NotePage = () => {
  const { id } = useParams();
  return (
    <>
      <h1>NotePage</h1>
      <p>{id}</p>
    </>
  );
};
