// src/components/TagDropdown.js
import React from 'react';

const TagDropdown = ({ tags, onSelectTag }) => {
  return (
    <div>
      <label htmlFor="tagSelect">Select a tag:</label>
      <select id="tagSelect" onChange={(e) => onSelectTag(e.target.value)}>
        <option value="">All</option>
        {tags.map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TagDropdown;
