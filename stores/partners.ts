import type { ActiveFilters, Filters, Partner } from "~/types/partner.type";

export const usePartnersStore = defineStore("partners", () => {
  const { data, status } = useLazyFetch("/api/partners", {
    key: "partners",
    server: false,
  });
  const filteredPartners = ref<Partner[]>([]);

  watch(data, () => {
    if (data.value) {
      filteredPartners.value = data.value.partners;
    }
  },
    { once: true }
  );

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

  const activeFilters = ref<ActiveFilters>({
    country: null,
    city: null,
    productType: null,
    products: null,
    partnerType: []
  });

  const getFilteredPartners = () => {
    if (data.value) {
      filteredPartners.value = data.value.partners.filter(partner => {
        const { country, city, productType, products, partnerType } = activeFilters.value;
        if (country && partner.country !== country) return false;
        if (city && partner.city !== city) return false;
        if (productType && partner.productType !== productType) return false;
        if (products && !partner.products.includes(products)) return false;
        if (partnerType.length > 0 && !partnerType.some(type => partner.partnerType.includes(type))) {
          return false;
        }
        return true;
      });
    }
  };

  const clearFiltered = () => {
    if (data.value) {
      filteredPartners.value = data.value.partners
    }
    activeFilters.value = {
      country: null,
      city: null,
      products: null,
      productType: null,
      partnerType: [],
    }
  }
  return {
    filteredPartners,
    status,
    displayFilters,
    activeFilters,
    getFilteredPartners,
    clearFiltered
  };
});
