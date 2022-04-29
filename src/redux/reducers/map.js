const UPDATE_MAPSTATE = 'UPDATE_MAPSTATE'

const initialState = {
  lng: 34.75,
  lat: 31.5,
  bbox: [[34.2674994,29.4533796],[35.8950234,33.3356317]],
  zoom: 7
}  
  
const reducer = (state = initialState, action) => {  
  switch (action.type) {  
    case UPDATE_MAPSTATE: {
        return {
            ...state,
            ...action.mapState
        }
    }
    default:  
      return state  
  }  
} 

export const updateMapState = (mapState) => {
	return { type: UPDATE_MAPSTATE, mapState }
}

export default reducer
