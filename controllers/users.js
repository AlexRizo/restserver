import { response, request } from "express"

const usuariosGet = (req = request, res = response) => {
    const {q, nombre = 'unknown', apikey} = req.query;
    res.json({
        msg: 'get API - controller',
        q,
        nombre,
        apikey,
    })
}

const usuariosPost = (req = request, res = response) => {
    const {nombre, edad} = req = req.body
    
    res.json({
        msg: 'post API - controller',
        nombre,
        edad,
    })
}

const usuariosPut = (req = request, res = response) => {
    const { id } = req.params;
    
    res.json({
        msg: 'put API - controller',
        id,
    })
}

const usuariosPatch = (req = request, res = response) => {
    res.json({
        msg: 'patch API - controller'
    })
}

const usuariosDelete = (req = request, res = response) => {
    res.json({
        msg: 'delete API - controller'
    })
}

export{
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
}