import React from "react";
import "./add-offer.scss";

class AddOffer extends React.Component {
  render() {
    return (
      <div className="add-offer">
        <h2>Dodaj ogłoszenie</h2>
        <form action="" method="">
          <ul>
            <li>
              <label for="userlocalization">Podaj swoją lokalizację</label>
              <input
                type=""
                name="user-localization"
                id="userlocalization"
              ></input>
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
              <label for="userphone">Podaj swój numer telefonu</label>
              <input type="tel" name="user-phone" id="userphone"></input>
            </li>
            <li>
              <label for="whichpet">
                Dla jakiego zwierzaka przeznaczony jest produkt?
              </label>
              <select name="which-pet" id="whichpet" required>
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
              <select name="products-category" id="producscategory" required>
                <option value="food">Pokarm</option>
                <option value="toy">Zabawka</option>
                <option value="leash">Smycz</option>
                <option value="bed">Legowisko</option>
                <option value="cloth">Ubranie</option>
                <option value="homes">Domek</option>
                <option value="other">Inne</option>
              </select>
            </li>
            <li>
              <label for="productname">Nazwa produktu</label>
              <input
                type="text"
                name="product-name"
                id="productname"
                maxlenght="15"
              ></input>
            </li>
            <li>
              <label for="description">Opis</label>
              <textarea
                name="product-description"
                id="description"
                maxrows="10"
                required
              ></textarea>
            </li>
          </ul>

          <section class="confirm-form">
            <button class="ok-btn" type="submit">
              Opublikuj!
            </button>
            <button class="cancel-btn">Anuluj</button>
          </section>
        </form>
      </div>
    );
  }
}

export default AddOffer;
