import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const TagDropdown = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    const selectedTag = event.target.value;
    setSelectedOption(selectedTag);

    // Update the URL with the selected tag
    const route = `/tags?query=${selectedTag}`;
    // Use state or any mechanism to trigger a re-render and render Navigate
    // For simplicity, I'm using a state to trigger re-render
    setNavigationRoute(route);
  };

  const [navigationRoute, setNavigationRoute] = useState(null);

  if (navigationRoute) {
    return <Navigate to={navigationRoute} replace={true} />;
  }

  return (
    <div>
      <h4>Select an Option</h4>
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="">Select Tag</option>
        <option value="history">History</option>
        <option value="technology">Technology</option>
        <option value="civil-rights">Civil Rights</option>
      </select>
    </div>
  );
};

export default TagDropdown;
