import { Request, Response } from 'express'
import { AppError, handleError } from '../../errors/AppErrors'
import exampleCreateService from '../../services/examples/exampleCreate.service'

const exampleCreateController = async(req: Request, res: Response) => {

    try {
        const {ex} = req.body

        const example = await exampleCreateService({ex})

        return res.status(201).json(example)

    } catch (err) {
        if (err instanceof AppError) {
            handleError(err, res)
        }
    }
}

export default exampleCreateController