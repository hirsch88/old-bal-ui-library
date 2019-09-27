export interface Route {
  component: string;
  label: string;
  url: string;
}

export const route = ({ label, url, component }: Route): Route => ({
  label,
  url,
  component
});
