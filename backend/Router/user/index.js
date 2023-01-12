import commonRoutes from "./common.routes.js";
import labelRoutes from "./label.routes.js";
import taskRoutes from "./task.routes.js";
import userRoutes from "./user.routes.js";

const mergeRoute =  [...userRoutes, ...taskRoutes, ...commonRoutes, ...labelRoutes];
export default mergeRoute
