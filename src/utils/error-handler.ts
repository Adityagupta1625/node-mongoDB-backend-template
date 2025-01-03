import { type Response, type Request } from 'express'
import HttpException from './http-exception'
import { Enum } from '../constants'

export const errorHandler = (e: any, res: Response, req: Request): Response => {
  if (e instanceof HttpException) {
    return res
      .status(e.errorCode as number)
      .json({ message: e.message, status: Enum.RESPONSE_STATES.ERROR })
  } else {
    return res.status(Enum.RESPONSE_CODES.INTERNAL_SERVER_ERROR).json({
      message: e?.message ?? 'Internal Server Error',
      status: Enum.RESPONSE_STATES.ERROR,
    })
  }
}
