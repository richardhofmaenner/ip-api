import express, {Request, Response} from 'express'

// @ts-ignore
const PORT: number = process.env.PORT | 3000
export const app = express()
app.set('trust proxy', true)

app.get('/', (req: Request, res: Response) => {
  let ipAddress: string | null = null
  if (req.header('cf-connecting-ip') != null) {
    ipAddress = <string>req.header('cf-connecting-ip')
  } else if (req.connection.remoteAddress != null) {
    ipAddress = req.connection.remoteAddress
  }

  res.contentType('application/json').json({ipAddress: ipAddress})
})

export const server = app.listen(PORT,() => {
  console.log(`Server is listening on port ${PORT}`)
})
