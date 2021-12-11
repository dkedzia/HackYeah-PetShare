import React from "react";
import "./add-offer.scss";

class AddOffer extends React.Component {
  render() {
    return (
      <div className="add-offer">
        <h1>Dodaj ogłoszenie</h1>
        <form action="" method="">
          <ul>
            <li>
              <label>Podaj swoją lokalizację</label>
              <input></input>
            </li>
            <li>
              <label for="useremail">Podaj swój email</label>
              <input
                type="email"
                name="user-email"
                id="useremail"
                required
              ></input>
            </li>
            <li>
              <label for="whichpet">
                Dla jakiego zwierzaka przeznaczony jest produkt?
              </label>
              <select name="which-pet" id="whichpet">
                <option value="dog">Pies</option>
                <option value="cat">Kot</option>
                <option value="birds">Ptaki</option>
                <option value="rodents">Gryzonie</option>
                <option value="ferret">Tchórzofretka</option>
                <option value="reptiles">Gady</option>
                <option value="hedgehog">Jeż</option>
                <option value="fish">Ryby</option>
                <option value="other">Inne</option>
              </select>
            </li>
            <li>
              <label for="producscategory">Wybierz kategorię produktu</label>
              <select name="products-category" id="producscategory">
                <option value="food">Pokarm</option>
                <option value="toy">Zabawka</option>
                <option value="leash">Smycz</option>
                <option value="bed">Legowisko</option>
                <option value="cloth">Ubranie</option>
                <option value="homes">Domek</option>
                <option value="other">Inne</option>
              </select>
            </li>
          </ul>
        </form>
      </div>
    );
  }
}

export default AddOffer;
