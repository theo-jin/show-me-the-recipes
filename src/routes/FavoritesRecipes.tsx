import { useFavoritesStore } from '@/store/use-favorites-store';
import { RecipesCard } from '@/components/RecipesCard';
import { cn } from '@/lib/utils';

export default function FavoritesRecipePage() {
  const { favoriteRecipes, removeFavorite } = useFavoritesStore();

  return (
    <div>
      <h1
        className={'mb-4 text-3xl font-bold italic text-secondary-foreground'}
      >
        My Favorite
      </h1>
      {favoriteRecipes.length === 0 ? (
        <div className={'pt-4 text-center text-2xl font-semibold'}>
          There are no saved favorites.
        </div>
      ) : (
        <ul
          className={cn(
            'grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4'
          )}
        >
          {favoriteRecipes.map((recipe) => (
            <RecipesCard
              key={recipe.id}
              recipe={recipe}
              isFavorite={true}
              onFavorite={() => removeFavorite(recipe.id)}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
