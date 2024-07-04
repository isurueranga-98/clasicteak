import { FC } from "react";
import { IoClose } from "react-icons/io5";

type MobileNavbarProps = {
  isOpen : boolean;
  onClose : () => void;
}

const MobileNavbar : FC <MobileNavbarProps> = ({isOpen, onClose}) => {
  return (
    <div className={`fixed inset-0 z-50 bg-black transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="flex justify-end p-4">
        <IoClose className="text-white text-3xl cursor-pointer" onClick={onClose} />
      </div>
    </div>
  )
}

export default MobileNavbar;