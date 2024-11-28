import { RecipeListItem } from '@/schemas/recipe';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface FavoritesStore {
  favoriteRecipes: RecipeListItem[];
  addFavorite: (recipe: RecipeListItem) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      favoriteRecipes: [],

      addFavorite: (quote) =>
        set((state) => {
          if (!state.favoriteRecipes.some((fav) => fav.id === quote.id)) {
            return { favoriteRecipes: [...state.favoriteRecipes, quote] };
          }
          return state;
        }),

      removeFavorite: (id) =>
        set((state) => ({
          favoriteRecipes: state.favoriteRecipes.filter(
            (recipe) => recipe.id !== id
          ),
        })),

      isFavorite: (id) =>
        get().favoriteRecipes.some((recipe) => recipe.id === id),
    }),
    {
      name: 'favorites-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
