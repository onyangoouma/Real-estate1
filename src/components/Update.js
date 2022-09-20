// import React from 'react'
// import './update.css'



// const Form = () => {
//   const styleObject = {
//     "height" : "200px",
  
// }
// const [title, setTitle] = useState("")
// const [region, setRegion] = useState ("")
// const [address, setAddress] = useState ("")
// const [room, setRoom] =useState("")
// const [bedroom, setBedroom] =useState("")
// const [size, setSize] = useState("")
// const [currency, setCurrency]= useState("")
// const [price, setPrice]= useState("")
// const [image_url, setImage_url] =useState("")
// const [description, setDescription] =useState("")

// function handleSubmit(e) {
//   e.preventDefault();

//   fetch("/posts", {
//     method: "post",
//     headers: {
//       "content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       title: title,
//       region: region,
//       address: address,
//       room: room,
//       bedroom: bedroom,
//       size: size,
//       currency: currency,
//       price: price,
//       image_url: image_url,
//       Description: Description,

//     }),
//   })
//   .then((r) => r.json())
//   .then((newDescription) => {
//     setDescription("");
//   });

//   console.log(title);
//   console.log(region);
//   console.log(address);
//   console.log(room);
//   console.log(bedroom);
//   console.log(size);
//   console.log(currency);
//   console.log(price);
//   console.log(image_url);
//   console.log(description);
// }

//   return (
 
// <div className="container">
//   <form onSubmit={handleSubmit}>
//   <div className="row">
//     <div className="col-25">
//       <label for="title" onChange={(e) => setTitle(e.target.value)}>title</label>
//     </div>
//     <div className="col-75">
//       <input type="text" id="address" title="address" placeholder="title.."/>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-25">
//       <label for="room">Room</label>
//     </div>
//     <div className="col-75">

//       <input type="text" id="room" name="room" placeholder="room.."/>
  
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-25">
//       <label for="address">bedroom</label>
//     </div>
//     <div className="col-75">
//       <input type="text" id="bedroom" name="bedroom" placeholder="bedrooom.."/>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-25">
//       <label for="size">Size</label>
//     </div>
//     <div className="col-75">
//       <input type="text" id="size" name="size" placeholder="Size.."/>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-25">
//       <label for="currency">Currency</label>
//     </div>
//     <div className="col-75">
//       <input type="text" id="currency" name="currency" placeholder="currency.."/>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-25">
//       <label for="price">Price</label>
//     </div>
//     <div className="col-75">
//       <input type="text" id="price" name="price" placeholder="price.."/>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-25">
//       <label for="fname">image_url</label>
//     </div>
//     <div className="col-75">
//       <input type="text" id="image url" name="image url" placeholder="image url.."/>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-25">
//       <label for="lname">Address</label>
//     </div>
//     <div className="col-75">
//       <input type="text" id="address" name="address" placeholder="address.."/>
//     </div>
//   </div>
//   <div className="row">
//     <div class="col-25">
//       <label for="region">Region</label>
//     </div>
//     <div className="col-75">
//       <select id="region" name="region">
//         <option value="karen">Karen</option>
//         <option value="Ngong">Ngong</option>
//         <option value="Kitisuru">Kitisuru</option>
//         <option value="Muthaiga">Muthaiga</option>
//       </select>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-25">
//       <label for="subject">Description</label>
//     </div>
//     <div className="col-75">
//       <textarea id="subject" name="subject" placeholder="Provide the description of the house.." style={styleObject}/>
//     </div>
//   </div>
//   <br/>
//   <div className="row">
//     <input type="submit" value="Submit"/>
//   </div>
//   </form>
// </div>


//   )
// }

// export default Form


