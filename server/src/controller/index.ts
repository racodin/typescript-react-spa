import { Request, Response } from "express";

const get = {
  home: (_req: Request, res: Response) => {
    return res.sendFile(__dirname + "/dist/build/index.html");
  }
};

const post = {
  
};

const controller = {
  get,
  post
}
export default controller;