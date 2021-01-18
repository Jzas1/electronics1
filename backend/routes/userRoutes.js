import express from 'express'
const router = express.Router()
import {
    authUser,
    registerUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserById,
    updateUser
} from '../controllers/userCountroller.js'
import { protect, admin } from '../middleware/authMIddleWare.js'

router.route('/').post(registerUser).get(protect, admin, getUsers)
router.route('/').post(registerUser)
router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile).put(protect, admin, updateUserProfile)
router.route('/:id').delete(protect, admin, deleteUser)
    .get(protect, admin, getUserById).put(protect, admin, updateUser)

export default router