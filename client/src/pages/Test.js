import React, { useState } from "react";

function Test() {
  const [new_data, setNew_data] = useState({
    nom: "",
    role: "",
    camp: ""
  });

  const [persos, setPersos] = useState([
    { id: 1, nom: "Dark Vardor", role: "Sith", camp: "Empire" },
    { id: 2, nom: "Luke", role: "Jedi", camp: "Rébellion" },
    { id: 3, nom: "Leia", role: "Princesse", camp: "Rébellion" },
    { id: 4, nom: "Palpatine", role: "Empereur", camp: "Empire" },
    { id: 5, nom: "Boba Fett", role: "Chasseur de primes", camp: "Racaille" }
  ]);

  const addhandler = e => {
    e.preventDefault();
    setPersos([...persos, new_data]);
    setNew_data({ nom: "", role: "", camp: "" });
  };

  return (
    <div className="App">
      <table border="1">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Rôle</th>
            <th>Camp</th>
          </tr>
        </thead>
        <tbody>
          {persos.map(p => (
            <tr key={p.id}>
              <td>{p.nom}</td>
              <td>{p.role}</td>
              <td>{p.camp}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <form>
        <fieldset>
          <div>
            <label htmlFor="nom_fld">Nom</label>
            <input
              type="text"
              id="nom_fld"
              value={new_data.nom}
              onChange={e => setNew_data({ ...new_data, nom: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="role_fld">Rôle</label>
            <input
              type="text"
              id="role_fld"
              value={new_data.role}
              onChange={e => setNew_data({ ...new_data, role: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="camp_fld">Camp</label>
            <select
              id="camp_fld"
              onChange={e => setNew_data({ ...new_data, camp: e.target.value })}
              defaultValue=""
            >
              <option value="" disabled />
              <option value="Empire">Empire</option>
              <option value="Rébellion">Rébellion</option>
              <option value="Racaille">Racaille</option>
            </select>
          </div>
        </fieldset>
        <button onClick={addhandler}>Ajouter</button>
      </form>
    </div>
  );
}
export default Test;

