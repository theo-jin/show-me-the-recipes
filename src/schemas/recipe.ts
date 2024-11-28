import { z } from 'zod';

export const RecipeListItemSchema = z.object({
  id: z.number(),
  name: z.string(),
  cookTimeMinutes: z.number(),
  prepTimeMinutes: z.number(),
  difficulty: z.string(),
  image: z.string(),
  tags: z.array(z.string()),
  mealType: z.array(z.string()),
});

export type RecipeListItem = z.infer<typeof RecipeListItemSchema>;

export const getRecipesResponseSchema = z.object({
  recipes: z.array(RecipeListItemSchema),
  total: z.number(),
  skip: z.number(),
  limit: z.number(),
});

export type GetRecipesResponse = z.infer<typeof getRecipesResponseSchema>;

export const RecipeSchema = z.object({
  id: z.number(),
  name: z.string(),
  cookTimeMinutes: z.number(),
  difficulty: z.string(),
  image: z.string(),
  tags: z.array(z.string()),
  mealType: z.array(z.string()),
  caloriesPerServing: z.number(),
  cuisine: z.string(),
  ingredients: z.array(z.string()),
  instructions: z.array(z.string()),
  prepTimeMinutes: z.number(),
  rating: z.number(),
  reviewCount: z.number(),
  servings: z.number(),
  userId: z.number(),
});

export type RecipeDetail = z.infer<typeof RecipeSchema>;
