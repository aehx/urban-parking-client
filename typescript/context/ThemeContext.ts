export type themeContextProviderType = {
  children: React.ReactNode;
};

export type ThemeContextType = {
  theme:any,
  updateTheme:(newTheme:string) => void
}