const {json} = require('express')
const express = require('express')
const cors = require('cors')
const knex = require('knex');
const config = require('./knexfile');

const db = knex(config.development);

const app = express()

const routes = express.Router()

routes.route('/alunos').get(async (req,res)=>{
    const result = await db('alunos').select()
    console.log(result)
    return res.status(200).json({message: 'OK', alunos:result});
}).put(async (req,res)=>{
    const body = req.body
    const result = await db('alunos').where({ id: body.id})
    .update({ 
      name: body.name
    })
    console.log(body)
    return res.status(200).json({message: 'OK'});
})
app.use(cors())
app.use(json())
app.use(routes)
const port = 3000
const logOpenend = ()=>{console.log(`server opened ${port} `)}
app.listen(port,logOpenend)

