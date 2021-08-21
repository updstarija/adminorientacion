import { ADD_ANIMAL,DELETE_ANIMAL } from './AnimalesTypes';

export const addAnimal = (Animal) => (
  {
    type: ADD_ANIMAL,
    data: Animal
  }
);

export const deleteAnimal = (key) => (
  {
    type: DELETE_ANIMAL,
    key: key
  }
);
