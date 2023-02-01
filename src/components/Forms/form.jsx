import css from './form.module.css';
import React, { useState } from "react";

export const Forms = () => {
let [name, setName]= useState ('')
    
    const handleChange = (evt) => {
        setName (evt.target.value)
        console.log(evt.currentTarget)
    };
    
        
            return (
                <form>
                    <label>
                        {name}
                        <input onChange={handleChange} type="text" value={name} />
                            
                        
                    </label>
                    
                </form>
            )
            
        }

    