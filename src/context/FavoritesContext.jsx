// src/context/FavoritesContext.jsx
import React, { createContext, useState, useEffect } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (course) => {
    setFavorites((prevFavorites) => [...prevFavorites, course]);
  };

  const removeFromFavorites = (courseId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((course) => course.id !== courseId)
    );
  };

  const isFavorite = (courseId) => {
    return favorites.some((course) => course.id === courseId);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
