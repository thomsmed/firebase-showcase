import React, { createContext, useContext } from 'react';

enum Mode {
  White = 'white',
  Dark = 'dark',
}

class ModeToggle {
  constructor() {
    const storageKey = 'mode';
    const storage = window.localStorage;
    let mode = storage.getItem(storageKey) as Mode || Mode.White;
    let observers = new Map();
    let nextKey = 0;
    
    if (mode === Mode.Dark) {
      document.documentElement.classList.toggle(Mode.Dark);
    }

    this.current = (observer: (mode: Mode) => void) => {
      nextKey++;
      observers.set(nextKey, observer);
      observer(mode);
      return () => {
        observers.delete(nextKey);
      }
    }

    this.toggle = () => {
      document.documentElement.classList.toggle(Mode.Dark);
      mode = mode === Mode.White ? Mode.Dark : Mode.White;
      storage.setItem(storageKey, mode);
      observers.forEach((observer) => {
        observer(mode);
      });
    }
  }

  current: (observer: (mode: Mode) => void) => () => void;
  toggle: () => void;
}

const modeToggle = new ModeToggle();

const ModeToggleContext = createContext<ModeToggle>(modeToggle);
ModeToggleContext.displayName = 'ModeToggleContext';

interface ModeToggleProviderProps {
  children?: React.ReactNode;
}

const ModeToggleProvider: React.FC<ModeToggleProviderProps> = ({ children }) => {
  return (
    <ModeToggleContext.Provider value={modeToggle}>
      {children}
    </ModeToggleContext.Provider>
  );
}

const useModeToggle = () => {
  return useContext(ModeToggleContext);
}

export {
  ModeToggleProvider as default,
  useModeToggle,
  Mode,
}
