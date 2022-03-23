import { json, useLoaderData } from 'remix';
import type { LoaderFunction } from 'remix';

export const loader: LoaderFunction = async ({ params }) => {
  const level = params.level;

  return json(level);
};

export default function DigimonLevel() {
  const level = useLoaderData();

  return <main>{level}</main>;
}
