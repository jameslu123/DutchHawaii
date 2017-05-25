import I18n from 'ex-react-native-i18n'

// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
I18n.fallbacks = true

// All translations for the app go here:
I18n.translations = {
  en: {
    variants:'Variants',
    addedInCart:"Added in cart",
    productAdded:"is added in Cart",
    subtotal:"Subtotal",
    total:"Total",
    tax:"Tax",
    name:"Name",
    email:"Email",
    phone:"Phone",
    notes:"Notes",
    address:"Address",
    message:"Message",
    missingInformation:"Missing Information",
    missingInfo:"All fields are required!",
    paymenterror:"Payment Error",
    paymenterrorreport:"Pls see log or report to developer.",
    continueToCheckout:"Continue",
    submitOrder:"Submit Order",
    send:"Send",
    orderReceived:"Order Received",
    orderMessage:"Thanks for your order. We will inform you once it is processed on your email.",
    mailReceived:"Mail Received",
    mailMessage:"Thanks for your mail. We will reply soon.",


    signIn: 'Sign In',
    logOut: 'Log Out',
    loginLogoutExampleTitle: 'Login/Logout Redux + Sagas Example',
    progressiveImageComponent: 'Progressive Image Component',
    api: 'API',
    locale: 'I18n Locale',
    rnVectorIcons: 'RN Vector Icons',
    loginWithFacebook: 'Login with Facebook',
    rnAnimatable: 'RN Animatable',
    igniteGenerated: 'Ignite Generate Screens',
    forgotPassword: 'Forgot Password',
    username: 'Username',
    password: 'Password',
    cancel: 'Cancel',
    welcome: 'Welcome',
    login: 'Login',
    tempIndicator: 'F',
    componentExamples: 'Component Examples',
    usageExamples: 'Usage Examples',
    apiTesting: 'API Testing',
    themeSettings: 'Theme Settings',
    deviceDetails: 'Device Details',
    noItems: 'No Items'
  },
  fr: {
    signIn: 'Se connecter',
    logOut: 'Se déconnecter',
    loginLogoutExampleTitle: 'Connexion / Déconnexion Redux + Sagas Exemple',
    progressiveImageComponent: 'Composant Image Progressive',
    api: 'Mon Dieu!  Une API pour vous!',
    locale: 'I18n Paramètres régionaux',
    rnVectorIcons: 'RN icônes vectorielles',
    loginWithFacebook: 'Se connecter avec Facebook',
    rnAnimatable: 'RN Animatable',
    igniteGenerated: 'Ignite Générer des Écrans',
    forgotPassword: 'Mot de passe oublié',
    username: 'Nom d\'utilisateur',
    password: 'Mot de passe',
    cancel: 'Annuler',
    welcome: 'Bienvenue',
    login: 'S\'identifier',
    tempIndicator: 'C',
    componentExamples: 'Exemples de Composants',
    usageExamples: "Exemples d'utilisation",
    apiTesting: 'API Testing',
    themeSettings: 'Réglage des thèmes',
    deviceDetails: 'Détails du périphérique',
    noItems: 'Aucun'
  }
}

export default I18n
