import React, { useState } from "react";
import "./Categories.css";
import { useDispatch, useSelector } from "react-redux";
import { postCategory, deleteCategory, putCategory, getAllCategory} from "../../../../redux/action/categories";
import axios from "axios";

const Categories = ()=>{
    // Me traigo todas las categorias de el estado global
    const {resp} = useSelector((state) => state.category);
    const categories = resp;
    const dispatch = useDispatch();

    //--------USE EFFECT-----------
    React.useEffect(()=>{
        dispatch(getAllCategory())
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
                <table class="border-collapse w-full">
                    <thead>
                        <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                            <div class="flex items-center justify-center">
                              ID
                            </div>
                        </th>
                         <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                            
                                NAME
                            
                        </th>
                         <th  class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                            
                                 DESCRIPTION
                            
                         </th>
                        <th  class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                            
                                 IMAGE
                            
                        </th>
                        <th  class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
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
                            <tr class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0" onFocus={()=>{handleFocus(c)}} onChange={(v)=>{handleChangeEdit(v,c)}}>
                                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                    <input type="number" className="border p-1 w-20" value={c.id}/>
                                 </td>
                                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                    <input type="text" className="border p-1" placeholder={c.name}  value={(form2.ID == c.id && form2.name) ||""} name="name"/>
                                 </td>
                                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                    <input type="text" className="border p-1" placeholder={c.description}  value={(form2.ID == c.id && form2.description) ||""} name="description"/>
                                 </td>
                                 <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
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
                                 <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                       <a href="#" className="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin bg-secondary text-white" onClick={()=> handleClickEdit(c.id)}>Edit</a>
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
                <table class="border-collapse w-full">
                    <thead>
                        <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                                NAME  
                        </th>
                         <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                                 DESCRIPTION
                         </th>
                        <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                                 IMAGE
                        </th>
                        <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                                 ACTION
                        </th>
                    </thead>
                    <tbody   onChange={handleChange}>
                         <tr class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                <input type="text" placeholder="name" className="border p-1" name="name" value={form.name}/>
                             </td>
                            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                <input type="text" placeholder="description" className="border p-1" name="description" value={form.description}/>
                            </td>
                            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
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
                             <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                               <a href="#" class="w-full lg:w-auto p-3 text-gray-800 text-center block lg:table-cell relative lg:static bg-secondary text-white" onClick={handleSendPost}>Create</a>
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