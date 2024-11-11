import { SmallPokemon } from "@/interfaces";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const router = useRouter();
  const onClick = () => {
    router.push(`/pokemon/${pokemon.id}`);
  };
  return (
    <li
      className="p-24 flex flex-wrap items-center justify-center cursor-pointer"
      key={pokemon.id}
      onClick={onClick}
    >
      <div className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg">
        <svg
          className="absolute bottom-0 left-0 mb-8"
          viewBox="0 0 375 283"
          fill="none"
          style={{ transform: "scale(1.5)", opacity: 0.1 }}
        >
          <rect
            x="159.52"
            y="175"
            width="152"
            height="152"
            rx="8"
            transform="rotate(-45 159.52 175)"
            fill="white"
          />
          <rect
            y="107.48"
            width="152"
            height="152"
            rx="8"
            transform="rotate(-45 0 107.48)"
            fill="white"
          />
        </svg>
        <div className="relative pt-10 px-10 flex items-center justify-center">
          <div
            className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
            style={{
              background: "radial-gradient(black, transparent 60%)",
              transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
              opacity: 0.2,
            }}
          ></div>

          <Image
            className="relative w-40"
            src={pokemon.img}
            alt="pokemon image"
            width={100}
            height={100}
          />
        </div>
        <div className="relative text-white px-6 pb-6 mt-6 flex items-center justify-evenly">
          <div className="flex justify-between">
            <span className="block font-semibold text-xl capitalize">
              {pokemon.name}
            </span>
          </div>
        </div>
      </div>
    </li>
  );
};
