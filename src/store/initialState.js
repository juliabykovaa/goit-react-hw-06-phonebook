
const storedContacts = localStorage.getItem('phone');
export const initialState = {
  contacts: storedContacts ? JSON.parse(storedContacts) : [],
  filter: '',
};


