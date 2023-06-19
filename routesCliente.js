const express = require('express')
const routesCliente = express.Router()



routesCliente.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM Cliente', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routesCliente.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO Cliente set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

        
        })
    })
})

routesCliente.delete('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM Cliente WHERE id_Cliente = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)
        })
    })
})

routesCliente.put('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE Cliente set ? WHERE id_Cliente = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)
        })
    })
})

module.exports = routesCliente;
