import {
  NextFunction,
  Response,
  Request,
  Router,
} from "express";

import {
  Artigo as IArtigo,
} from '@cefwm-angular/common';
import { getCollection } from "../util/mongodb";

export const router: Router = Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  const artigos: IArtigo[] = await getCollection<IArtigo>(
    req.app,
    'artigos',
  ).find().toArray();
  res.json(artigos);
});

router.get('/:_id', async (req: Request, res: Response, next: NextFunction) => {
  const _id: number = +req.params._id;
  const artigo: IArtigo = await getCollection<IArtigo>(
    req.app,
    'artigos',
  ).findOne({
    _id: _id,
  });
  res.json(artigo);
});
