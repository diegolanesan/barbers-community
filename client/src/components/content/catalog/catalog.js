import React from 'react'
import style from './catalog.module.css'

export default function catalog() {
    return (
        <div className={style.container} >
            <div className={style.filters} >
                <div onChange={console.log('hola')} >
                    <h5>Professional level</h5>
                    <input type='button' value='Urban' name='Proficiency' />
                    <input type='button' value='Academy' name='Proficiency' />
                    <input type='button' value='Seminary' name='Proficiency' />
                    <input type='button' value='hair technician' name='Proficiency' />
                </div>
                <div onChange={console.log('hola')} >
                    <h5>Hair type</h5>
                    <input type='button' value='Straight' name='Hair' />
                    <input type='button' value='Wavy' name='Hair' />
                    <input type='button' value='Curly' name='Hair' />
                    <input type='button' value='Afro' name='Hair' />
                </div>
                <div onChange={console.log('hola')} >
                    <h5>Face type</h5>
                    <input type='button' value='Long' name='Face' />
                    <input type='button' value='Square' name='Face' />
                    <input type='button' value='Rectangular' name='Face' />
                    <input type='button' value='Round' name='Face' />
                    <input type='button' value='Oval' name='Face' />
                    <input type='button' value='Triangular' name='Face' />
                </div>
                <div onChange={console.log('hola')} >
                    <h5>Service</h5>
                    <input type='button' value='Haircut' name='Service' />
                    <input type='button' value='Colorimetry' name='Service' />
                    <input type='button' value='beard trim' name='Service' />
                    <input type='button' value='Tribal design' name='Service' />
                </div>
                <div onChange={console.log('hola')} >
                    <h5>Style</h5>
                    <input type='button' value='Classic' name='Style' />
                    <input type='button' value='American' name='Style' />
                    <input type='button' value='European' name='Style' />
                    <input type='button' value='Regular' name='Style' />
                </div>
            </div>
            <div className={style.section} >
                <div className={style.order} >
                    <h5>Order</h5>
                </div>
                <div className={style.cards} >
                    <div className={style.card} >contenedor de cartas</div>
                    <div className={style.paginate} >paginado</div>
                </div>
            </div>
        </div>
    )
}