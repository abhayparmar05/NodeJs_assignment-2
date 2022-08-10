const contentDisposition = require('content-disposition')
const express = require('express')
const mysql = require('mysql')
const app = express()

//create connection in database

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'user'
})

//create database 

app.post('/createdatabase',(req,res)=>{
    connection.connect((err)=>{
        if (err) throw err;
        console.log('connected!')        
        connection.query('CREATE DATABASE User',(err,result)=>{
        if (err) throw err;
        res.send('Database Created')
        })      
    })
})

//create table 

app.post('/createtable',(req,res)=>{
    connection.connect((err)=>{
        if(err) throw err;
        console.log('Connected!')
        var sql = 'CREATE TABLE Inventory (id INT UNIQUE AUTO_INCREMENT , name varchar(255) ,category varchar(255),Exp_time DATE, quantity INT ,Manu_time DATE ,Image BLOB)'
        connection.query(sql, (err,result)=>{
            if (err) throw err
            res.send('Table Created Sucessfull')
        })
    })
})

//insert data 
app.post('/insertuser',(req,res)=>{
    connection.connect((err)=>{
        if (err) throw err;
        console.log('connected')
        var sql = "INSERT INTO Inventory (name,category,Exp_time,quantity,Manu_time,image) values ('Abhay Parmar','Mobile',now(),1,now(),LOAD_FILE('E:\Wallpaper\bricks.jpg'))"
        connection.query(sql,(err,result)=>{
        if (err) throw err;
            res.send('Insert Data Success')
        })
    })
})

//update 
app.patch('/updateuser',(req,res)=>{
    connection.connect((err)=>{
        if (err) throw err;
        console.log('connected')
        var sql ="UPDATE Inventory SET name='ABHAYPARMAR' where id=10"
        connection.query(sql,(err,result)=>{
            if (err) throw err; 
                res.send('Update User')
        })
    })
})

//delete
app.delete('/deleteuser',(req,res)=>{
    connection.connect((err)=>{
        if (err) throw res.send('Delete Fail')
        console.log('delete Start')
        var sql = "DELETE from Inventory where id = 11"
        connection.query(sql,(err,result)=>{
            if(err) throw res.send('Delete Fails');
            res.send('delete success')
        })
    })
})

//search
app.get('/search',(req,res)=>{
    connection.connect((err)=>{
        if(err) throw err
        var sql = "Select * from Inventory where id = 13"
        connection.query(sql,(err,result)=>{
            if(err) throw err
            res.send(result)
        })
        
    })
})
app.listen(3000,()=>{
    console.log('server start at 3000 port')
})