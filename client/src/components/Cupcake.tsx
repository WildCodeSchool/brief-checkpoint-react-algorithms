import "./Cupcake.css";
import { Link } from "react-router-dom";
import type { CupcakeData } from "../types";

interface CupcakeProps {
  data: CupcakeData[];
}

function Cupcake({ data }: CupcakeProps) {
  if (data.length === 0) {
    return <div>No cupcakes found</div>;
  }
  return (
    <div className="cupcake-list">
      {data.map((CupcakeData, index) => (
        <Link to={`/cupcakes/${CupcakeData.id}`} key={index}>
          <div className="cupcake-container">
            <div className="cupcake">
              <div className={`accessory ${CupcakeData.accessory}`} />
              <div className="cream">
                <div
                  className="cream-1"
                  style={{
                    backgroundColor: CupcakeData.color1,
                  }}
                />
                <div
                  className="cream-2"
                  style={{
                    backgroundColor: CupcakeData.color2,
                  }}
                />
                <div
                  className="cream-3"
                  style={{
                    backgroundColor: CupcakeData.color3,
                  }}
                />
              </div>
              <div className="bottom">
                <div className="bottom-in">
                  <div className="face">
                    <div className="eyes">
                      <div className="left-eye" />
                      <div className="right-eye" />
                    </div>
                    <div className="mouth" />
                  </div>
                </div>
              </div>
            </div>
            <div className="cupcake-name">{CupcakeData.name}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Cupcake;
