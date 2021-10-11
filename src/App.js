import React from 'react';
import './App.css';
import Product from "./Product";
import citroenen from './assets/citroenen.jpeg';
import limoenen from './assets/limoenen.png';
import ijsblokjes from './assets/ijsblokjes.jpg';
import {Fragment} from "react";
import {ReactComponent as ShoppingCart} from './assets/winkelmandje.svg'

function App() {
    return (
        <Fragment>
            <nav>
                <ul>
                    <li>
                        <a href="/">Shop</a>
                    </li>
                    <li>
                        <a href="/">Ons verhaal</a>
                    </li>
                    <li>
                        <a hre="/">Blog</a>
                    </li>
                </ul>
                <ShoppingCart className="shopping-cart-icon" />
            </nav>
            <header>
                <h1>Fruit perfection</h1>
                <button
                    type="button"
                    onClick={() => console.log("Jij wil shoppen!")}
                >
                    Shop nu
                </button>
            </header>
        <main>
            <Product
                image={citroenen}
                title="Citroen"
                description="Een citroen is voor de meeste mensen te zuur om zo uit de hand te eten. Van citroen kun je het
            vruchtvlees,het sap en de schil gebruiken. Het sappige, lichtgele zure vruchtvlees versterkt de
            smaak van ander voedsel."
            />
            <Product
                image={limoenen}
                title="Limoen"
                description="Limoen is familie van de citroen en de sinaasappel en behoort tot de citrusvruchten (Wijnruitfamilie).
                              limoenen zijn rond en kleiner dan citroenen. De schil is dun, vrij glad en groen."
            />

            <Product
                image={ijsblokjes}
                title="Ijsblokjes"
                description="Een ijsblokje of ijsklontje is bevroren water in de vorm van een klein blokje. Het wordt gemaakt in
          een diepvriezer door water in een plastic vorm te laten bevriezen."

            />


        </main>
        </Fragment>
    );
}

export default App;