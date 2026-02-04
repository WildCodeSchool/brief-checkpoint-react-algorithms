import { useParams } from "react-router-dom";

export default function CupcakeDetail() {
  const { id } = useParams();

  return (
    <div>
      <h1>Cupcake ID : {id}</h1>
    </div>
  );
}
