import {pool} from "../config"
import { BadRequestError } from "../errors";

class Users {
    findAll = async () => {
      const sql = `
      SELECT * FROM users LIMIT 10
      `;
      try {
        // const conn = await pool.getConnection();
        return (await pool.query(sql));
      } catch (error:any) {
        throw new BadRequestError(error.message);
      }
    };
  }
  export const users = new Users();
  