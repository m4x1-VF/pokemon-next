import { useEffect, useState } from "react";
import { Layout } from "@/components/layout";
import { NoFavorites } from "@/components/NoFavorites";
import { localFavorites } from "@/utils";

const FavouritesPage = () => {
  const [favoritePokemons, setfavoritePokemons] = useState<number[]>([]);
  useEffect(() => {
    setfavoritePokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Favorites">
      <NoFavorites />
    </Layout>
  );
};

export default FavouritesPage;
