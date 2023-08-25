### 1. Qu'est-ce qu'un Prop?

Dans React, un "prop" est une manière spéciale de passer des données d'un composant à un autre. Si vous êtes familière avec le HTML, vous pouvez penser aux props comme des attributs que vous ajoutez à une balise HTML. Par exemple, dans la balise `<img src="image.jpg">`, `src` est un attribut qui dit à la balise `img` où trouver l'image. De la même manière, les props permettent de passer des données à un composant React.

### 2. Exemple 1 : Utilisation de Props

```javascript
// Ce composant est un exemple de comment utiliser les props
class AjoutAdresseComposant extends React.Component {
  render() {
    // Destructuration des props pour extraire adresse, codePostal, et ville
    let {adresse, codePostal, ville} = this.props;
    
    // Utilisation des props pour afficher l'adresse
    return (
      <div>Votre adresse est : {adresse} {codePostal} {ville}</div>
    )
  }
}
```

### 3. Exemple 2 : Passage de Props d'un Composant Parent à un Composant Enfant

```javascript
// Composant parent
class AjoutAdresseComposant extends React.Component {
  render() {
    // Passage de tous les props au composant enfant
    return (
      <ComposantChild {...this.props} />
    )
  }
}

// Composant enfant
class ComposantChild extends React.Component {
  render() {
    // Affichage des props reçus du composant parent
    return (
      <div>Votre adresse est : {this.props.adresse} {this.props.codePostal} {this.props.ville}</div>
    )
  }
}
```

En résumé, les props sont essentiellement des variables que vous passez d'un composant à un autre. Ils permettent aux composants de communiquer entre eux et de partager des données.


# Explication des Props en React

## 1. Qu'est-ce qu'un Prop?

Dans React, un "prop" est une manière spéciale de passer des données d'un composant à un autre. Si vous êtes familière avec le HTML, vous pouvez penser aux props comme des attributs que vous ajoutez à une balise HTML.

**Exemple :** Dans la balise `<img src="image.jpg">`, `src` est un attribut qui dit à la balise `img` où trouver l'image. De la même manière, les props permettent de passer des données à un composant React.

## 2. Utilisation de Props

```jsx
class AjoutAdresseComposant extends React.Component {
  render() {
    let {adresse, codePostal, ville} = this.props;
    return (
      <div>Votre adresse est : {adresse} {codePostal} {ville}</div>
    )
  }
}


## Explication :

- **AjoutAdresseComposant** est un composant React.
- `this.props` est un objet qui contient toutes les propriétés (ou "props") passées à ce composant.
- On déstructure `this.props` pour extraire `adresse`, `codePostal`, et `ville`.
- Dans le `return`, on utilise ces variables pour afficher l'adresse.

## 3. Passage de Props d'un Composant Parent à un Composant Enfant


class AjoutAdresseComposant extends React.Component {
  render() {
    return (
      <ComposantChild {...this.props} />
    )
  }
}
 
class ComposantChild extends React.Component {
  render() {
    return (
      <div>Votre adresse est : {this.props.adresse} {this.props.codePostal} {this.props.ville}</div>
    )
  }
}

## Explication :

- **AjoutAdresseComposant** est le composant parent.
- **ComposantChild** est le composant enfant.
- Dans **AjoutAdresseComposant**, on passe toutes les props qu'il reçoit directement à **ComposantChild** en utilisant `{...this.props}`. Cette syntaxe est appelée "spread syntax".
- **ComposantChild** reçoit ces props et les utilise pour afficher l'adresse.

## Résumé

Les props sont essentiellement des variables que vous passez d'un composant à un autre. Elles permettent aux composants de communiquer entre eux et de partager des données.
