import { useLoaderData, useParams } from "react-router-dom";
import Cupcake from "../components/Cupcake";

export default function CupcakeDetails() {
  const cupcakesList: CupcakeArray = useLoaderData();
  const { id } = useParams();
  return (
    <>
      {cupcakesList
        .filter((item) => item.id.toString() === id)
        .map((cupcake) => (
          <Cupcake key={cupcake.id} data={cupcake} />
        ))}
    </>
  );
}
