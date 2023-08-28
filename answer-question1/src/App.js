import React, { useState } from 'react';
import CardPhone from './Components/CardPhone';
import { v4 as uuidv4 } from 'uuid';
import clsx from 'clsx';

function phoneFormat(phone) {
  return `(${phone.substring(0, 3)})-${phone.substring(3, 6)}-${phone.substring(6)}`
}
function checkPhone(phone) {
  return !isNaN(phone) && phone.length === 10;
}
let listPhone=[];
function App() {
  const [newPhone, setNewPhone] = useState({
    name: "",
    phone: ""
  });
  const [errorName, setErrorName] = useState(false); // State for input error
  const [search, setSearch] = useState("");
  const [listBooks, setListBooks] = useState([]);
  const [errorPhoneInput, setErrorPhoneInput] = useState(false);

  const SortByName = (phoneBooks) => {
    const sortedPhoneBooks = [...phoneBooks].sort((a, b) => a.name.localeCompare(b.name));
    return sortedPhoneBooks;
  };

  const AddSubmit = (e) => {
    e.preventDefault();
    const isPhoneValid = newPhone.phone.trim().length > 0 && checkPhone(newPhone.phone);
    const isNameValid = newPhone.name.trim().length > 0;
    setErrorPhoneInput(!isPhoneValid);
    setErrorName(!isNameValid);
    if (isPhoneValid && isNameValid) {
      const newPhoneEntry = {
        id: uuidv4(),
        name: newPhone.name,
        phone: newPhone.phone
      };
      
      setListBooks(SortByName([...listPhone, newPhoneEntry]));
      listPhone=SortByName([...listPhone, newPhoneEntry]);
      setNewPhone({ name: "", phone: "" });
    }
  };

  const SearchSubmit = (e) => {
    e.preventDefault();
    const filteredBooks = listPhone.filter(phoneBook =>
      phoneBook.name.toLowerCase().includes(search.toLowerCase()) ||
      phoneBook.phone.includes(search)
    );
    setListBooks(filteredBooks);
  }

  const DeleteDuplicatedPhone = (e) => {
    const uniquePhoneBooks = listPhone.filter((phoneBook, index, self) =>
      index === self.findIndex(pb => pb.phone === phoneBook.phone)
    );

    listPhone=uniquePhoneBooks;
    setListBooks(uniquePhoneBooks);
  }

  return (
    <>
      <div className="flex ">
        <form onSubmit={AddSubmit} className='flex'>
          <div>
          <input
            type="text"
            placeholder="Name"
            className={clsx("w-48 h-8 border-2 rounded-xl ml-2 mr-2",errorName===true? "border-red-700" : " border-x-gray-600")}
            value={newPhone.name}
            onChange={(e) => setNewPhone({ ...newPhone, name: e.target.value })}
          />
          {errorName && <div className="text-red-700">Error name input</div>}
          </div>
          <div>
          <input
            type="text"
            placeholder="Phone number"
            className={clsx("w-48 h-8 border-2 rounded-xl ml-2 mr-2",errorPhoneInput===true? "border-red-700" : " border-x-gray-600")}
            value={newPhone.phone}
            onChange={(e) => setNewPhone({ ...newPhone, phone: e.target.value })}
          />
          {errorPhoneInput && <div className="text-red-700">Error phone number input</div>}
          </div>
          <input type="submit" value="Add" className="w-28 h-8 bg-blue-900 text-white text-xl rounded-lg" />
        </form>
      </div>
      
      <div className="flex">
        <div className="mt-2">
          <form onSubmit={SearchSubmit}>
            <input type="text" placeholder='Finding text' className="w-80 h-8 border-2 border-gray-600 rounded-xl ml-2 mr-2" onChange={(e) => { setSearch(e.target.value) }} />
            <input type="submit" value="Finding" className="w-20 h-8 bg-blue-900 text-white text-xl rounded-lg pr-2" />
          </form>
        </div>
        <button className="w-20 h-8 bg-blue-900 text-white text-xl rounded-lg ml-2 mt-2" onClick={DeleteDuplicatedPhone}> Delete Duplicate</button>
      </div>
      {listBooks.length === 0 ? (<div>No phones found phone book list"</div>) : (
        <div className="flex flex-col p-5">
          {listBooks.map((phoneBook) => (
            <CardPhone key={phoneBook.id} phoneBooks={phoneBook} phoneFormat={phoneFormat} />
          ))}
        </div>)}
    </>
  );
}

export default App;
