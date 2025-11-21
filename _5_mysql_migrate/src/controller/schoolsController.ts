import { Request, Response } from 'express';
import { schoolService } from '../service/schoolService';

class SchoolController {

    getAll = async (request: Request, response: Response) => {
        try {
            const data = await schoolService.getAll()
            response.status(200).send(data)
        } catch (err) {
            console.log(err)
            response.sendStatus(500)
        }
    }

    post = async (request: Request, response: Response) => {
        const { name, address } = request.body
        try {
            const data = await schoolService.post({ name, address })
            request.body.id = data[0]
            response.status(200).send({ message: "Successfully added child", child: request.body })
        } catch (err) {
            console.log(err)
            response.sendStatus(500)
        }
    }
}

export const schoolController = new SchoolController();