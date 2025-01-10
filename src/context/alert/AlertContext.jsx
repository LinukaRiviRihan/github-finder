import { createContext, useReducer } from 'react';
import alertReducer from './AlertReducer';

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [state, dispatch] = useReducer(alertReducer, { alert: null });

  // Set an alert
  const setAlert = (msg, type) => {
    dispatch({
      type: 'SHOW_ALERT',
      payload: { msg, type },
    });

    setTimeout(() => dispatch({ type: 'HIDE_ALERT' }), 3000);
  };

  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
