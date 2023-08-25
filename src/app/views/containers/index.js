import { connect } from 'react-redux'
import App from '../components';
import { saveCart } from '../../lib/actions'

export const AppContainer = connect(
    function mapStateToProps(state) {
        return { items: state.items }
    },
    function mapDispatchToProps(dispatch) {
        return {
            saveLocalStorage: items => dispatch(saveCart(items))
        }
    }
)(App) 


/* Voici l'explication du code ci-dessus :
1. Tout d'abord, nous importons `connect` depuis `react-redux`.
2. Ensuite, nous importons le composant que nous voulons connecter.
3. Puis, nous importons les actions que nous souhaitons envoyer.
4. Ensuite, nous créons le composant conteneur.
5. Nous invoquons `connect` et lui passons `mapStateToProps` et `mapDispatchToProps`.
   Ce sont des fonctions qui renvoient respectivement les parties de l'état et les actions que nous voulons transmettre à notre composant.
6. Nous appelons de nouveau `connect`, mais cette fois en passant notre composant en argument. */

