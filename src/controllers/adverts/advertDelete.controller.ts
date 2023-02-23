import { Request, Response } from "express";
import advertUpdateService from "../../services/adverts/advertUpdate.service";

const advertDeleteController = async (req: Request, res: Response) => {
    const { id } = req.params;

    await advertUpdateService({ is_active: false }, id);

    res.status(204).send();
};

export default advertDeleteController;
