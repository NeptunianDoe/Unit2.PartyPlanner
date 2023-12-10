//A user enters the website and finds a list of the names, dates, times, locations, and descriptions of all the parties that are happening.
//Next to each party in the list is a delete button. The user clicks the delete button for one of the parties. That party is then removed from the list.
//There is also a form that allows the user to enter information about a new party that they want to schedule. After filling out the form and submitting it, the user observes their party added to the list of parties.




// JavaScript File: index.js
const EVENTS_URI = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310-fsa-et-web-pt-sf-b-Denica/artists";

const state = {
  events: [],
};


// Fetch and display parties
const getParties = async () => {
    try {
      const response = await fetch(EVENTS_URI);
      const json = await response.json();
      if (json.error) throw new Error(json.error);
      state.events = json.data;
      renderEvents();
    } catch (error) {
      console.error('GET Error:', error);
    }
  };


// Delete a party



// Update a party using Render(?)



// Event listener for form submission



// Render parties to the DOM


