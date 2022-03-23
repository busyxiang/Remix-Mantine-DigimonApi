import { json, useLoaderData } from 'remix';
import type { LoaderFunction } from 'remix';

export const loader: LoaderFunction = async () => {
  const res = await fetch('https://digimon-api.vercel.app/api/digimon');

  return json(await res.json());
};

export default function Index() {
  const digimons = useLoaderData();

  console.log(digimons);

  return <main>content</main>;
}
