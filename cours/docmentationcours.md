# Documentation : les props

## Les Props de rendu

Les props sont au cœur du fonctionnement des applications React. En créant des composants avec React, on définit également des propriétés par défaut qui vont contenir l'état local de ces composants. Les props de rendu vont servir à présenter les valeurs contenues dans les propriétés de votre composant comme l'exemple ci-dessous :

### Syntaxe :

```javascript
class AjoutAdresseComposant extends React.Component {
  render() {
    let {adresse, codePostal, ville} = this.props;
    return (
      <div>Votre adresse est : {adresse} {codePostal} {ville}</div>
    );
  }
}

## Partage des props entre composants

Les props peuvent, ensuite, se partager entre composants parent et child de votre application sous forme de props.

class AjoutAdresseComposant extends React.Component {
  render() {
    let {adresse, codePostal, ville} = this.props;
    return (
      <ComposantChild {...this.props} />
    );
  }
}

class ComposantChild extends React.Component {
  render() {
    return (
      <div>Votre adresse est : {this.props.adresse} {this.props.codePostal} {this.props.ville}</div>
    );
  }
}

----------------------------------------------------------------------------------------------

# Documentation : les hooks

Depuis la version 16.8 de React, les **hooks** ont été introduits, simplifiant grandement l'utilisation des fonctions composant qui étaient auparavant *stateless* (sans état).

Grâce aux hooks, il est maintenant possible de gérer un état local dans ces fonctions composants avec `useState()`.

`useState` contient une propriété et peut avoir une valeur par défaut, comme `0` dans cet exemple.


const [count, setCount] = useState(0);


- `count`, le getter, sert de props de rendu pour afficher la valeur de la propriété.
- `setCount` sert de setter pour mettre à jour la valeur de la propriété.
- On utilisera très souvent `useState` pour créer et maintenir l'état local de nos composants.

**Source** : [Utiliser un Hook d'état](URL_DU_LIEN_SI_DISPONIBLE)


Assurez-vous de remplacer `URL_DU_LIEN_SI_DISPONIBLE` par l'URL réelle si vous avez un lien vers la source'.

----------------------------------------------------------------------------------------------

# Documentation : useEffect

`useEffect` est un autre hook qui va appliquer des side effects à la suite des changements d'état local intervenus dans nos fonctions composant.

En reprenant l'exemple du `useState`, la valeur initiale et par défaut est `0` :

```javascript
const [count, setCount] = useState(0);```

## Rappel de l'usage des variables de ce `useState`:

- `count`, le getter, sert de props de rendu pour afficher la valeur de la propriété.
- `setCount` sert de setter pour mettre à jour la valeur de la propriété.

Le `useEffect` devient utile pour appliquer les effets de bord suite au changement de l'état local (équivalent des méthodes cycle de vie : `componentDidMount()` et `componentDidUpdate` avec les classes).

La fonction de `useEffect` est d'appliquer un re-render du composant et permet de mettre à jour le UI, le cas échéant.


function Example() {
  const [count, setCount] = useState(0);
 
  // Similaire à componentDidMount et componentDidUpdate :
  useEffect(() => {
    // Met à jour le titre du document via l’API du navigateur
    document.title = `Vous avez cliqué ${count} fois`;
  });
 
  return (
    <div>
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}>
        Cliquez ici
      </button>
    </div>
  );
}


Assurez-vous de remplacer `URL_DU_LIEN_SI_DISPONIBLE` par l'URL réelle si vous avez un lien vers la source.


----------------------------------------------------------------------------------------------


## setCount : décrémenter

Dans la vidéo précédente, on incrémente (+) la valeur de `count` avec le setter `setCount`: `setCount(count + 1)`

javascript
<button  
  onClick={() => setCount(count + 1)}
  type="button" 
  className="btn btn-secondary"> + </button>```

Dans la vidéo suivante, on fait le contraire avec l'action de décrémenter (-). Ce sera donc avec le signe minus : `-`.


----------------------------------------------------------------------------------------------


# Documentation : react-router

Pour installer `react-router-dom`, ouvrez le terminal et tapez :

