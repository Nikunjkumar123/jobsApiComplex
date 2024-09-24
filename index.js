const express = require('express');
const app = express();
require('dotenv').config();
const connectdb = require('./src/db/connectdb.js')
const authRouter = require('./src/routes/authRouter.js')
const jobRouter = require('./src/routes/jobRouter.js')
const expRouter = require('./src/routes/expRouter.js')
const authUser = require('./src/middlewares/authUSER.js')
const adminAct = require('./src/middlewares/adminActivity.js')
const adminACTIVITYRouter = require('./src/routes/adminACTRouter.js')


app.use(express.json());
app.use('/api/v1/auth',authRouter);
app.use('/api/v1/job',authUser,jobRouter);
app.use('/api/v1/exp',authUser,expRouter);
app.use('/api/v1/admin',authUser,adminAct,adminACTIVITYRouter);

connectdb(process.env.URL);
app.listen(process.env.PORT,()=>{
    console.log("connected to",process.env.PORT);
})