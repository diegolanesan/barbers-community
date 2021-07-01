import React, { useState } from "react";
import "./Services.css";
import { useDispatch, useSelector } from "react-redux";
import { postCategory, deleteCategory, putCategory, getCategory} from "../../../../redux/action/categories";
import axios from "axios";
import { deleteServicesCRUD, postServicesCRUD, putServicesCRUD } from "../../../../redux/action/servicesCRUD";

const Services = ()=>{
    // Me traigo todas las categorias de el estado global
    const state = useSelector((state) => state);
    const categories = state.category.resp;
    const services = state.serviceCrud.resp;
    const dispatch = useDispatch();

    //--------USE EFFECT-----------
    React.useEffect(()=>{
        dispatch(getCategory())
    },[])



    // --------------POST---------------
    const [form, setForm] = useState({
        name:"",
        description:"",
        image:[""],
        price:0,
        ID:0,
        categories:[]
    });
    const handleChange = (v)=>{
        const name = v.target.name;
        const value = v.target.value;
        console.log(name+" : "+value)
        if(name !== "image"){
            setForm({
                ...form, [name]: value
           })
        }  
    };

    const handleSendPost = ()=>{
        console.log(form)
       if(form.name !== "" && form.description !== "" && form.image[0] !== "" && form.price !== 0 && form.categories[0] !== "select" && form.categories[0] !== ""){
             dispatch(postServicesCRUD({
                 service:{
                     name: form.name,
                     description: form.description,
                     image: form.image,
                     price: form.price,                     
                 },
                 idCategory: form.categories
                }))
            
       }else{
           alert("complete todos los campos.")
           
       }
        setForm({
            name:"",
            description:"",
            image:[""],
            price:0,
            categories: [""]
        })
    };

    // --------------PUT---------------
    const [form2, setForm2] = useState({
        name:"",
        description:"",
        image:[""],
        ID:70,
        price:0
    });

    const handleChangeEdit = (v, c)=>{
        const name = v.target.name;
        const value = v.target.value;
        if(name !== "image"){
            setForm2({
                ...form2, [name]: value
           })
        }
       
    };

    const handleClickEdit = (id)=>{
      form2.description === "" && delete form2.description;
      form2.name === "" && delete form2.name;
      form2.image[0]=== "" && delete form2.image;
      form2.price === 0 && delete form2.price
      delete form2.ID
      dispatch(putServicesCRUD({serviceModify:form2, id} ))
     
      setForm2({
        name:"",
        description:"",
        image:[""],
        price: 0,
        ID:70
      })
    };

    const handleFocus = (c)=>{
        setForm2({
            ...form2, ID: c.id
        })
    } 


    // --------------DELETE---------------
    const handleDeleteCategory = (id)=>{
        dispatch(deleteServicesCRUD(id))
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
        dispatch(putServicesCRUD({serviceModify:{image:[url]},id:form2.ID} ));
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
        dispatch(putServicesCRUD({serviceModify:{image:[""]},id} ))
    }
    return (
        <div className="servicesContainer">
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
                                PRICE
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
                                services.map(c =>{
                                    return(
                             <>
                            <tr className="bg-gray-50 text-center" onFocus={()=>{handleFocus(c)}} onChange={(v)=>{handleChangeEdit(v,c)}}>
                                <td className="p-2 border-r">
                                    <input type="number" className="border p-1 " value={c.id}/>
                                 </td>
                                <td className="p-2 border-r">
                                    <input type="text" className="border p-1" placeholder={c.name}  value={(form2.ID == c.id && form2.name) ||""} name="name"/>
                                 </td>
                                 <td className="p-2 border-r">
                                    <input type="number" className="border p-1" placeholder={c.price}  value={(form2.ID == c.id && form2.price) ||""} name="price"/>
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
                                PRICE
                             </div>
                        </th>
                         <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <div class="flex items-center justify-center">
                                 DESCRIPTION
                            </div>
                         </th>
                         <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <div class="flex items-center justify-center">
                                CATEGORY
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
                                <input type="number" className="border p-1" name="price" value={form.price}/>
                             </td>
                            <td className="p-2 border-r">
                                <input type="text" className="border p-1" name="description" value={form.description}/>
                            </td>
                            <td className="p-2 border-r">
                                <select name="categories" id="categories" >
                                <option value="select" >select</option>
                                    {
                                        categories.map((c)=>{
                                            return(
                                                <option value={c.id} id={c.name} >{c.name}</option>
                                            )
                                        })
                                    }
                                </select>
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

export default Services;

// Fonts
// Fonts para titulos (h1, h2, h3, etc): Prata
// Fonts para párrafos y demás: Lato