import React from 'react';
import feeder1 from './media/feeder_1.jpeg'
import feeder2 from './media/feeder_2.jpeg'
 
const Fideris = () => {
    return (
       <div className="card">
          <h1>Fīderis</h1>
           <img src={feeder1} alt="feeder system" />
          <p id="feeder-desc">
              Makšķerēšana ar tā saucamo – fīderi jeb angliski “feeder” ir ļoti līdzīgi kā ar klasisko gruntsmakšķeri.
              Lielākā atšķirība ir tāda, ka svina atsvara vietā tiek izmantota barotava, kam ir pievienota zivju barība un makšķeres kāts,
              kas ir ar mīkstu spici galā, kas kalpo kā identifikators, ka zivs ir apēdusi ēsmu.
          </p>
           <div className="feeder-concepts">
               <img src={feeder2} alt="feeder system test" />

               <p className="feeder-link-header">
                   Klasiska fīdermakšķerēšanas sistēma sastāv:
               </p>
               <div>
                   <li>Āķis, kas ir piemērota izmēra konkrētai zivs sugai;</li>
                   <li>Pavadiņa, kas bieži vien ir tievāka par pamata auklu;</li>
                   <li>Karabīne, kas savieno auklu ar pavadiņu;</li>
                   <li>Amortizatora bumbiņa, kas amortizē pretsavērpēja triecienu pret karabīni</li>
                   <li>Pats pretsavērpējs ar barotavu, lai mazinātu barotavas sapīšanos ar pavadiņu</li>
               </div>
                <p>
                    Fīdermakšķerēšanas kātam ir jābūt garam,
                    lai varētu veikt sekmīgus un tālus metienus, kā arī kā galvenā atšķirošā pazīme ir mīkstais kāta gals.
                    Spole ir klasiska bezincerces spole.
                </p>
                <p>
                    Lielākā problēma ar ko saskarās fīdermakšķernieki ir nepiemērota svara barotavas iemešana,
                    kas bieži sekmējas ar mīkstā gala nolūšanu.
                </p>
           </div>
       </div>
    );
}
 
export default Fideris