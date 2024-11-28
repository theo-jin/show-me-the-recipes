import { useEffect } from 'react';
import { cn } from '../lib/utils';
import { RecipesCard } from './RecipesCard';
import useInfiniteRecipes from '../hooks/useInfiniteRecipes';
import { useInView } from 'react-intersection-observer';
import { useFavoritesStore } from '@/store/use-favorites-store';

export function RecipesList() {
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteRecipes();

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage, isFetchingNextPage]);

  const { isFavorite, addFavorite, removeFavorite } = useFavoritesStore();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    throw new Error(error.message);
  }

  if (data?.pages[0].recipes.length === 0) {
    return <div>No products found</div>;
  }

  return (
    <div>
      <ul
        className={cn(
          'grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4'
        )}
      >
        {data?.pages.flatMap((page) =>
          page.recipes?.map(
            (recipe: {
              id: number;
              name: string;
              cookTimeMinutes: number;
              prepTimeMinutes: number;
              difficulty: string;
              image: string;
              tags: string[];
              mealType: string[];
            }) => (
              <RecipesCard
                key={recipe.id}
                recipe={recipe}
                isFavorite={isFavorite(recipe.id)}
                onFavorite={() => {
                  if (isFavorite(recipe.id) === true) {
                    removeFavorite(recipe.id);
                  } else {
                    addFavorite(recipe);
                  }
                }}
              />
            )
          )
        )}
        <div ref={ref}>
          {isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage
            ? 'Load More'
            : 'No more recipes to display.'}
        </div>
      </ul>
    </div>
  );
}