```bash
npm install react-router-dom

----------------------------------------------------------------------------------------------

# Redux 

Redux est une bibliothèque open-source JavaScript de gestion d'état pour applications web, créé par Dan Abramov, employé de Facebook. Redux est une architecture qui va permettre de gérer l'état en un seul endroit avec un seul objet JavaScript qui va servir de **single source of truth**.

**Single source of truth** : source unique pour la gestion et accès à l'état actuel de l'application.

Il y a 3 concepts importants pour ajouter Redux à votre application : 
- Les actions
- Les reducers
- Le store

## Les actions 
Des actions déclenchées par le serveur ou d'une interaction utilisateur.

## Les reducers 
Ils s'occupent de retourner une version modifiée du state après application des actions. Ça fonctionne comme un large switch avec plusieurs scénarios de résultat.

## Le store 
Créé à partir d'un ou en combinant plusieurs reducers, le store permet d'accéder à l'état de l'application, dispatch les actions au reducer et s'abonne aux changements d'états.

## Installation de Redux

Pour installer Redux dans votre application, utilisez les commandes suivantes :

```bash
npm install redux react-redux --save
npm install react react-dom --save


----------------------------------------------------------------------------------------------


## { Code Source } - Actions

```javascript
export const actions = {
  GET_ITEMS: "GET_ITEMS",
  ADD_TO_CART: "ADD_TO_CART",
  UPDATE_CART: "UPDATE_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  SAVE_CART: "SAVE_CART"
};

const uid = () => Math.random().toString(34).slice(2);

export const addToCart = (item, quantity) => {
  return {
    type: actions.ADD_TO_CART,
    payload: { id: uid(), quantity: quantity, details: item }
  };
}

export const updateCart = (item, quantity) => {
  return {
    type: actions.UPDATE_CART,
    payload: {item: item, quantity: quantity}
  }
}

export const removeFromCart = item => {
  return {
    type: actions.REMOVE_FROM_CART,
    payload: item
  };
};

export const saveCart = (items) => {
  return {
    type: actions.SAVE_CART,
    payload: {items: items}
  }
}``````


----------------------------------------------------------------------------------------------



 { code source } - reducer``

import { actions } from './actions'
const { ADD_TO_CART, SAVE_CART, UPDATE_CART, REMOVE_FROM_CART } = actions
 
const saveToLocalstorage = object => {
   localStorage.setItem("items", JSON.stringify(object));
}
const initialState = {
  items:
    JSON.parse(localStorage.getItem("items")) != null
      ? JSON.parse(localStorage.getItem("items"))
      : [],
  total: 0
};
export default function onlineStoreApp(state = initialState, action) {
    switch (action.type) {
      case ADD_TO_CART: 
      return Object.assign({}, state, {items: [...state.items, action.payload]});
      case UPDATE_CART:
        return Object.assign({}, state, {
          items: state.items.map(item => {
            return item.id === action.payload.item.id
              ? Object.assign({}, item, {
                  quantity: action.payload.quantity
                })
              : item;
          })
        });
      case REMOVE_FROM_CART:
        return Object.assign({}, state, {
          items: state.items.filter(item => {
            return item.id != action.payload.id;
          })
        });
      case SAVE_CART:
        saveToLocalstorage(action.payload.items);
        return Object.assign({}, state, {items: action.payload.items});
      default:
        return state;
    }
}   

----------------------------------------------------------------------------------------------


État global de l'application :
L'état global de l'application fait référence à l'ensemble des données ou informations qui sont partagées et accessibles à travers toute l'application, indépendamment des composants individuels. Au lieu d'avoir un état local dans chaque composant, l'état global est centralisé et peut être lu ou modifié depuis n'importe quel composant de l'application.

Redux en termes simples et succincts :
Redux est une bibliothèque pour gérer l'état global d'une application JavaScript, en particulier pour les applications React. Imaginez Redux comme un grand magasin (store) où vous stockez toutes les informations de votre application. Chaque fois que vous voulez changer quelque chose dans ce magasin, vous envoyez une demande (action). Cette demande est traitée par un gestionnaire (réducteur) qui décide comment le magasin devrait être mis à jour. Les composants de votre application peuvent ensuite "s'abonner" à ce magasin et être automatiquement mis à jour chaque fois que quelque chose change.

D'accord, voici une explication de React en termes très simples :

React est comme un ensemble de blocs de construction pour créer des sites web. Chaque bloc représente une partie de votre site, comme un bouton, une liste ou une image. Vous pouvez assembler ces blocs de différentes manières pour créer des pages entières. Et le meilleur, c'est que si vous changez un bloc, React s'assure automatiquement que cette modification est reflétée partout où ce bloc est utilisé, sans avoir à rafraîchir toute la page. Cela rend les sites web rapides et réactifs.




User
 et la difference avec reacr redux?
ChatGPT
D'accord, poursuivons avec l'analogie des blocs de construction :

React :
Imaginez que vous avez une boîte de blocs LEGO pour construire une maison. Chaque pièce LEGO représente une partie de la maison : une fenêtre, une porte, un mur, etc. Avec React, vous assemblez ces pièces pour construire votre maison (votre site web).

React-Redux :
Maintenant, imaginez que votre maison LEGO a besoin d'électricité pour allumer des lumières. Au lieu d'avoir une batterie séparée pour chaque lumière, vous voulez une source d'énergie centrale pour alimenter toutes les lumières. React-Redux est comme cette source d'énergie centrale. Il fournit une "réserve d'électricité" (l'état global) que toutes les pièces de la maison (composants) peuvent utiliser. Si vous voulez changer l'intensité de toutes les lumières en même temps, vous n'avez qu'à ajuster cette source d'énergie centrale, et React-Redux s'assure que chaque lumière reçoit le bon niveau d'énergie.

En termes simples, React vous permet de construire votre site web avec des composants, tandis que React-Redux vous donne un moyen de gérer et de partager des données entre ces composants de manière organisée et centralisée.

Oui, "props" est un terme spécifique à React. Voici une explication simple :

Imaginez que vous avez une machine à café. Cette machine a besoin de certains ingrédients pour faire du café, comme de l'eau, du café moulu, et peut-être du sucre ou du lait.

Dans React, chaque composant est comme cette machine à café. Et les "props" sont les ingrédients que vous donnez à cette machine. Vous "passez" ces ingrédients (ou informations) à votre composant, et il les utilise pour fonctionner et afficher quelque chose à l'écran.

Par exemple, si vous avez un composant qui affiche un message de bienvenue à un utilisateur, vous pourriez lui passer le nom de l'utilisateur comme "prop". Le composant prend ce nom et l'utilise pour afficher un message comme "Bonjour, [Nom] !".

En résumé, les "props" sont une manière de donner des informations à un composant React pour qu'il sache comment il doit se comporter ou quoi afficher.


----------------------------------------------------------------------------------------------

Contexte API



{ code source } - UserContext.js
import React, { createContext, useState } from "react";
 
//Context
export const UserProfileContext = createContext({
  firstName: "",
  lastName: "",
  email: "",
  address: "",
  zipCode: "",
  city: "",
  setUserProfileContext: info => {}
});
 
//ContextProvider
const UserContextProvider = ({ children }) => {
  const toastState = {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    zipCode: "",
    city: "",
    setUserProfileContext: info =>
      setUserProfile(prevState => ({
        ...prevState,
        [Object.keys(info)]: Object.values(info)[0]
      }))
  };
  const [userProfile, setUserProfile] = useState(toastState);
 
  return (
    <UserProfileContext.Provider value={userProfile}>
      {children}
    </UserProfileContext.Provider>
  );
};
export default UserContextProvider;


----------------------------------------------------------------------------------------------



Documentation : Contexte Provider et Consumer
Le Contexte est conçu pour partager des données sous forme de variables globales.

exemple de création et utilisation du contexte avec Provider et Consumer

1 - creation du contexte avec createContext et  des valeurs pour retourner un code hex couleur colors

const colors = {
  blue: "#03619c",
  yellow: "#8c8f03",
  red: "#9c0312"
};
 
export const ColorContext = React.createContext(colors.blue);


2 - le context Provider, qui passe les valeurs du context à tous les composants enfants du context Provider

ici, la propriété colors est passé sous forme de props colors :

import { ColorContext } from "./ColorContext";
 
function App() {
  return (
    <ColorContext.Provider colors={colors}>
      <Home />
    </ColorContext.Provider>
  );
}


3 - consommation du contexte, avec context.Consumer dans un composant de l'application :

colors est une props accessible en tant que props à tous composants enfants du context.Provider (plus-haut)

return (
  <ColorContext.Consumer>
    {colors => <div style={colors.blue}>...</div>}
  </ColorContext.Consumer>
);


----------------------------------------------------------------------------------------------


Documentation : Hook useContext
useContext est un redux-hook qui va permettre de consommer un contexte et d'accéder aux valeurs des propriétés de ce contexte à partir de n'importe quel composant de l'application. Pas besoin de créer un Provider et un Consumer. useContext fera le travail de transporter les valeurs du context.

comme l'exemple précédent, on créé un contexte avec createContext

1 - creation du contexte, avec des valeurs pour retourner un code hex couleur colors

const colors = {
  blue: "#03619c",
  yellow: "#8c8f03",
  red: "#9c0312"
};
 
export const ColorContext = React.createContext(colors.blue);


2 - on accède aux valeurs du contexte en utilisant useContext

import { ColorContext } from './ColorContext.js'
 
const FunctionComponentExample = () => {
    const colors = useContext(ColorContext)
    ...
    <div style={colors.blue}>...</div>}
 
}