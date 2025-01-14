const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

/**
 * @openapi
 * /usuarios:
 *   post:
 *     description: Crear un nuevo usuario

 *     responses:
 *       200:
 *         description: Crea un nuevo usuario
 * 
 */
router.post('/usuarios', userController.createUser);

/**
 * @openapi
 * /usuarios:
 *   get:
 *     description: Listar todos los usuarios en la base de datos
 *     responses:
 *       200:
 *         description: Devuelve un JSON con todos los datos.
 * 
 */
router.get('/usuarios', userController.getAllUsers);

/**
 * @openapi
 * /usuarios/{id}:
 *   get:
 *     description: Listar todos los datos por id de usuario en la base de datos
 *     responses:
 *       200:
 *         description: Devuelve un JSON con todos los datos de UN usuario.
 * 
 */
router.get('/usuarios/:id', userController.getUserById);

/**
 * @openapi
 * /usuarios/{id}:
 *   put:
 *     description: Actualizar usuario
 *     responses:
 *       200:
 *         description: Devuelve un JSON con todos los datos de UN usuario.
 * 
 */
router.put('/usuarios/:id', userController.updateUser);

/**
 * @openapi
 * /usuarios/{id}:
 *   delete:
 *     description: Actualizar usuario
 *     responses:
 *       200:
 *         description: Devuelve un JSON con todos los datos de UN usuario.
 * 
 */
router.delete('/usuarios/:id', userController.deleteUser);


module.exports = router;