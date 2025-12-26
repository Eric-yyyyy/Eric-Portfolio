import { useState, createContext } from 'react';
import { singleProjectData as singleProjectDataJson } from '../data/singleProjectData';

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children }) => {
  // ✅ 默认先放 1 号项目（防止一开始就 undefined）
  const [singleProjectData, setSingleProjectData] = useState(
    singleProjectDataJson[1]
  );

  return (
    <SingleProjectContext.Provider value={{ singleProjectData, setSingleProjectData }}>
      {children}
    </SingleProjectContext.Provider>
  );
};

export default SingleProjectContext;
