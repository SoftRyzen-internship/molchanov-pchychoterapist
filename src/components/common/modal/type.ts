export interface IModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  mobileMenu?: boolean;
}
