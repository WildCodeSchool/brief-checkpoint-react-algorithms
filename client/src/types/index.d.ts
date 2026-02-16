type Cupcake = {
  id: number;
  accessory_id: string;
  accessory: string;
  color1: string;
  color2: string;
  color3: string;
  name: string;
};

type CupcakeArray = Cupcake[];

export interface CupcakeData {
  id: number;
  accessory_id: number;
  accessory: string;
  color1: string;
  color2: string;
  color3: string;
  name: string;
}

export interface AccessoryData {
  id: number;
  name: string;
  slug: string;
}
