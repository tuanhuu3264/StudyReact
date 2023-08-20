import React, { useState } from 'react';
import CardPhone from './Components/CardPhone';
import AddPhone from './Components/AddPhone';
import SearchPhone from './Components/SearchPhone';
import DeletePhone from './Components/DeletePhone';
function App() {
  const [phoneBooks, setPhoneBooks] = useState([]);
  const [newPhone, setNewPhone] = useState({
    name: "",
    phone: ""
  });
  const [search, setSearch] = useState("");
  const [listBooks, setListBooks] = useState(phoneBooks);
  const SortByName = (phoneBooks) => {
    const sortedPhoneBooks = [...phoneBooks].sort((a, b) => a.name.localeCompare(b.name));
    return sortedPhoneBooks;
  };

  const AddSubmit = (e) => {
    e.preventDefault();
    const sortedPhoneBooks = SortByName([...phoneBooks, { name: newPhone.name, phone: newPhone.phone }]);
    setPhoneBooks(sortedPhoneBooks);
    setNewPhone({ name: "", phone: "" });
    setListBooks(sortedPhoneBooks);
  };
  const SearchSubmit = (e) => {
    e.preventDefault();
    const filteredBooks = phoneBooks.filter(phoneBook =>
      phoneBook.name.toLowerCase().includes(search.toLowerCase()) ||
      phoneBook.phone.includes(search)
    );

    setListBooks(filteredBooks);
  }
  const DeleteDuplicatedPhone = (e) => {
    e.preventDefault();
    const uniquePhoneBooks = phoneBooks.filter((phoneBook, index, self) =>
      index === self.findIndex(pb => pb.phone === phoneBook.phone)
    );

    setPhoneBooks(uniquePhoneBooks);
    setListBooks(uniquePhoneBooks);
  }
  return (
    <>
      <AddPhone onSubmit={AddSubmit} newPhone={newPhone} setNewPhone={setNewPhone} />
      <div className="flex">
      <SearchPhone onSubmit={SearchSubmit} setSearch={setSearch} />
      <DeletePhone onClick={DeleteDuplicatedPhone}>Delete Duplicated</DeletePhone>
      </div>
      {listBooks.length === 0 ? (<div>No phones found phone book list"</div>) : (
        <div className="flex flex-col p-5">
          {listBooks.map((phoneBook) => (
            <CardPhone key={phoneBook.phone} phoneBooks={phoneBook} />
          ))}
        </div>)}
    </>
  );
}

export default App;
