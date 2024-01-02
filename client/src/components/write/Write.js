// import React, { useContext, useState } from 'react'
// import './write.css'
// import { Context } from '../../context/Context'
// import axios from 'axios'

// const Write = () => {
//     const [title, setTitle] = useState("")
//     const [price, setPrice] = useState("")
//     const [rating, setRating] = useState("")
//     const [category, setCategory] = useState("")
//     const [file, setFile] = useState(null)
//     const {user} = useContext(Context)
//     const userData = user.user;

//     const handleSubmit = async(e) => {
//         e.preventDefault()
//         const newElemenet = {
//             username : userData.username,
//             title,
//             price,
//             rating,
//             category
//         };
//         if (file){
//             const data = new FormData()
//             const filename = Date.now() + file.name
//             data.append("name", filename)
//             data.append("file", file)
//             newElemenet.photo = filename;
//             try {
//                 await axios.post('/upload', data)
//             } catch (error) {
//                 console.log(error);
//             }
//             try {
//                 const res = await axios.post("/data", newElemenet)
//                 window.location.replace("/data/"+ res.data._id)
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//         console.log(newElemenet);
//     }
//   return (
//     <div className='write'>
//     {file && (
//         <img  className='writeImage'
//             src={URL.createObjectURL(file)}
//             alt=""
//         />
//     )}
        
//         <form className='writeForm' onSubmit={handleSubmit}>
//             <div className='writeFormGroup'>
//                 <label htmlFor='fileInput'>
//                     <i className="writeIcon fa-solid fa-plus"></i>
//                 </label>
//                 <div>
//                 <input type='file' id="fileInput" style={{display:"none"}} onChange={(e) => setFile(e.target.files[0])}></input>
//                 <input type='text'  className='writeInput' placeholder="enter title" autoFocus={true} onChange={(e) => setTitle(e.target.value)}></input>
//                 <input type='text'  className='writeInput' placeholder="enter price" autoFocus={true} onChange={(e) => setPrice(e.target.value)}></input>
//                 <input type='text'  className='writeInput' placeholder="enter rating" autoFocus={true} onChange={(e) => setRating(e.target.value)}></input>
//                 <input type='text'  className='writeInput' placeholder="enter category" autoFocus={true} onChange={(e) => setCategory(e.target.value)}></input>
//                 </div>
                
//             </div>
//             {/* <div className='writeFormGroup'>
//                 <textarea placeholder='Tell your story...' type="text" className='writeInput writeText' onChange={(e) => setDesc(e.target.value)} cols={100}></textarea>
//             </div> */}
//             <button className='writeSubmit' type='submit'>Publish</button>
//         </form> 
//     </div>
//   )
// }

// export default Write
