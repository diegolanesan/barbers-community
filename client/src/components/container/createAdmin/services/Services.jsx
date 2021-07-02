import React, { useState } from "react";
import "./Services.css";
import { useDispatch, useSelector } from "react-redux";
import { postCategory, deleteCategory, putCategory, getAllCategory} from "../../../../redux/action/categories";
import axios from "axios";
import Swal from 'sweetalert2'
import { deleteServicesCRUD, postServicesCRUD, putServicesCRUD } from "../../../../redux/action/servicesCRUD";
import { getServices } from "../../../../redux/action/services";

const Services = ()=>{
    // Me traigo todas las categorias de el estado global
    const state = useSelector((state) => state);
    const categories = state.category.resp;
    const services = state.serviceCrud.resp;
    const dispatch = useDispatch();

    //--------USE EFFECT-----------
    React.useEffect(()=>{
        dispatch(getServices())
        dispatch(getAllCategory())
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
           Swal.fire({
            title: 'All camps must be completed',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
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
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteServicesCRUD(id))
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                window.location.reload()
            }
        })
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
                <table class="border-collapse w-full">
                    <thead>
                        <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                            <div class="flex items-center justify-center">
                              ID
                            </div>
                        </th>
                         <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                            <div class="flex items-center justify-center">
                                NAME
                             </div>
                        </th>
                        <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                            <div class="flex items-center justify-center">
                                PRICE
                             </div>
                        </th>
                         <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                            <div class="flex items-center justify-center">
                                 DESCRIPTION
                            </div>
                         </th>
                        <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                            <div class="flex items-center justify-center">
                                 IMAGE
                            </div>
                        </th>
                        <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
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
                            <tr class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0" onFocus={()=>{handleFocus(c)}} onChange={(v)=>{handleChangeEdit(v,c)}}>
                                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                    <input type="number" className="border p-1  w-20" value={c.id}/>
                                 </td>
                                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                    <input type="text" className="border p-1  w-20" placeholder={c.name}  value={(form2.ID == c.id && form2.name) ||""} name="name"/>
                                 </td>
                                 <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                    <input type="number" className="border p-1  w-20" placeholder={c.price}  value={(form2.ID == c.id && form2.price) ||""} name="price"/>
                                 </td>
                                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                    <input type="text" className="border p-1  w-20" placeholder={c.description}  value={(form2.ID == c.id && form2.description) ||""} name="description"/>
                                 </td>
                                 <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static h-24">
                                 {
                                         !error2.image && c.image[0] === ""? (
                                             <>
                                             <p>UPLOAD IMAGE</p>
                                             <input type="file" className="border p-1  w-20" name="image" onChange={handleImage2}/>
                                             </>
                                         ):
                                         error2.image && form2.ID == c.id ? (
                                             <>
                                             <p>LOADING...</p>
                                             <input type="file" className="border p-1  w-20" name="image"/>
                                             </>
                                         ):(
                                             <div class="flex justify-center">
                                                <img class="object-scale-down h-20" src={c.image[0]} alt="" />
                                                <div className="cruz" onClick={()=>{handleCruz2(c.id)}}>X</div>
                                             </div>
                                         )  
                                     }
                                 </td>
                                 <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                       <a href="#" class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static bg-secondary text-white" onClick={()=> handleClickEdit(c.id)}>Edit</a>
                                        <a href="#" class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static bg-red-500 text-white" onClick={()=>{handleDeleteCategory(c.id)}}>Remove</a>
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
                <div className="table w-full p-1">
                <table class="border-collapse w-full">
                    <thead>
                        <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                            <div class="flex items-center justify-center">
                                NAME
                             </div>
                        </th>
                        <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                            <div class="flex items-center justify-center">
                                PRICE
                             </div>
                        </th>
                         <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                            <div class="flex items-center justify-center">
                                 DESCRIPTION
                            </div>
                         </th>
                         <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                            <div class="flex items-center justify-center">
                                CATEGORY
                            </div>
                         </th>
                        <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                            <div class="flex items-center justify-center">
                                 IMAGE
                            </div>
                        </th>
                        <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                            <div className="flex items-center justify-center">
                                 ACTION
                            </div>
                        </th>
                    </thead>
                    <tbody   onChange={handleChange}>
                         <tr class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                <input class="w-2/5" type="text" placeholder="name"className="border p-1 w-20" name="name" value={form.name}/>
                             </td>
                             <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                <input class="w-2/5" type="number" placeholder="price" className="border p-1  w-20" name="price" value={form.price}/>
                             </td>
                            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                <input class="w-2/5" type="text" placeholder="description" className="border p-1  w-20" name="description" value={form.description}/>
                            </td>
                            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
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
                            
                            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                     {
                                         !error.image && form.image[0] === "" ? (
                                             <>
                                             <p>UPLOAD IMAGE</p>
                                             <input type="file" className="border p-1 w-4/5" name="image" onChange={handleImage}/>
                                             </>
                                         ):
                                         error.image  ? (
                                             <>
                                             <p>LOADING...</p>
                                             <input type="file" class="border p-1 w-4/5" name="image"/>
                                             </>
                                         ):(
                                             <>
                                                <img src={form.image[0]} alt="" />
                                                <div className="cruz" onClick={handleCruz}>X</div>
                                             </>
                                         )  
                                     }
                                     
                                 </td>
                             <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
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

export default Services;

// Fonts
// Fonts para titulos (h1, h2, h3, etc): Prata
// Fonts para párrafos y demás: Lato