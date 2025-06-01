    const express = require('express');
    const Group = require('../models/Group');
    const router = express.Router();

    // Mendapatkan semua grup
    router.get('/data/:batch', async (req, res) => {
        try {
            const groups = await Groups.find(); // Anda bisa menambahkan logika untuk batch
            res.json(groups);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });

    // Update poin grup
    router.post('/update', async (req, res) => {
        const { batch, index, delta } = req.body;
        try {
            const group = await Group.findById(index); // Anda bisa menyesuaikan logika pencarian
            group.points += delta;
            await group.save();
            res.json({ message: 'Poin berhasil diperbarui!' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });

    module.exports = router;
    