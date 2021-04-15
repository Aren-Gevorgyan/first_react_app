import React, {useState} from 'react';
import style from './DescriptionData.module.css';
import EditDescriptionData from './editDescriptionData/EditDescriptionData';

const DescriptionData = React.memo(({profile})=>{
   const [edit, setEdit] = useState(false);

   const submit = (valuesForm) => {
      console.log(valuesForm)
   } 

   return( 
        <div className={style.container}>
            
           <button onClick={()=>{setEdit(!edit)}}>Edit</button>

           {edit? <EditDescriptionData onSubmit={submit} edit={edit} setEdit={setEdit} />: 

           <div className={style.aboutMy}>
        
              <div><span>AboutMy</span><p>{profile.aboutMy}null</p></div>
              <div><span>Looking for a job</span><p>{profile.lookingForAJob}null</p></div>
              <div><span>Looking for a job description</span><p>{profile.lookingForAJobDescription}null</p></div>

              <dl>
                 <dt>Contacts</dt>
                 <dd>{profile.contacts.facebook}null</dd>
                 <dd>{profile.contacts.github}null</dd>
                 <dd>{profile.contacts.vk}null</dd>
              </dl>
           </div>

           }

        </div>
   )
})

export default DescriptionData;