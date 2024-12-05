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

export type Filters = {
  partnerType: string[];
  country: string[];
  city: string[];
  productType: string[];
  products: string[];
};

export type ActiveFilters = {
  country: string | null,
  city: string | null,
  productType: string | null,
  products: string | null,
  partnerType: string[]
}