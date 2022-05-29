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
