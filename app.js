const express = require ('express');
const bodyParser = require ('body-parser');

const authRoutes = require ('./routes/authRoutes');
const userRoute = require('./routes/userRoute');

const app = express();
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

app.get('/', function(_req, res){
    res.send("Francine DeLa Torre, Student");
});

app.use ('/api/auth', authRoutes);
app.use ('/api/user', userRoute);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
