import React, { useState } from 'react';

const GeneralOptionsContext = React.createContext({
  selectedProject: '',
});

export const GeneralOptionsProvider = ({ children }) => {
  const [selectedProject, setSelectedProject] = useState('');

  const setProject = (value) => {
    setSelectedProject(value);
  };

  return (
    <GeneralOptionsContext.Provider
      value={{
        selectedProject,
        setProject,
      }}
    >
      {children}
    </GeneralOptionsContext.Provider>
  );
};

export default GeneralOptionsContext;
