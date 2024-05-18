import React, { createContext, useReducer } from 'react';
import studentReducer from '../utils/studentReducer';

export const StudentContext = createContext();

const initialState = {
  students: []
};

export const StudentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(studentReducer, initialState);

  const addStudent = (student) => {
    dispatch({ type: 'ADD_STUDENT', payload: student });
  };

  const deleteStudent = (id) => {
    dispatch({ type: 'DELETE_STUDENT', payload: id });
  };

  return (
    <StudentContext.Provider value={{ students: state.students, addStudent, deleteStudent }}>
      {children}
    </StudentContext.Provider>
  );
};