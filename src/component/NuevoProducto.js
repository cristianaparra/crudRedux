import React from 'react';
import { useDispatch, useSelector } from 'react-redux'

//actions de redux
import { crearNuevosProductosAction } from '../actions/productoActions'

const NuevoProducto = () => {
    // utilizar use dispatch y te crea una funcion
    const dispatch = useDispatch();

    //llamar el action de productionAction
    const agregarProducto = () => dispatch(crearNuevosProductosAction());

    const submitNuevoProducto = e => {
        e.preventDefault();
        // validar formulario

        // si no hay errores

        //crear el nuevo producto
        agregarProducto();
    }

    return (
        <div className='row justify-content-center'>
            <div className='col-md-8'>
                <div className='card'>
                    <div className='card-body'>
                        <h2 className='text-center mb-4 font-weight-bold'>
                            Agrega Nuevo Producto
                        </h2>
                        <form
                            onSubmit={submitNuevoProducto}>
                            <div className='form-group'>
                                <label>Nombre Producto</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='NombreProducto'
                                    name='nombre'
                                />
                            </div>

                            <div className='form-group'>
                                <label>Precio Producto</label>
                                <input
                                    type='number'
                                    className='form-control'
                                    placeholder='NombreProducto'
                                    name='precio'
                                />
                            </div>
                            <button
                                type='submit'
                                className='btn btn-primary font-weight-bold text-uppercase d-block w-100'
                            >Agregar Producto</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NuevoProducto
