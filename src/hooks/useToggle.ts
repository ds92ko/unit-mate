import { useState } from 'react';

export const useToggle = (defaultState = true) => {
  const [isOpen, setIsOpen] = useState(defaultState);

  const toggle = () => setIsOpen(!isOpen);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return { isOpen, toggle, open, close };
};
