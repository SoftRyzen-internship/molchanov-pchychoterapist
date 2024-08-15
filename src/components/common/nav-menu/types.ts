export type NavItem = {
  id: number;
  href: string;
  name: string;
};
export type NavMenuProps = {
  section?: string;
  toggleModal?: () => void;
};
