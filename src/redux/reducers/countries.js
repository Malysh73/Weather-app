import countriesJSON from '../../data/countriesBounds.json';

const initialState = {
	countries: JSON.parse(JSON.stringify(countriesJSON))
}
  
const reducer = (state = initialState, action) => {  
  switch (action.type) {  
    default:  
      return state  
  }  
}

export default reducer
