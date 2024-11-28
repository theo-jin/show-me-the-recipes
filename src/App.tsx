import { Routes, Route, Link } from 'react-router-dom';
import Recipes from './routes/Recipes';
import NotFound from './routes/Not-Found';
import Recipe from './routes/Recipe';
import FavoritesRecipePage from './routes/FavoritesRecipes';
import logo from '@/assets/9f809976-770f-4f89-b922-8a8896e033b9.png';

export default function App() {
  return (
    <div className="m-7">
      <header className={'top-0 z-50  py-5'}>
        <section className={'flex items-center justify-between'}>
          <Link to={'/'} className={'inline-flex items-center gap-2'}>
            <img className="rounded-md" src={logo} width="70px" alt={'logo'} />
            <h2 className="text-2xl lg:text-4xl font-bold">
              SHOW ME THE RECIPES
            </h2>
          </Link>
          <Link className={'font-semibold  underline'} to={'/favorites'}>
            My Favorite
          </Link>
        </section>
      </header>

      <main className={'mt-10'}>
        <Routes>
          <Route path="/" element={<Recipes />} />
          <Route path="/:id" element={<Recipe />} />
          <Route path="/favorites" element={<FavoritesRecipePage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}
