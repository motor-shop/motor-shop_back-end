import { Request, Response } from "express";
import handleError from "../../errors/handleError";
import addressUpdateService from "../../services/address/addressUpdate.service";

const addressUpdateController = async (req: Request, res: Response) => {
    try {
        const address = req.body;
        const id = req.params.id;
        const updateAddress = await addressUpdateService(id, address);

        return res.status(200).json(updateAddress);
    } catch (error: any) {
        handleError(error, req, res);
    }
};

export default addressUpdateController;
