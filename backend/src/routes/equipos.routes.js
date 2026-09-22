const express = require('express');
const controller = require('../controllers/equipos.controller');
const { authenticate, authorize } = require('../middlewares/auth.middleware');
const { uploadEquipoImage } = require('../middlewares/upload.middleware');

const router = express.Router();

router.use(authenticate);

router.get('/', controller.list);
router.get('/:id', controller.getById);

// admin y clientes pueden crear/editar en este ejemplo.
router.post('/', authorize(['admin', 'cliente']), uploadEquipoImage, controller.create);
router.put('/:id', authorize(['admin', 'cliente']), uploadEquipoImage, controller.update);

// Solo admin puede eliminar.
router.delete('/:id', authorize(['admin']), controller.remove);

module.exports = router;
