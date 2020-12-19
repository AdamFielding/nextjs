// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


type Reply = {
  name: string
}

export default (req: NextApiRequest, res: NextApiResponse<Reply>) => {
  res.status(200).json({ name: 'John Doe' })
}
