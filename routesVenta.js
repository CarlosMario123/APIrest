const express = require('express')
const routesVenta = express.Router()



routesVenta.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM Venta', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routesVenta.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO Venta set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)
        })
    })
})

routesVenta.delete('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM Venta WHERE id_Venta = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)
        })
    })
})

routesVenta.put('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE Venta set ? WHERE id_Venta = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)
        })
    })
})

module.exports = routesVenta;