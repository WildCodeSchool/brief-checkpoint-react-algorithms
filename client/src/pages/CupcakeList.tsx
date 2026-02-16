import { useEffect, useState } from "react";
import Cupcake from "../components/Cupcake";
import type { AccessoryData, CupcakeData } from "../types";

/* *************************************************************************
const sampleCupcakes: CupcakeArray = [
  {
    id: 10,
    accessory_id: "4",
    accessory: "wcs",
    color1: "blue",
    color2: "white",
    color3: "red",
    name: "France",
  },
  {
    id: 11,
    accessory_id: "4",
    accessory: "wcs",
    color1: "yellow",
    color2: "red",
    color3: "black",
    name: "Germany",
  },
  {
    id: 27,
    accessory_id: "5",
    accessory: "christmas-candy",
    color1: "yellow",
    color2: "blue",
    color3: "blue",
    name: "Sweden",
  },
];
 */

/* you can use sampleCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

function CupcakeList() {
  const [cupcakes, setCupcakes] = useState<CupcakeData[]>([]);
  const [accessories, setAccessories] = useState<AccessoryData[]>([]);
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    async function fetchCupcakes() {
      const response = await fetch("http://localhost:3310/api/cupcakes");
      const data = await response.json();
      setCupcakes(data);
    }
    fetchCupcakes();
  }, []);

  // console.info("cupcakes", cupcakes);

  useEffect(() => {
    async function fetchAccessories() {
      const response = await fetch("http://localhost:3310/api/accessories");
      const data = await response.json();
      setAccessories(data);
    }
    fetchAccessories();
  }, []);

  function filterAccessory(filter: string) {
    setFilter(filter);
    // console.info("filter", filter);
  }

  const filteredCupcakes = cupcakes.filter(
    (cupcake) =>
      Number(cupcake.accessory_id) === Number(filter) || filter === "",
  );
  // console.info("filteredCupcakes", filteredCupcakes);
  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select
            id="cupcake-select"
            onChange={(e) => filterAccessory(e.target.value)}
          >
            <option value="">---</option>
            {/* Step 4: add an option for each accessory */}
            {accessories.map((accessory) => (
              <option key={accessory.id} value={accessory.id}>
                {accessory.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        {/* Step 5: filter cupcakes before repeating */}
        <li className="cupcake-item">
          <Cupcake data={filteredCupcakes} />
        </li>
        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
