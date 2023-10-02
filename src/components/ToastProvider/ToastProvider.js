import React from 'react';
import { useEscapeKey } from '../../hooks/hooks';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([
    {
      id: Math.random(),
      message: 'It works!',
      variant: 'success',
    },
    {
      id: Math.random(),
      message: 'Logged in',
      variant: 'success',
    },
  ]);

  const handleEscape = React.useCallback(() => {
    setToasts([])
  }, []);

  useEscapeKey(handleEscape);

  function createToast(message, variant) {
    const nextToasts = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      },
    ];
    setToasts(nextToasts);
  }

  function dismissToast(id) {
    const nextToasts = toasts.filter((toast) => {
      return toast.id !== id;
    });
    setToasts(nextToasts);
  }
  return (
    <ToastContext.Provider value={{ toasts, createToast, dismissToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;