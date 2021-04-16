import React, {useState} from 'react';
import style from './DescriptionData.module.css';
import EditDescriptionData from './editDescriptionData/EditDescriptionData';

const DescriptionData = React.memo(({profile, upgradeProfile})=>{
   const [edit, setEdit] = useState(false);

   const submit = (valuesForm) => {
      upgradeProfile(valuesForm);
      setEdit(!edit);
   } 

   return( 
        <div className={style.container}>
            
           <button onClick={()=>{setEdit(!edit)}}>Edit</button>

           {edit? <EditDescriptionData onSubmit={submit} edit={edit} setEdit={setEdit} />: 

           <div className={style.aboutMe}>
        
              <div className={style.descriptionItems}><span>AboutMe</span><p>{profile.aboutMe}</p></div>
               
              <dl className={style.descriptionItems}>
                 <dt>Contacts</dt>
                 <dd>Facebook: {profile.contacts.facebook}null</dd>
                 <dd>Github: {profile.contacts.github}null</dd>
                 <dd>Vk: {profile.contacts.vk}null</dd>
              </dl>

              <div className={style.descriptionItems}><span>FullName</span><p>{profile.fullName}</p></div>
              <div className={style.descriptionItems}><span>Looking for a job</span><p>{profile.lookingForAJob}</p></div>
              <div className={style.descriptionItems}><span>Looking for a job description</span><p>{profile.lookingForAJobDescription}</p></div>
           </div>

           }

        </div>
   )
})

export default DescriptionData;