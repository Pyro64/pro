type Filters = {
  partnerType: string[];
  country: string[];
  city: string[];
  productType: string[];
  products: string[];
};

export const usePartnersStore = defineStore("partners", () => {
  const { data, status } = useLazyFetch("/api/partners", {
    key: "partners",
    server: false,
  });

  const displayFilters = computed<Filters | null>(() => {
    if (data.value) {
      const countrySet = new Set<string>();
      const citySet = new Set<string>();
      const partnerTypeSet = new Set<string>();
      const productTypeSet = new Set<string>();
      const productsSet = new Set<string>();

      const result = data.value.partners.reduce(
        (acc, partner) => {
          partner.partnerType.forEach((type) => acc.partnerTypeSet.add(type));
          partner.products.forEach((product) => acc.productsSet.add(product));
          acc.countrySet.add(partner.country);
          acc.citySet.add(partner.city);
          acc.productTypeSet.add(partner.productType);
          return acc;
        },
        { partnerTypeSet, countrySet, productTypeSet, citySet, productsSet }
      );

      return {
        country: Array.from(result.countrySet),
        city: Array.from(result.citySet),
        partnerType: Array.from(result.partnerTypeSet),
        productType: Array.from(result.productTypeSet),
        products: Array.from(result.productsSet),
      };
    } else {
      return null;
    }
  });

  const activeFilters = ref({
    country: null,
    city: null,
    productType: null,
  });
  const filteredPartners = computed(() => data);

  return { filteredPartners, status, displayFilters, activeFilters };
});
