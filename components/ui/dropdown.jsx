import { useState, Children, cloneElement } from "react";

const DropdownHeader = ({ children, toggleDropdown }) => {
  return (
    <button
      type="button"
      className="
        inline-flex
        py-2 
        justify-center
        w-full 
        border-0 
        rounded-md 
        text-sm 
        "
        // hover:bg-gray-50 
        // bg-white 
        // hover:bg-gray-50 
        // justify-center 
        // border-gray-300  
        // focus:outline-none 
        // focus:ring-2 
        // focus:ring-offset-2
        // focus:ring-offset-gray-100 
        // focus:ring-indigo-500
      id="options-menu"
      aria-haspopup="true"
      aria-expanded="true"
      onClick={toggleDropdown}
    >
      {children}
    </button>
  );
};

const DropdownOption = ({ onClick, children }) => {
  return (
    <a
      className="flex gap-1 p-2 rounded text-sm text-black hover:bg-gray-200 hover:text-gray-900 hover:cursor-pointer"
      role="menuitem"
      onClick={onClick}
    >
      {children}
    </a>
  );
};

const Dropdown = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (onClick) => {
    if (onClick) {
      onClick();
    }
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      <div>
        {Children.map(children, (child) => {
          if (child.type === DropdownHeader) {
            return cloneElement(child, { toggleDropdown });
          }
          return null;
        })}
      </div>

      {isOpen && (
        <div
          className={`origin-top-right absolute right-0 mt-2 min-w-20 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-opacity duration-300`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="p-2" role="none">
            {Children.map(children, (child) => {
              if (child.type === DropdownOption) {
                return cloneElement(child, {
                  onClick: () => handleOptionClick(child.props.onClick),
                });
              }
              return null;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

Dropdown.Header = DropdownHeader;
Dropdown.Option = DropdownOption;

export default Dropdown;
