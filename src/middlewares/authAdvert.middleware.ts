import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { Advert } from "../entities/advert.entity";
import { AppError } from "../errors/AppErrors";
import authUserMiddleware from "./authUser.middleware";

const authAdvertMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const advertRepository = AppDataSource.getRepository(Advert);

    const advert = await advertRepository.findOne({
        where: { id: req.params.id },
        relations: { user: true },
    });

    if (!advert) {
        res.status(404).json({
            status: "error",
            message: "Advert not found to update",
        });
    }

    if (advert?.user.id !== req.body.decodifiedToken.id) {
        res.status(401).json({
            status: "error",
            message: "Unauthorized for edit or delete announcement",
        });
    }
};

export default authAdvertMiddleware;
