import commonRoutes from "./common.routes.js";
import taskRoutes from "./task.routes.js";
import userRoutes from "./user.routes.js";

const mergeRoute =  [...userRoutes, ...taskRoutes, ...commonRoutes];
export default mergeRoute
