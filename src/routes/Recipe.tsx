import RecipeInfo from '@/components/RecipeInfo';
import { RecipesCard } from '@/components/RecipesCard';
import { useRecipe } from '@/hooks/useRecipe';
import { useFavoritesStore } from '@/store/use-favorites-store';
import { useParams } from 'react-router-dom';

export default function Recipe() {
  const params = useParams();
  const { data, isLoading, error } = useRecipe(params.id);
  const { isFavorite, addFavorite, removeFavorite } = useFavoritesStore();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    throw new Error(error.message);
  }

  if (!data) {
    return <div>No product found</div>;
  }

  return (
    <div className="mx-auto max-w-3xl rounded-lg bg-white p-4 shadow-md sm:p-6">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
        <div className="w-full">
          <RecipesCard
            key={params.id}
            recipe={data}
            disableLink={true}
            isFavorite={isFavorite(Number(params.id))}
            onFavorite={() => {
              if (isFavorite(Number(params.id)) === true) {
                removeFavorite(Number(params.id));
              } else {
                addFavorite(data);
              }
            }}
          />
        </div>
      </div>
      <div className="mt-8">
        <RecipeInfo key={Number(params.id)} recipe={data} />
      </div>
    </div>
  );
}
