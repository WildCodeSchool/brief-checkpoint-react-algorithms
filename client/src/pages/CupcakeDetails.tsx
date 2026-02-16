import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Cupcake from "../components/Cupcake";
import type { AccessoryData, CupcakeData } from "../types";

function CupcakeDetails() {
  const { id } = useParams();
  const [cupcake, setCupcake] = useState<CupcakeData>({
    id: 0,
    accessory_id: 0,
    accessory: "",
    color1: "",
    color2: "",
    color3: "",
    name: "",
  });
  const [accessories, setAccessories] = useState<AccessoryData>({
    id: 0,
    name: "",
    slug: "",
  });

  useEffect(() => {
    async function fetchCupcake() {
      const response = await fetch(`http://localhost:3310/api/cupcakes/${id}`);
      const data = await response.json();
      setCupcake(data);
    }
    fetchCupcake();
  }, [id]);

  useEffect(() => {
    async function fetchAccessory() {
      const response = await fetch(
        `http://localhost:3310/api/accessories/${cupcake.accessory_id}`,
      );
      const data = await response.json();
      setAccessories(data);
    }
    fetchAccessory();
  }, [cupcake.accessory_id]);
  // console.info("cupcake", cupcake);
  return (
    <>
      <div
        className="center"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Link to="/cupcakes" className="secondary-btn btn">
          ⭠ Back to list
        </Link>
        <Cupcake data={[cupcake]} />
        <div className="cupcake-id">Id ⭢{cupcake.id}</div>
        <div className="cupcake-name">Name ⭢{cupcake.name}</div>
        <div className="cupcake-colors"> Colors : </div>
        <div className="cupcake-color1">Color 1 ⭢{cupcake.color1}</div>
        <div className="cupcake-color2">Color 2 ⭢{cupcake.color2}</div>
        <div className="cupcake-color3">Color 3 ⭢{cupcake.color3}</div>
        <div className="cupcake-accessory">
          {" "}
          Accessory details for cupcake {cupcake.name} :{" "}
        </div>
        <div className="cupcake-accessory-id">
          Accessory id ⭢{cupcake.accessory_id}
        </div>
        <div className="cupcake-accessory-slug">
          Accessory slug ⭢{cupcake.accessory}
        </div>
        <div className="cupcake-accessory-name">
          Accessory name ⭢{accessories.name}
        </div>
      </div>
    </>
  );
}

export default CupcakeDetails;
