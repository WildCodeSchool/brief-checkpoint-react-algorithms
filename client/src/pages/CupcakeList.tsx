import { useEffect, useState } from "react";
import Cupcake from "../components/Cupcake";

interface IAccesoire {
  id: number;
  name: string;
  slug: string;
}
interface ICupcake {
  id: number;
}

function CupcakeList() {
  const [cupcakes, setCupcakes] = useState([]);
  const [accesoires, setAccesoires] = useState<IAccesoire[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/cupcakes")
      .then((res) => res.json())
      .then((data) => {
        setCupcakes(data);
        // console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [setCupcakes]);

  useEffect(() => {
    fetch("http://localhost:3310/api/accessories")
      .then((res) => res.json())
      .then((data2) => {
        setAccesoires(data2);
        console.log(data2);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [setAccesoires]);

  // Step 3: get all accessories

  // Step 5: create filter state
  // console.log(Cupcake)
  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select id="cupcake-select">
            <option value="">---</option>
            <option value="1">Cherry</option>
            <option value="2">Donut</option>
            <option value="3">Chocolate</option>
            <option value="4">Wild</option>
            <option value="5">Christmas Candy</option>
          </select>
        </label>
      </form>

      <ul className="cupcake-list" id="cupcake-list">
        {cupcakes.map((cupcake) => (
          <li className="cupcake-item" key={cupcake.id}>
            <Cupcake data={cupcake} />
          </li>
        ))}
        {accesoires.map((accesoire) => (
          <li className="cupcake-item" key={accesoire.id}>
            <p>
              <strong>{accesoire.name}</strong>
            </p>
            <p>{accesoire.slug}</p>
          </li>
        ))}

        {/* Step 5: filter cupcakes before repeating */}
        <li className="cupcake-item">
          {/* <Cupcake data={sampleCupcakes[0]} /> */}
        </li>
        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
