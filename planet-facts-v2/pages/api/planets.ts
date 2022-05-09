import type { NextApiRequest, NextApiResponse } from 'next'
import planets from './mocks/planets.json'

type PlanetsData = {
  planets: any
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PlanetsData>
) {
  res.status(200).json(planets)
}
