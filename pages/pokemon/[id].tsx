import { useState } from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Layout } from "@/components/layout";
import { pokeApi } from "@/api";
import { Pokemon } from "@/interfaces";
import { localFavorites } from "@/utils";
import Image from "next/image";

interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  const [isInFavorites, setisInFavorites] = useState(
    localFavorites.existInFavorites(pokemon.id)
  );
  console.log(isInFavorites);
  console.log(pokemon.id);
  const onToggleFavourite = () => {
    localFavorites.toggleFavorite(pokemon.id);
    setisInFavorites(!isInFavorites);
  };
  return (
    <Layout title={pokemon.name}>
      <section className="flex justify-around items-center">
        <Image
          src={
            pokemon.sprites.other?.dream_world.front_default ?? "no_image.png"
          }
          alt={pokemon.name}
          width={200}
          height={200}
        ></Image>
        <h1 className="text-4xl capitalize">{pokemon.name}</h1>
        <button
          className="bg-red-500 text-white font-bold px-5 py-1 rounded-xl hover:bg-red-600"
          onClick={onToggleFavourite}
        >
          {isInFavorites ? "Guardar en favoritos" : "Eliminar de favoritos"}
        </button>
      </section>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemon151 = [...Array(151)].map((value, index) => `${index + 1}`);
  return {
    paths: pokemon151.map((id) => ({
      params: { id },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

  return {
    props: {
      pokemon: data,
    },
  };
};

export default PokemonPage;
