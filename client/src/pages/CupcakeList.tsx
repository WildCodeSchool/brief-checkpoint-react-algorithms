import { ChangeEvent, useEffect, useState } from "react";
import Cupcake from "../components/Cupcake";

/* ************************************************************************* */
// const sampleCupcakes: CupcakeArray = [
//    {
//       id: 10,
//       accessory_id: "4",
//       accessory: "wcs",
//       color1: "blue",
//       color2: "white",
//       color3: "red",
//       name: "France",
//    },
//    {
//       id: 11,
//       accessory_id: "4",
//       accessory: "wcs",
//       color1: "yellow",
//       color2: "red",
//       color3: "black",
//       name: "Germany",
//    },
//    {
//       id: 27,
//       accessory_id: "5",
//       accessory: "christmas-candy",
//       color1: "yellow",
//       color2: "blue",
//       color3: "blue",
//       name: "Sweden",
//    },
// ];

/* you can use sampleCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */
interface ICupcakes {
   id: number;
   accessory_id: string;
   accessory: string;
   color1: string;
   color2: string;
   color3: string;
   name: string;
}
function CupcakeList() {
   // Step 1: get all cupcakes
   const [cupcakesData, setCupcakesData] = useState<ICupcakes[]>([]);
   const [select, setSelect] = useState<string>("");
   useEffect(() => {
      fetch("http://localhost:3310/api/cupcakes")
         .then((res) => res.json())
         .then((data) => setCupcakesData(data));
   }, []);

   // Step 3: get all accessories
   const getAllAccessories: string[] = cupcakesData.map((item) => {
      return item.accessory;
   });
   const cleanGetAllAcceccories = [...new Set(getAllAccessories)];
   // Step 5: create filter state

   const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
      const newValue = e.target.value;
      setSelect(newValue);
   };
   console.log(select);

   return (
      <>
         <h1>My cupcakes</h1>
         <form className="center">
            <label htmlFor="cupcake-select">
               {/* Step 5: use a controlled component for select DONE */}
               Filter by{" "}
               <select
                  id="cupcake-select"
                  value={select}
                  onChange={handleSelectChange}
               >
                  {cleanGetAllAcceccories.map((option, index) => {
                     return (
                        <option key={index} value={option}>
                           {option}
                        </option>
                     );
                  })}
                  {/* Step 4: add an option for each accessory DONE */}
               </select>
            </label>
         </form>
         <ul className="cupcake-list" id="cupcake-list">
            {/* Step 2: repeat this block for each cupcake DONE */}
            {/* Step 5: filter cupcakes before repeating */}
            <li className="cupcake-item">
               {cupcakesData
                  .filter((cupcake) => {
                     return select === "" || cupcake.accessory === select;
                  })
                  .map((cupcake) => (
                     <Cupcake key={cupcake.id} data={cupcake} />
                  ))}
            </li>
            {/* end of block */}
         </ul>
      </>
   );
}

export default CupcakeList;
