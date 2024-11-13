import Image from "next/image";

export const NoFavorites = () => {
  return (
    <section className=" h-screen flex flex-col justify-center items-center">
      <h2 className="mb-1 text-4xl font-bold">No Favorites Yet</h2>
      <p>Start adding favorites by clicking on a Pokemon card.</p>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
        alt="No image available"
        width={200}
        height={200}
        className="opacity-30"
      />
    </section>
  );
};
