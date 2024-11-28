import { Routes, Route } from 'react-router-dom';
import Recipes from './routes/Recipes';
import NotFound from './routes/Not-Found';
import Recipe from './routes/Recipe';

export default function App() {
  return (
    <div className="m-7">
      <Routes>
        <Route path="/" element={<Recipes />} />
        <Route path="/:id" element={<Recipe />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
