import { Dropdown, DropdownDivider, DropdownItem } from "flowbite-react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const CustomDropdown = ({ items = [], renderTrigger, className = "w-36" }) => {
  return (
    <Dropdown
      label=""
      dismissOnClick={false}
      renderTrigger={() => renderTrigger || <span></span>}
      className={className}
    >
      {items.map((item, i) => (
        <div key={i}>
          {item.isDanger ? (
            <>
              <DropdownDivider />
              <DropdownItem
                onClick={item.onclick}
                className=" text-red-600 transition duration-200"
              >
                {item.title}
              </DropdownItem>
            </>
          ) : (
            <Link to={item.path}>
              <DropdownItem>{item.title}</DropdownItem>
            </Link>
          )}
        </div>
      ))}
    </Dropdown>
  );
};

export default CustomDropdown;

CustomDropdown.propTypes = {
  items: PropTypes.array, // use the PropTypes object to define valid prop types
  renderTrigger: PropTypes.element,
  className: PropTypes.string,
};
