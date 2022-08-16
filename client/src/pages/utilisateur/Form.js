import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './form.scss'
import Logo from "../../assets/travail.jpg";

 const Contact = () => {
  const form = useRef();

 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h4c21h8', 'template_myemfig', form.current, 'ideoCSUE6XG0jHeCJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
     
  };

   return (
    <div id="form_conteneur">
       <form ref={form} onSubmit={sendEmail}>
         <fieldset class="form_fieldset">
               <legend class="form_legend">Ordre de mission</legend>
               <div class="exercice1_label">
                  <label className="control-label col-sm-2" htmlFor="fname">Nom :</label>
          <input type="text" className="exercice1_champ" id="fname"  placeholder="Entrez votre nom" name="user_name" />
               </div>
               
               <div class="exercice1_label">
                 <label className="control-label col-sm-2" htmlFor="email">Email:</label>
           <input type="email" className="exercice1_champ" id="email" placeholder="Entrez votre email"name="user_email" />
               </div>
               <div class="exercice1_label">
                 <label className="control-label col-sm-2" htmlFor="fname">Destination:</label>
          <input type="text" className="exercice1_champ" id="fname"  placeholder="Entrez la destination souhaitée" name="destination" />
               </div><br />
               <div class="exercice1_label">
                 <label className="control-label col-sm-2" htmlFor="fname">Mission:</label>
            <input type="text" className="exercice1_champ" id="fname" placeholder="Entrez la mission attendue" name="mission" />
               </div><br />
               <div class="exercice1_label">
                 <label className="control-label col-sm-2" htmlFor="fname">Date départ:</label>
            <input type="date" className="exercice1_champ" id="fname" placeholder="Entrez la date de départ" name="depart" />
               </div>
               <div class="exercice1_label">
                  <label className="control-label col-sm-2" htmlFor="fname">Date retour:</label>
            <input type="date" className="exercice1_champ" id="fname" placeholder="Entrez la date de retour" name="retour" />
               </div><br />
               <div class="exercice1_label">
                  
               </div>
               <div class="exercice1_input">
                  <button className='btnon' type="submit" value="Send"> Envoyer</button>
               </div><br />
            </fieldset>
         
       </form>
    </div>
   
  );
};
export default Contact