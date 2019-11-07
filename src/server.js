const express =require('express');
const app = express();
const sql = require('mysql');
const bodyparser = require('body-parser');
const cors = require('cors');

const con=sql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'demo'
});
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.post('/login',(req,res)=>{
    console.log("hello");
    
    const username = req.body.uname;
    console.log(username);
    const password = req.body.psw;
    const query = "select * from login where name='"+req.body.uname+"' and psw ='"+req.body.psw+"'";
    con.query(query,(err,rows)=>{
        if(err) throw err;
        if(rows.length>0){
            res.json(rows);
        }else{
            console.log('wrong user');
        }
    })
})
app.listen(4200);