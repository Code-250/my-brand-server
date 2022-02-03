import { Router } from "express";
import userController from "../controllers/user.controller";
import authMiddleware from "../middleware/auth";

const { signup, login, findProfiles, findUser, updateProfile, deleteProfile } =
  userController;
const { auth } = authMiddleware;
const profileRouter = Router();

profileRouter.route("/register").post(signup);
profileRouter.route("/login").post(login);
profileRouter.route("/").get(auth, findProfiles);
profileRouter
  .route("/:id")
  .get(auth, findUser)
  .put(auth, updateProfile)
  .delete(auth, deleteProfile);

export default profileRouter;
