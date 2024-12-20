import { Partner } from "~/types/partner.type";

export default defineEventHandler(
  async (): Promise<{ partners: Partner[] }> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          partners: [
            {
              id: 1,
              logo: "ALGRUM",
              name: "ИП Полоса Д.А. (Центр Защиты Информации)",
              phone: "+7 (495) 644-33-39",
              email: "legion@info.ru",
              website: "www.legionsecurity.ru",
              status: "Start",
              country: "Россия",
              city: "Москва",
              productType: "Для дома",
              products: ["Антивирус"],
              partnerType: ["Партнеры Retail", "Партнеры Corporate"],
            },
            {
              id: 2,
              logo: "EcoPack",
              name: "Programos (Програмос-Проекты, ООО)",
              phone: "+7 (495) 644-33-39",
              email: "legion@info.ru",
              website: "www.legionsecurity.ru",
              status: "Start",
              country: "Россия",
              city: "Москва",
              productType: "Для бизнеса",
              products: ["Passwork"],
              partnerType: ["Online партнеры"],
            },
            {
              id: 3,
              logo: "ALGRUM",
              name: "AIRSoft (ГК АИР-СОФТ, ООО)",
              phone: "+7 (495) 644-33-39",
              email: "legion@info.ru",
              website: "www.legionsecurity.ru",
              status: "Premier",
              country: "Россия",
              city: "Москва",
              productType: "Для бизнеса",
              products: ["GetScreen"],
              partnerType: ["Education партнеры", "MSP Партнеры"],
            },
            {
              id: 4,
              logo: "ALGRUM",
              name: "AxxTel (АксТел-Безопасность, ООО)",
              phone: "+7 (495) 644-33-39",
              email: "legion@info.ru",
              website: "www.legionsecurity.ru",
              status: "Premier",
              country: "Россия",
              city: "Москва",
              productType: "Для бизнеса",
              products: ["Антивирус", "GetScreen"],
              partnerType: ["Продажи партнерам", "Интернет-провайдеры"],
            },
            {
              id: 5,
              logo: "SecureIT",
              name: "SecureIT (ООО СекьюрИТ)",
              phone: "+7 (812) 123-45-67",
              email: "info@secureit.ru",
              website: "www.secureit.ru",
              status: "Start",
              country: "Россия",
              city: "Санкт-Петербург",
              productType: "Для бизнеса",
              products: ["Антивирус", "Passwork"],
              partnerType: ["Партнеры Corporate", "Education партнеры"],
            },
            {
              id: 6,
              logo: "TechPro",
              name: "TechPro (ООО ТехПро)",
              phone: "+7 (383) 555-55-55",
              email: "support@techpro.ru",
              website: "www.techpro.ru",
              status: "Premier",
              country: "Россия",
              city: "Новосибирск",
              productType: "Для дома",
              products: ["GetScreen"],
              partnerType: ["Интернет-провайдеры", "MSP Партнеры"],
            },
          ],
        });
      }, 1000);
    });
  }
);
