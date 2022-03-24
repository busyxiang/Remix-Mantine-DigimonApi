import { json, useLoaderData } from 'remix';
import type { LoaderFunction } from 'remix';
import { SimpleGrid } from '@mantine/core';

import DigimonCard from '~/components/DigimonCard';

import { Digimon } from '~/types';

export const loader: LoaderFunction = async ({ params }) => {
  const level = params.level;

  const res = await fetch(
    `https://digimon-api.vercel.app/api/digimon/level/${level}`,
  );

  return json(await res.json());
};

export default function DigimonLevel() {
  const digimons = useLoaderData<Digimon[]>();

  return (
    <main>
      <SimpleGrid cols={5}>
        {digimons.map((digimon) => (
          <DigimonCard key={digimon.name} digimon={digimon} />
        ))}
      </SimpleGrid>
    </main>
  );
}
