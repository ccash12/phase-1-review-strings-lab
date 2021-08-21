const currentUser = "Grace Hopper";

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

//interpolation ^

//const welcomeMessage = 'Welcome to Flatbook,' + currentUser;
// ^ concatenate

const excitedWelcomeMessage = welcomeMessage.toUpperCase()

// in the variable excitedWelcomeMessage, it is referencing the variable welcomeMessage and making it uppercase using .toUpperCase()

const shortGreeting = `Welcome, ${currentUser.slice(0,1)}!`;