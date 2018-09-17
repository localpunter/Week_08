Destroy:

handle a delete request made to /api/teas/:id
delete the appropriate tea object in the array
send back all the teas data as JSON

Update:

handle a put request made to /api/teas/:id
update the appropriate tea object in the array with the new tea object sent on the request's body object
send back all the teas data as JSON


RESTful routes

/api/teas			- index	-GET
/api/teas			-create	-POST
/api/teas/id		-show	-GET
/api/teas/id		-update	-PUT
/api/teas/id		-destroy	-DELETE
