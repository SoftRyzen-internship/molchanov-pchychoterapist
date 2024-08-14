export type NavItem = {
  id: number;
  href: string;
  name: string;
};

export type NavMenuProps = {
  ulClassName?: string;
  linkClassName?: string;
  toggleModal?: () => void;
};
