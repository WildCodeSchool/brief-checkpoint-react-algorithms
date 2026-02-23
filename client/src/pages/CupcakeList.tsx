import { useEffect, useState } from "react";
import Cupcake from "../components/Cupcake";

/* ************************************************************************* */
// const sampleCupcakes: CupcakeArray = [
//   {
//     id: 10,
//     accessory_id: "4",
//     accessory: "wcs",
//     color1: "blue",
//     color2: "white",
//     color3: "red",
//     name: "France",
//   },
//   {
//     id: 11,
//     accessory_id: "4",
//     accessory: "wcs",
//     color1: "yellow",
//     color2: "red",
//     color3: "black",
//     name: "Germany",
//   },
//   {
//     id: 27,
//     accessory_id: "5",
//     accessory: "christmas-candy",
//     color1: "yellow",
//     color2: "blue",
//     color3: "blue",
//     name: "Sweden",
//   },
// ];

/* you can use sampleCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

interface CupeCake {
  id: number;
  accessory_id: string;
  accessory: string;
  color1: string;
  color2: string;
  color3: string;
  name: string;
}

interface Accessory {
  id: number;
  name: string;
  slug: string;
}

function CupcakeList() {
  // States
  const [cupCake, setCupCake] = useState<CupeCake[]>([]);
  const [accessories, setAccessories] = useState<Accessory[]>([]);
  const [filter, setFilter] = useState("");

  // Step 1: get all cupcakes
  useEffect(() => {
    async function getAllCupecakes() {
      const response = await fetch("http://localhost:3310/api/cupcakes");
      const result = await response.json();
      setCupCake(result);
    }
    getAllCupecakes();
  }, []);

  // Step 3: get all accessories
  useEffect(() => {
    async function getALLAccessories() {
      const response = await fetch("http://localhost:3310/api/accessories");
      const result = await response.json();
      setAccessories(result);
    }
    getALLAccessories();
  }, []);

  // Step 5: create filter state

  // si l'option du select change je lui dis de m'afficher que les cupecakes qui ont cet accessoire
  function handleAccessories(e: React.ChangeEvent<HTMLSelectElement>) {
    console.log(e.target.value);
    setFilter(e.target.value);
  }

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{}
          <select id="cupcake-select" onChange={handleAccessories}>
            <option value="">All</option>
            {/* Step 4: add an option for each accessory */}
            {accessories.map((el) => (
              <option key={el.id} value={el.id}>
                {el.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 5: filter cupcakes before repeating */}
        {cupCake
          .filter((item) => (filter ? item.accessory_id === filter : item), {
            /* Step 2: repeat this block for each cupcake */
          })
          .map((cupcake) => (
            <li key={cupcake.id} className="cupcake-item">
              <Cupcake data={cupcake} />
            </li>
          ))}

        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
