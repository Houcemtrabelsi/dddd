import React from "react";
import { Link, Outlet } from "react-router-dom";
import detailsIcon from "../../../assets/icons/icondetaildecompte.svg";
import passwordIcon from "../../../assets/icons/iconpasswordprofile.svg";

import paimentIcon from "../../../assets/icons/iconpaiementclientprofile.svg";


const Profile = () => {
  return (
    <div>
      <div>
        <ul>
          <Link to="details">
            <li>
              <img src={detailsIcon} alt="details" />
              <h1>Détails du Compte</h1>
            </li>
          </Link>
          <Link to="motdepasse">
            <li>
              <img src={passwordIcon} alt="password icon" />
              <h1>Mot de passe</h1>
            </li>
          </Link>
          <Link to="paiement">
            <li>
              <img src={paimentIcon} alt="paiement" />
              <h1>Méthodes de paiement</h1>
            </li>
          </Link>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
