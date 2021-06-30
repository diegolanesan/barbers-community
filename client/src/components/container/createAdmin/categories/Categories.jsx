import React, { useState } from "react";
import "./Categories.css";
import { useDispatch, useSelector } from "react-redux";
import { postCategory, deleteCategory, putCategory} from "../../../../redux/action/categories";
import axios from "axios";

const Categories = ()=>{
    // Me traigo todas las categorias de el estado global
    const {resp} = useSelector((state) => state.category);
    const categories = resp;
    const dispatch = useDispatch();

    //--------USE EFFECT-----------
    React.useEffect(()=>{
        
    },[])



    // --------------POST---------------
    const [form, setForm] = useState({
        name:"",
        description:"",
        image:[""],
        ID:0
    });
    const handleChange = (v)=>{
        const name = v.target.name;
        const value = v.target.value;
        if(name !== "image"){
            setForm({
                ...form, [name]: value
           })
        }
       
           
    
    };

    const handleSendPost = ()=>{
        dispatch(postCategory({category: form}))
        setForm({
            name:"",
            description:"",
            image:[""]
        })
    };

    // --------------PUT---------------
    const [form2, setForm2] = useState({
        name:"",
        description:"",
        image:[""],
        ID:70
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
      form2.name === "" && delete form2.name;
      form2.image[0]=== "" && delete form2.image;
      dispatch(putCategory(id,{categoryModify:form2} ))
     
      setForm2({
        name:"",
        description:"",
        image:[""]
      })
    };

    const handleFocus = (c)=>{
        setForm2({
            ...form2, ID: c.id
        })
    } 


    // --------------DELETE---------------
    const handleDeleteCategory = (id)=>{
        dispatch(deleteCategory(id))
    };

    //--------------CLOUDINARY------------
    const [error, setError]= React.useState({
        image: false
    })
    const [error2, setError2]= React.useState({
        image: false,
    })
    const handleImage = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append("file", files[0]);
        data.append("upload_preset", "Product");
        setError({ ...error, image: true });
        const res = await axios.post( "https://api.cloudinary.com/v1_1/dtqd9ehbe/image/upload", data);
        const file = res.data;
        const url = file.secure_url;
        setForm({ ...form, image: [url]});
        setError({ ...error, image: false });
      };
    const handleImage2 = async (e) => {
     const files = e.target.files;
        const data = new FormData();
        data.append("file", files[0]);
        data.append("upload_preset", "Product");
        setError2({ ...error, image: true });
        const res = await axios.post( "https://api.cloudinary.com/v1_1/dtqd9ehbe/image/upload", data);
        const file = res.data;
        const url = file.secure_url;
        dispatch(putCategory(form2.ID,{categoryModify:{image:[url]}} ));
        setForm2({
            ...form2, image:[url]
        })
        setError2({ ...error, image: false});
      };
    const handleCruz = ()=>{
        setForm({
            ...form, image:[""]
        })
    }
    const handleCruz2 = (id)=>{
        setForm2({
            ...form,
            ID: id
        })
        dispatch(putCategory(id,{categoryModify:{image:[""]}} ))
    }
    return (
        <div className="categoreiesContainer">
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
                                NAME
                             </div>
                        </th>
                         <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <div class="flex items-center justify-center">
                                 DESCRIPTION
                            </div>
                         </th>
                        <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <div class="flex items-center justify-center">
                                 IMAGE
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
                                categories.map(c =>{
                                    return(
                             <>
                            <tr className="bg-gray-50 text-center" onFocus={()=>{handleFocus(c)}} onChange={(v)=>{handleChangeEdit(v,c)}}>
                                <td className="p-2 border-r">
                                    <input type="number" className="border p-1 w-20" value={c.id}/>
                                 </td>
                                <td className="p-2 border-r">
                                    <input type="text" className="border p-1" placeholder={c.name}  value={(form2.ID == c.id && form2.name) ||""} name="name"/>
                                 </td>
                                <td className="p-2 border-r">
                                    <input type="text" className="border p-1" placeholder={c.description}  value={(form2.ID == c.id && form2.description) ||""} name="description"/>
                                 </td>
                                 <td className="p-2 border-r image">
                                 {
                                         !error2.image && c.image[0] === ""? (
                                             <>
                                             <p>UPLOAD IMAGE</p>
                                             <input type="file" className="border p-1" name="image" onChange={handleImage2}/>
                                             </>
                                         ):
                                         error2.image && form2.ID == c.id ? (
                                             <>
                                             <p>LOADING...</p>
                                             <input type="file" className="border p-1" name="image"/>
                                             </>
                                         ):(
                                             <>
                                                <img src={c.image[0]} alt="" />
                                                <div className="cruz" onClick={()=>{handleCruz2(c.id)}}>X</div>
                                             </>
                                         )  
                                     }
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

        <div className="createCategories">
        <div className="containerTable">
                <div className="table w-full p-2">
                <table className="w-full border">
                    <thead>
                        <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <div class="flex items-center justify-center">
                                NAME
                             </div>
                        </th>
                         <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <div class="flex items-center justify-center">
                                 DESCRIPTION
                            </div>
                         </th>
                        <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <div class="flex items-center justify-center">
                                 IMAGE
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
                                <input type="text" className="border p-1" name="name" value={form.name}/>
                             </td>
                            <td className="p-2 border-r">
                                <input type="text" className="border p-1" name="description" value={form.description}/>
                            </td>
                            <td className="p-2 border-r image">
                                     {
                                         !error.image && form.image[0] === "" ? (
                                             <>
                                             <p>UPLOAD IMAGE</p>
                                             <input type="file" className="border p-1" name="image" onChange={handleImage}/>
                                             </>
                                         ):
                                         error.image  ? (
                                             <>
                                             <p>LOADING...</p>
                                             <input type="file" className="border p-1" name="image"/>
                                             </>
                                         ):(
                                             <>
                                                <img src={form.image[0]} alt="" />
                                                <div className="cruz" onClick={handleCruz}>X</div>
                                             </>
                                         )  
                                     }
                                     
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
    )
}

export default Categories;