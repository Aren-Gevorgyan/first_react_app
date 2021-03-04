import React from 'react';
import UsersItem from "./usersItem/UsersItem";
import style from './Users.module.css';

const Users = (props) => {
   
   if(props.arrayUsers.length === 0){
     props.usersData([
      {
          id: 1,
          follow: false,
          photo: 'https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg',
          name: "Armen",
          status: "Es hajoxak em",
          location: { city: "Vanadzor", country: "Armenia" }
      },
      {
          id: 2,
          follow: false,
          photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBT5gubg-W3PkfaYaEWF-RaAYaygABWYscJQ&usqp=CAU',
          name: "Karmen",
          status: "Es hajoxak em",
          location: { city: "Erevan", country: "Armenia" }
      },
      {
          id: 3,
          follow: false,
          photo: 'https://img2.goodfon.ru/wallpaper/nbig/c/cf/vysota-gora-zakat-priroda.jpg',
          name: "Karen",
          status: "Es hajoxak em",
          location: { city: "Gyumri", country: "Armenia" }
      },
      {
          id: 4,
          follow: false,
          photo: 'https://img5.goodfon.ru/wallpaper/nbig/8/af/zakat-gory-chelovek.jpg',
          name: "Aren",
          status: "Es hajoxak em",
          location: { city: "Abovyan", country: "Armenia" }
      },])
   }
    
   const usersItem = props.arrayUsers.map(value => {
       return <UsersItem 
                 key={value.id} 
                 id={value.id} 
                 name={value.name} 
                 photo={value.photo}
                 status={value.status}
                 city={value.location.city}
                 country={value.location.country}
                 follow={value.follow}
                 following={props.following}/>
    })

    return (
       <div className={style.container}>

          <div>
            <h3>Users</h3>
            {usersItem}

            <div className={style.showMore}>
              <button> Show more </button>
            </div>
          </div>

       </div>
    )
}

export default Users;