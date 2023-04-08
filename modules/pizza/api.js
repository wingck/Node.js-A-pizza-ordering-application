
async function getPizza() {
const url = 'https://pizza-and-desserts.p.rapidapi.com/pizzas';
let response = await fetch(
  url,
  {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'db16c3ba66msh22265e6bf03b09bp1fff94jsnd7ae16db76fb',
      'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com'
    }
  }
);
return await response.json();
}

async function getOnePizza(pizzaId) {
  const url = `https://pizza-and-desserts.p.rapidapi.com/pizzas/${pizzaId}`;
  let response = await fetch(
    url,
    {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'db16c3ba66msh22265e6bf03b09bp1fff94jsnd7ae16db76fb',
        'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com'
      }
    }
  );
  return await response.json();
  }

  async function getDrink() {
    const url = 'https://beverages-and-desserts.p.rapidapi.com/beverages';
    let response = await fetch(
      url,
      {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'db16c3ba66msh22265e6bf03b09bp1fff94jsnd7ae16db76fb',
          'X-RapidAPI-Host': 'beverages-and-desserts.p.rapidapi.com'
        }
      }
    );
    return await response.json();
    }


//EXPORT any functions to be used outside this file
module.exports = {
  getPizza,
  getOnePizza,
  getDrink
};