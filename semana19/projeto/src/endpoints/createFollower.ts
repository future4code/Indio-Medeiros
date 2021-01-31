import { Request, Response } from "express";
import { insertFollowerInTable } from "../data/insertFollowerInTable";
import { selectUserById } from "../data/selectUserById";
import { getTokenData } from "../services/authenticator";
import { checkDataExisting } from "../services/checkDataExisting";
import { followersData } from "../types/followersData";

export async function createFollower(
  req: Request,
  res: Response
): Promise<void> {
  res.statusCode = 400;

  try {
    const { idFollowed } = req.body;
    const { authorization } = req.headers;
    checkDataExisting(authorization as string, "authorization", res);
    checkDataExisting(idFollowed, "id", res);

    const followerId: string = getTokenData(authorization!);

    await selectUserById(idFollowed);

    const followers: followersData = {
      followerId: followerId,
      idFollowed: idFollowed,
    };

    await insertFollowerInTable(followers);

    res.status(200).send({ message: "Followed successfully" });
  } catch (error) {
    res.send(error.sqlMessage || error.message);
  }
}
