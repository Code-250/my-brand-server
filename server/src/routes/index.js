import { Router } from "express";
import ArticleRouter from "./article.routes";
import profileRouter from "./profile.routes";
import QueriesRouter from "./queries.routes";

const allRoutes = Router();

allRoutes.use("/posts", ArticleRouter);
allRoutes.use("/users", profileRouter);
allRoutes.use("/queries", QueriesRouter);

export default allRoutes;