import {Link} from "react-router-dom";
import React, { useState } from "react";
import "./update.css"


  function Form(){
    const [title, setTitle] = useState("")
    const [region, setRegion] = useState("")
    const [address, setAddress] = useState("")
    const [room, setRoom] = useState("")
    const [size, setSize] = useState("")
    const [image_url, setImage_url] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [bedroom, setBedroom] = useState("")
    const [currency, setCurrency] = useState("")


  
    function handleSubmit(e) {
      e.preventDefault();
  
      fetch("http://localhost:9292/rents", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          region: region,
          address: address,
          room: room,
          size: size,
          image: image_url,
          price: price,
          description: description,
          bedroom: bedroom,
          currency: currency

        }),
      })
        .then((r) => r.json())
        .then((newDescription) => {
          setDescription("");
        });
        console.log(title);
        console.log(region);
        console.log(address);
        console.log(room);
        console.log(size);
        console.log(image_url);
        console.log(price);
        console.log(description);

    }
  return (
    <div className="write">
        <img 
        className="writeImg"
        src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        alt="" 
        />
       <form className="writeForm" onSubmit={handleSubmit}>
           <div className="writeFormGroup">
                <input onChange={(e) => setTitle(e.target.value)} style={{display:"none"}}/>
                <input 
                type="text" 
                onChange={(e) => setTitle(e.target.value)}
                 placeholder="Title" className="writeInput" autoFocus={true}/>
           </div>



           <div className="writeFormGroup">
                <input onChange={(e) => setRegion(e.target.value)} style={{display:"none"}}/>
                <input 
                type="text" 
                onChange={(e) => setRegion(e.target.value)}
                 placeholder="Region" className="writeInput" autoFocus={true}/>
           </div>


           <div className="writeFormGroup">
                <input type="file"  onChange={(e) => setPrice(e.target.value)} style={{display:"none"}}/>
                <input 
                type="text" 
                onChange={(e) => setPrice(e.target.value)}
                 placeholder="price" className="writeInput" autoFocus={true}/>
           </div>




           <div className="writeFormGroup">
                <input  onChange={(e) => setRoom(e.target.value)} style={{display:"none"}}/>
                <input 
                type="text" 
                onChange={(e) => setRoom(e.target.value)}
                 placeholder="Room" className="writeInput" autoFocus={true}/>
           </div>


           <div className="writeFormGroup">
                <input type="file"  onChange={(e) => setSize(e.target.value)} style={{display:"none"}}/>
                <input 
                type="text" 
                onChange={(e) => setSize(e.target.value)}
                 placeholder="Size" className="writeInput" autoFocus={true}/>
           </div>


           <div className="writeFormGroup">
                <input type="file"  onChange={(e) => setImage_url(e.target.value)} style={{display:"none"}}/>
                <input 
                type="text" 
                onChange={(e) => setImage_url(e.target.value)}
                 placeholder="Image_url" className="writeInput" autoFocus={true}/>
           </div>

           <div className="writeFormGroup">
                <input type="file"  onChange={(e) => setCurrency(e.target.value)} style={{display:"none"}}/>
                <input 
                type="text" 
                onChange={(e) => setCurrency(e.target.value)}
                 placeholder="Currency" className="writeInput" autoFocus={true}/> 
           </div>

           <div className="writeFormGroup">
                <input type="file"  onChange={(e) => setBedroom(e.target.value)} style={{display:"none"}}/>
                <input 
                type="text" 
                onChange={(e) => setBedroom(e.target.value)}
                 placeholder="Bedroom" className="writeInput" autoFocus={true}/>
           </div>

             <div className="writeForm">
           <label onChange={(e) => setAddress(e.target.value)} className="blog-names">Choose a Category:</label>
                  <select onChange={(e) => setAddress(e.target.value)} name="technology" id="technology">
                  <option value="karen">karen</option>
                  <option value="kitisuru">Kitisuru</option>
                  <option value="kitisuru">Ngong</option>
                  <option value="Muthaiga">Muthaiga</option>
                  </select>
                </div>

                <div className="writeFormGroup">
               <textarea onChange={(e) => setDescription(e.target.value)}
               placeholder="Tell your story..." 
               type="text" value={description}
               className="writeInput writeText">
               </textarea>
           </div>
           <button className="writeSubmit">Update</button>
           <Link className="link"  to="/write">Write</Link>

       </form>
    </div>
  )
}

export default Form