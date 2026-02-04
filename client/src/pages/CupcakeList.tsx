import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cupcake from "../components/Cupcake";

/* ************************************************************************* */
interface ICupcake {
  id: number;
  accessory_id: string;
  accessory: string;
  color1: string;
  color2: string;
  color3: string;
  name: string;
}
interface IAccessories {
  id: number;
  name: string;
  slug: string;
}

/* you can use sampleCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

function CupcakeList() {
  // Step 1: get all cupcakes
  const url_cupcake = "http://localhost:3310/api/cupcakes";
  const url_accessories = "http://localhost:3310/api/accessories ";
  const [cupcakeState, setCupcakeState] = useState([]);
  const [accessories, setAccessories] = useState([]);

  useEffect(() => {
    fetch(url_cupcake)
      .then((res) => res.json())
      .then((data) => setCupcakeState(data))
      .catch((err) => console.log(err));
  }, []);

  // Step 3: get all accessories
  useEffect(() => {
    fetch(url_accessories)
      .then((res) => res.json())
      .then((data) => setAccessories(data))
      .catch((err) => console.log(err));
  }, []);

  // Step 5: create filter state

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select id="cupcake-select">
            <option value="">---</option>
            {accessories.map((accessorie: IAccessories) => (
              <option value={accessorie.id} key={accessorie.id}>
                {accessorie.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 5: filter cupcakes before repeating */}
        {cupcakeState.map((cupcake: ICupcake) => (
          <Link to={`${cupcake.id}`} key={cupcake.id}>
            <li key={cupcake.id} className="cupcake-item">
              <Cupcake data={cupcake} />
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}

export default CupcakeList;
