import React from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const AddCoffee = () => {
  const handleAddCoffee = (e) =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const addedCoffee = {name, quantity, supplier, taste,category, details, photo};
    console.log(addedCoffee)

    fetch('http://localhost:5000/addCoffee',{
      method: 'POST',
      headers:{
        'content-type': 'application/json',
      },
      body: JSON.stringify(addedCoffee)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.insertedId){
        Swal.fire({
          title: 'Success!',
          text: 'Coffee Added',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
    })
  }
  return (
    <div className="bg-stone-400 w-3/4 mx-auto p-5 rounded-2xl mt-10">
      <Link to="/" className="underline">Back to Home</Link>
      <div className="text-center w-3/5 mx-auto space-y-2">
        <h2 className="text-2xl font-bold">Add New Coffee</h2>
        <p>
        It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
        </p>
      </div>
      <form onSubmit={handleAddCoffee}>
        {/* row 1 */}
      <div className="flex justify-around gap-12">
      <div className="">
      <label className="label">
            <span className="label-text text-xl font-bold">Name</span>
          </label>
          <input type="text" placeholder="Coffee Name" name="name" className="input input-bordered"  />
      </div>
      <div>
      <label className="label">
            <span className="label-text text-xl font-bold">Available Quantity</span>
          </label>
          <input type="text" placeholder="Available Quantity" name="quantity" className="input input-bordered"  />
      </div>
      </div>
      {/* row 2 */}
      <div className="flex justify-around gap-12">
      <div className="">
      <label className="label">
            <span className="label-text text-xl font-bold">Supplier Name</span>
          </label>
          <input type="text" placeholder="supplier" name="supplier" className="input input-bordered"  />
      </div>
      <div>
      <label className="label">
            <span className="label-text text-xl font-bold">Taste</span>
          </label>
          <input type="text" placeholder="Taste" name="taste" className="input input-bordered"  />
      </div>
      {/* row 3 */}
      </div>
      <div className="flex justify-around gap-12">
      <div className="">
      <label className="label">
            <span className="label-text text-xl font-bold">Category</span>
          </label>
          <input type="text" placeholder="Category" name="category" className="input input-bordered "  />
      </div>
      <div>
      <label className="label">
            <span className="label-text text-xl font-bold">Details</span>
          </label>
          <input type="text" placeholder="Details" name="details" className="input input-bordered"  />
      </div>
      </div>
      <div className="md:ml-32 ">
      <label className="label ">
            <span className="label-text text-xl font-bold">Photo URL</span>
          </label>
          <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered"  />
          
      </div>
      <div className="md:ml-32 mt-5">
      <input type="submit" value="Add Coffee" className="input input-bordered px-16"  />
      </div>
      </form>
    </div>
  );
};

export default AddCoffee;
