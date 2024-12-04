export type Partner = {
  id: number;
  logo: string;
  name: string;
  phone: string;
  email: string;
  website: string;
  status: "Start" | "Premier";
  country: string;
  city: string;
  productType: string;
  products: string[];
  partnerType: string[];
};
