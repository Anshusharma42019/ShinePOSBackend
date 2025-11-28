const express = require('express');
const billController = require('../controllers/billController');
const { auth, authorize } = require('../middleware/auth');

const router = express.Router();

// Apply authentication to all bill routes
router.use(auth);

router.post('/create', billController.createBill);
router.patch('/:id/payment', billController.processPayment);
router.patch('/:id/split-payment', billController.processSplitPayment);
router.patch('/:id/status', billController.updateBillStatus);
router.get('/all', billController.getAllBills);
router.get('/:id/advance-details', billController.getBillWithAdvanceDetails);
router.get('/:id', billController.getBillById);

module.exports = router;
