// Get the hour
const today = new Date();
const hour = today.getHours();

// Here you can change your name
const name = 'COFERPOL';

// Here you can change your greetings
const gree1 = 'Hora de dormir!,  ';
const gree2 = 'Bom dia!,  ';
const gree3 = 'Boa Tarde!, ';
const gree4 = 'Boa Tarde!,  ';
const gree5 = 'Boa Tarde!,  ';
const gree6 = 'Boa Tarde!,  ';

// Define the hours of the greetings
if (hour >= 23 && hour < 5) {
  document.getElementById('greetings').innerText = gree1 + name;
} else if (hour >= 6 && hour < 12) {
  document.getElementById('greetings').innerText = gree2 + name;
} else if (hour >= 12 && hour < 17) {
  document.getElementById('greetings').innerText = gree3 + name;
} else {
  document.getElementById('greetings').innerText = gree4 + name;
}
