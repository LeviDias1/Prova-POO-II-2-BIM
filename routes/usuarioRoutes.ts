import express from 'express';
import UsuarioController from '../Controllers/usuarioController';

const router = express.Router();

router.get('/', UsuarioController.getAll);
router.get('/:id', UsuarioController.getById);
router.post('/', UsuarioController.create);
router.put('/:id', UsuarioController.update);
router.delete('/:id', UsuarioController.remove);

export default router;
