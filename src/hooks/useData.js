// React
import { useState } from 'react';

const useData = (initialState = {}) => {
  const [data, setData] = useState(initialState);

  const handleDataChange = (key, value) => {
    setData((prev) => {
      return { ...prev, key: value };
    });
  };

  const handleArrDataChange = (key, value) => {
    setData((prev) => {
      return {...prev, key: [...prev.key, value]}
    })
  }

  return { data, handleDataChange, handleArrDataChange};
};

export default useData;