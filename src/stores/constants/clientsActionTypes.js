const GET_ALL_CLIENTS = {
	LOAD: 'GET_ALL_CLIENTS_LOAD',
	LOAD_SUCCESS: 'GET_ALL_CLIENTS_LOAD_SUCCESS',
	LOAD_FAIL: 'GET_ALL_CLIENTS_LOAD_FAIL'
}

//add client
const ADD_CLIENT = {
	LOAD: 'ADD_CLIENT_LOAD',
	LOAD_SUCCESS: 'ADD_CLIENT_LOAD_SUCCESS',
	LOAD_FAIL: 'ADD_CLIENT_LOAD_FAIL'
}

//edit client
const EDIT_CLIENT = {
	LOAD: 'EDIT_CLIENT_LOAD',
	LOAD_SUCCESS: 'EDIT_CLIENT_LOAD_SUCCESS',
	LOAD_FAIL: 'EDIT_CLIENT_LOAD_FAIL'
}

//Delete client
const DELETE_CLIENT = {
	LOAD: 'DELETE_CLIENT_LOAD',
	LOAD_SUCCESS: 'DELETE_CLIENT_LOAD_SUCCESS',
	LOAD_FAIL: 'DELETE_CLIENT_LOAD_FAIL'
}

//Search client
const SEARCH_CLIENTS = {
	LOAD: 'SEARCH_CLIENTS_LOAD',
	LOAD_SUCCESS: 'SEARCH_CLIENTS_LOAD_SUCCESS',
	LOAD_FAIL: 'SEARCH_CLIENTS_LOAD_FAIL'
}

export { GET_ALL_CLIENTS, ADD_CLIENT, DELETE_CLIENT, SEARCH_CLIENTS, EDIT_CLIENT }