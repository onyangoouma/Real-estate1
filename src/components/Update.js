import React from 'react'
import './update.css'



const Form = () => {
  const styleObject = {
    "height" : "200px",
  
}
const [title, setTitle] = useState("")
const [region, setRegion] = useState ("")
const [address, setAddress] = useState ("")
const [room, setRoom] =useState("")
const [bedroom, setBedroom] =useState("")
const [size, setSize] = useState("")
const [currency, setCurrency]= useState("")
const [price, setPrice]= useState("")
const [image_url, setImage_url] =useState("")
const [description, setDescription] =useState("")

function handleSubmit(e) {
  e.preventDefault();

  fetch("/posts", {
    method: "post",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      region: region,
      address: address,
      room: room,
      bedroom: bedroom,
      size: size,
      currency: currency,
      price: price,
      image_url: image_url,
      Description: Description,

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
  console.log(bedroom);
  console.log(size);
  console.log(currency);
  console.log(price);
  console.log(image_url);
  console.log(description);
}

  return (
 
<div className="container">
  <form>
  <div className="row">
    <div className="col-25">
      <label for="title">title</label>
    </div>
    <div className="col-75">
      <input type="text" id="address" title="address" placeholder="title.."/>
    </div>
  </div>
  <div className="row">
    <div className="col-25">
      <label for="room">Room</label>
    </div>
    <div className="col-75">
      <input type="text" id="room" name="room" placeholder="room.."/>
    </div>
  </div>
  <div className="row">
    <div className="col-25">
      <label for="address">bedroom</label>
    </div>
    <div className="col-75">
      <input type="text" id="bedroom" name="bedroom" placeholder="bedrooom.."/>
    </div>
  </div>
  <div className="row">
    <div className="col-25">
      <label for="size">Size</label>
    </div>
    <div className="col-75">
      <input type="text" id="size" name="size" placeholder="Size.."/>
    </div>
  </div>
  <div className="row">
    <div className="col-25">
      <label for="currency">Currency</label>
    </div>
    <div className="col-75">
      <input type="text" id="currency" name="currency" placeholder="currency.."/>
    </div>
  </div>
  <div className="row">
    <div className="col-25">
      <label for="price">Price</label>
    </div>
    <div className="col-75">
      <input type="text" id="price" name="price" placeholder="price.."/>
    </div>
  </div>
  <div className="row">
    <div className="col-25">
      <label for="fname">image_url</label>
    </div>
    <div className="col-75">
      <input type="text" id="image url" name="image url" placeholder="image url.."/>
    </div>
  </div>
  <div className="row">
    <div className="col-25">
      <label for="lname">Address</label>
    </div>
    <div className="col-75">
      <input type="text" id="address" name="address" placeholder="address.."/>
    </div>
  </div>
  <div className="row">
    <div class="col-25">
      <label for="region">Region</label>
    </div>
    <div className="col-75">
      <select id="region" name="region">
        <option value="karen">Karen</option>
        <option value="Ngong">Ngong</option>
        <option value="Kitisuru">Kitisuru</option>
        <option value="Muthaiga">Muthaiga</option>
      </select>
    </div>
  </div>
  <div className="row">
    <div className="col-25">
      <label for="subject">Description</label>
    </div>
    <div className="col-75">
      <textarea id="subject" name="subject" placeholder="Provide the description of the house.." style={styleObject}/>
    </div>
  </div>
  <br/>
  <div className="row">
    <input type="submit" value="Submit"/>
  </div>
  </form>
</div>


  )
}

export default Form

