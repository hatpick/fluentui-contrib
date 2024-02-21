import * as React from 'react';

const draggableDialogContextDefaultValue = {
  hasDraggableParent: false,
  id: '',
  isDragging: false,
  hasBeenDragged: false,
  position: {
    x: 0,
    y: 0,
  },
};

export type DraggableDialogContextValue =
  typeof draggableDialogContextDefaultValue;

const draggableDialogContext = React.createContext<DraggableDialogContextValue>(
  draggableDialogContextDefaultValue
);

export const useDraggableDialogContext = () => {
  return (
    React.useContext(draggableDialogContext) ??
    draggableDialogContextDefaultValue
  );
};

export const DraggableDialogContextProvider = draggableDialogContext.Provider;
