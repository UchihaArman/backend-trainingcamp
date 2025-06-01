    const express = require('express');
    const mongoose = require('mongoose');
    const cors = require('cors');
    const bodyParser = require('body-parser');
    const groupRoutes = require('./routes/groupRoutes');
    const dotenv = require('dotenv');
    dotenv.config();

    const app = express();
    const PORT = process.env.PORT || 3000;

    // Middleware
    app.use(cors());
    app.use(bodyParser.json());

    // Koneksi ke MongoDB
    mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('MongoDB Connected'))
        .catch(err => console.log(err));

    // Rute dasar
   app.get('/', (req, res) => {
       res.send('API is running...');
   });
   // Rute API
   app.use('/api', groupRoutes);

    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
    