/* eslint-disable @typescript-eslint/no-explicit-any */
import { type HTMLAttributes } from 'react';
import { Badge } from './ui/badge';
import { cn } from '../lib/utils';
import { RecipeListItem } from '../schemas/recipe';
import { Link } from 'react-router-dom';

export interface RecipesCardProps {
  recipe: RecipeListItem;
  disableLink?: boolean;
}

export function RecipesCard({
  className,
  recipe,
  disableLink = false,
  ...props
}: RecipesCardProps & HTMLAttributes<HTMLDivElement>) {
  const {
    id,
    name,
    cookTimeMinutes,
    difficulty,
    image,
    mealType,
    tags,
    prepTimeMinutes,
  } = recipe;

  const ImageContent = (
    <img
      className={'w-full transition-transform hover:scale-110'}
      src={image}
      key={id}
      alt={name}
    />
  );

  return (
    <article className={cn(className)} {...props}>
      <figure className={'relative w-full'}>
        {disableLink ? (
          <div
            className={
              'mb-5 inline-block w-full overflow-hidden rounded-2xl border'
            }
          >
            {ImageContent}
          </div>
        ) : (
          <Link
            className={
              'mb-5 inline-block w-full overflow-hidden rounded-2xl border'
            }
            to={`/${id}`}
          >
            {ImageContent}
          </Link>
        )}
        <figcaption className={'space-y-1'}>
          <div className="absolute left-5 top-5 font-bold text-red-500">
            <Badge variant={'destructive'}>
              {cookTimeMinutes + prepTimeMinutes}분
            </Badge>
            
          </div>
          
          <div className={'flex flex-wrap items-center gap-1'}>
            {tags.map((tag: any) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
          <h3 className={'text-xl font-semibold'}>{name}</h3>
          <div className={'flex items-center gap-1'}>
            {' '}
            {mealType.map((mealT: any) => (
              <Badge variant="secondary" key={mealT}>
                {mealT}
              </Badge>
            ))}
          </div>

          <p className={'italic text-gray-500'}>{difficulty} </p>
        </figcaption>
      </figure>
    </article>
  );
}
