export const statusTheme = (status: string) => {
  const themes: { [key: string]: string } = {
    Start: "bg-secondary",
    Premier: "bg-dark",
  };
  return themes[status] || "bg-secondary";
};
