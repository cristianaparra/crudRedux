import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types'
import clienteAxios from '../config/axios'
//crear nuevos prodcutos

export function crearNuevosProductosAction(producto) {
    return async (dispatch) => {
        dispatch(agregarProducto());

        try {
            //insertar en la api
            await clienteAxios.post('/productos', producto);

            //si todo sale bien, actualizar el state
            dispatch(agregarProductoExito(producto))
        } catch (error) {
            console.log(error);
            //si hay un error cambiar el state 
            dispatch(agregarProductoError(true))

        }
    }
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
})

//si el producto se guarda ene la base de datos
const agregarProductoExito = producto => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})
// si hubo un error
const agregarProductoError = estado => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
})