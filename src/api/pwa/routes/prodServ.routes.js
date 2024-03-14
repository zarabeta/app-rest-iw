//Commerce
import { Router } from 'express';
import * as prodServController from '../controllers/prodserv.controller';
const router = Router();
//ficRouter.get('/list', ProdServController.getProdServList);
router.get('/', prodServController.getProdServList);
//router.get('/item/:ficIdProdServ', prodServController.getProdServItem);
router.get('/:id', prodServController.getProdServItem);
export default router;
//Commerce
import { Router } from 'express';
import config from '../../../config/config';
// Import Routes
import prodServRoutes from './prodServRoutes';
//import ordersRoutes from './orders.routes';
const routerAPI = (app) => {
  const router = Router();
  const api = config.API_URL;
  app.use(api, router);
  // Routes
  router.use('/prod-serv', prodServRoutes);
  //router.use('/orders', ordersRoutes);
  // Return Router
  return router;
};
module.exports = routerAPI;