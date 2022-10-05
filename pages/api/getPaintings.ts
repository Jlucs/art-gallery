// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Painting } from '../../typings';

const query = groq`
    *[_type == "painting"]
`;

type Data = {
  paintings: Painting[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const paintings: Painting[] = await sanityClient.fetch(query);

  res.status(200).json({ paintings })
}
