import React from "react";
import "./Style.css";
import { useDispatch, useSelector } from "react-redux";
import { postCategory, deleteCategory, putCategory} from "../../../../redux/action/categories";
import axios from "axios";
import { deleteStyle, postStyle, putStyle } from "../../../../redux/action/style";


const Style = ()=>{
    const {resp} = useSelector((state) => state.style);
    const style = resp;
    const dispatch = useDispatch();

    //--------USE EFFECT-----------
    React.useEffect(()=>{
        
    },[])



    // --------------POST---------------
    const [form, setForm] = React.useState({
        description:"",
        ID:0
    });
    const handleChange = (v)=>{
        const name = v.target.name;
        const value = v.target.value;
        setForm({
            description: value
        })
       
           
    
    };

    const handleSendPost = ()=>{
        dispatch(postStyle({style: form}))
        setForm({
            description:"",
        })
    };

    // --------------PUT---------------
    const [form2, setForm2] = React.useState({
        description:"",
    });

    const handleChangeEdit = (v, c)=>{
        const name = v.target.name;
        const value = v.target.value;
        if(name !== "image"){
            setForm2({
                ...form2, [name]: value
           })
        }
       
        console.log(form2)
    };

    const handleClickEdit = (id)=>{
      form2.description === "" && delete form2.description;
      dispatch( putStyle({styleId:id,styleModify:form2} ))
     
      setForm2({
        description:"",
      })
    };

    const handleFocus = (c)=>{
        setForm2({
            ...form2, ID: c.id
        })
    } 


    // --------------DELETE---------------
    const handleDeleteCategory = (id)=>{
        dispatch(deleteStyle(id))
    };

    return (
        <div className="containerStyle">
          <div className="styleContainer">
             <div className="containerTable">
                <div className="table w-full p-2">
                <table className="w-full border">
                    <thead>
                        <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <div class="flex items-center justify-center">
                              ID
                            </div>
                        </th>
                         <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <div class="flex items-center justify-center">
                                 DESCRIPTION
                            </div>
                         </th>
                        <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <div className="flex items-center justify-center">
                                 ACTION
                            </div>
                        </th>
                    </thead>
                    <tbody>
                            {
                                style.map(c =>{
                                    return(
                             <>
                            <tr className="bg-gray-50 text-center" onFocus={()=>{handleFocus(c)}} onChange={(v)=>{handleChangeEdit(v,c)}}>
                                <td className="p-2 border-r">
                                    <input type="number" className="border p-1 w-20" value={c.id}/>
                                 </td>
                                <td className="p-2 border-r">
                                    <input type="text" className="border p-1" placeholder={c.description}  value={(form2.ID == c.id && form2.description) ||""} name="description"/>
                                 </td>
        
                                 <td>
                                       <a href="#" className="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin " onClick={()=> handleClickEdit(c.id)}>Edit</a>
                                        <a href="#" className="bg-red-500 p-2 text-white hover:shadow-lg text-xs font-thin ml-1" onClick={()=>{handleDeleteCategory(c.id)}}>Remove</a>
                                 </td>
                           </tr>
                           </>
                                   )
                                })
                             }
                        
                    </tbody>
                </table>
            </div>
           </div>

        <div className="styleContainer">
        <div className="containerTable">
                <div className="table w-full p-2">
                <table className="w-full border">
                    <thead>
                        
                         <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <div class="flex items-center justify-center">
                                 DESCRIPTION
                            </div>
                         </th>
                        <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <div className="flex items-center justify-center">
                                 ACTION
                            </div>
                        </th>
                    </thead>
                    <tbody   onChange={handleChange}>
                         <tr className="bg-gray-50 text-center">
                            
                            <td className="p-2 border-r">
                                <input type="text" className="border p-1" name="description" value={form.description}/>
                            </td>
                             <td>
                               <a href="#" className="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin " onClick={handleSendPost}>Create</a>
                             </td>
                         </tr>
                        
                    </tbody>
                </table>
            </div>
           </div>
        </div>
        </div>
        </div>
    )
};

export default Style;