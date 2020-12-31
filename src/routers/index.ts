import { Router } from 'express';
import ARouter from './RouterA';
import BRouter from './RouterB';

class MasterRouter {
  private _router = Router();
  private _subrouterA = ARouter;
  private _subrouterB = BRouter;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  /**
   * Connect routes to their matching routers.
   */
  private _configure() {
    this._router.use('/themeA', this._subrouterA);
    this._router.use('/themeB', this._subrouterB);
  }
}

export = new MasterRouter().router;