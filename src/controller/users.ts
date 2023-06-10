import { Request, Response } from "express";
import { users } from "../models";
class Users {
  allUsers = async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).json(await users.findAll());
  };
}
export default new Users();
