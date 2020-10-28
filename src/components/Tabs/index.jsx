import React, { useState } from "react";
import PropTypes from "prop-types";

const Tabs = ({ options, onSelect }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <ul class="nav nav-tabs">
      {options.map((option, index) => (
        <li class="nav-item">
          <a
            class={`nav-link ${activeIndex === index ? "active" : ""}`}
            onClick={() => {
              setActiveIndex(index);
              onSelect({ key: option.key, activeIndex: index });
            }}
            key={option.key}
          >
            {option.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

Tabs.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  onSelect: PropTypes.func,
};

export default Tabs;
