import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
// import axios from "axios";

const AddBooks = () => {

  const { user } = useContext(AuthContext);

  const { email } = user;

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    const img = form.img.value;
    const name = form.name.value;
    const qOfBooks = form.qOfBooks.value;
    const aName = form.aName.value;
    const category = form.category.value;
    const rating = form.rating.value;
    const aBooks = form.aBooks.value;
    const sDescription = form.sDescription.value;

    const book = { img, name, email, qOfBooks, aName, category, rating, aBooks, sDescription };


    fetch('http://localhost:4000/books', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(book)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Your Book added successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
      })


    // axios.post('http://localhost:4000/books', book)
    // .then(data => {
    //   console.log(data.data);
    // })



    console.log(book);
    // console.log(user);
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-10">
      <div>
        <label className="text-base font-bold">Image</label>
        <input type="text" name="img" className="input bg-slate-300 w-full" placeholder="Enter Your Image Link" />
      </div>

      <div>
        <label className="text-base font-bold">Name</label>
        <input type="text" name="name" className="input bg-slate-300 w-full" placeholder="Enter Your Name" />
      </div>

      <div>
        <label className="text-base font-bold">Quantity of Book</label>
        <input type="number" name="qOfBooks" className="input bg-slate-300 w-full" placeholder="Enter Your Quantity of Book" />
      </div>

      <div>
        <label className="text-base font-bold">Author Name</label>
        <input type="text" name="aName" className="input bg-slate-300 w-full" placeholder="Enter Your Author Name" />
      </div>

      <div>
        <label className="text-base font-bold">Category</label>
        <input type="text" name="category" className="input bg-slate-300 w-full" placeholder="Enter Your Category" />
      </div>

      <div>
        <label className="text-base font-bold">Rating</label>
        <input type="number" name="rating" className="input bg-slate-300 w-full" min={1} max={5} placeholder="Enter Your Rating" />
      </div>

      <div className="col-span-2">
        <label className="text-base font-bold">About Books</label>
        <input type="text" name="aBooks" className="input bg-slate-300 w-full" placeholder="Some Contents about Books" />
      </div>

      <div className="col-span-2">
        <label className="text-base font-bold">Short Descriptin</label>
        <input type="text" name="sDescription" className="input bg-slate-300 w-full p-5 pb-40" placeholder="Short Description" />
      </div>

      <div className="col-span-2">
        <input type="submit" className="btn btn-outline text-orange border-2 font-bold transition ease-in-out delay-150 duration-300 hover:scale-110 hover:text-white hover:border-orange hover:bg-orange w-full" value='Add Books' />
      </div>

    </form>
  );
};

export default AddBooks;