import React, {useState, useEffect} from 'react';
import { Route, Routes } from "react-router-dom";
import Sweaters from './Sweaters';
import Sneakers from './Sneakers';
import Bottoms from './Bottoms'
import Header from './Header'
import Home from './Home';
import Login from './Login';
import About from './About';
import ShoppingCart from './ShoppingCart'; 


function App() {
  const [cloths, setCloths] = useState([]);
  const [users, setUsers] = useState([]);
  const [loginUser, setLoginUser] = useState({});
  const [userItems, setUserItems] = useState([]);

  //fetch for cloths below
  useEffect(() => {
    fetch("/cloths")
    .then(res => res.json())
    .then((clothsData) => {
        setCloths(clothsData)
    })
  }, []);
  //fetch for users below
  useEffect(() => {
    fetch("/users")
    .then(res => res.json())
    .then((userData) => {
        setUsers(userData)
    })
  }, []);
  
  useEffect(() => {
    if (loginUser.id){
    fetch(`/users/${loginUser.id}`)
        .then(res => res.json())
        .then((userItemsData) => {
            setUserItems(userItemsData)
    })}
  }, [loginUser]);

  function onLogin (username, password){
    let filteredUser = users.find(user => user.username === username && user.password === password)
    setLoginUser(filteredUser)
  }

  function handleAddToCart(clickedCloth) {
    if (loginUser.id){
      console.log(clickedCloth)  
      console.log(loginUser.id) 
      fetch(`/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          user_id: loginUser.id,
          cloth_id: clickedCloth.id     
         })
      })
      .then(res => res.json())
      .then((addedNewItem) => {
          console.log(userItems)
          console.log(addedNewItem)
          setUserItems([...userItems, addedNewItem])
      }
      )
    }
    else{
      alert("You are not logged in")
    }
  }
  
  function handleRemoveFromCart(clickedCloth) {
    if (loginUser.id){
      fetch(`/cloths/${clickedCloth.id}/${loginUser.id}`, {
        method: 'DELETE'
      })
      .then(resp=> resp.json())
      .then(data=>{
        const filteredItems = userItems.filter(item => item.id !== data.id)
        setUserItems(filteredItems)
      })
    } else{
      alert("You are not logged in")
    }
  }

  return (
    <div className="App">
      <Header loginUser={loginUser}/> 
        <Routes>
          <Route exact path="/"
           element={<Home cloths={cloths}/>
          }/>
          <Route path="/sweaters"
            element={<Sweaters handleAddToCart={handleAddToCart}/>}
          />
          <Route path="/sneakers"
            element={<Sneakers handleAddToCart={handleAddToCart}/>}
          />
          <Route path="/bottoms"
            element={<Bottoms handleAddToCart={handleAddToCart}/>}
          />
          <Route path ="/login"
            element={<Login onLogin={onLogin} users={users}/>}
          />
          <Route path ="/about"
            element={<About />}
          />
          <Route path ="/shopping-cart"
            element={<ShoppingCart userItems={userItems} handleRemoveFromCart={handleRemoveFromCart} loginUser={loginUser}/>}
          />
        </Routes>
    </div>
  )
}

export default App;