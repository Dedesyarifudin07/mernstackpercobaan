const express = require('express');
const app = express();
const port = 3001;
const santriRoutes = require('./routes/user');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser({extended:true}));
app.use(cors());
//example route
app.use('/santri' ,santriRoutes);

require('./utils/db');
app.listen(port , () => {
    console.log(`server running at || http://localhost:${port}`);
})

