var totalValues = 5; //define the number of values to average
var gatewayId = "1234"; // Enter last 4 digit of your Gateway Wireless Mac Address
var payload = JSON.parse(msg.payload); //parse the payload in JSON format
var data = payload.value; //Save the sensor value

context.valueArray = context.valueArray || []; //setup a persistant array and initalise it
context.count = context.count || 0; //init the counter and set it to 0 if its not already

//take whatever came in and add it to the position "context.count" in context.valueArray

if (msg.payload == "false") {
context.valueArray[context.count] = 0;
} else {
context.valueArray[context.count] = parseInt(data);
}

context.count += 1; //add 1 to context count
if (context.count == totalValues) { //if this function has been run x times, then we have all x values
var value = 0.00; //make a temp variavle and set it to 0

for (j = 0; j < totalValues; j++) {
//add the value of the item at position j in the array to our temp variable
value = value + context.valueArray[j];
}
var average = parseInt(value / totalValues);

// Create a new message with topic, payload, qos and retain to send in cloud
var newMsg = {
topic: "gateways/" + gatewayId + "/sensors/" + payload.sensor_id + "/data",
payload: {
gateway_id: gatewayId,
sensor_id: payload.sensor_id,
value: average,
timestamp: Date.now()
},
qos: 0,
retain: false
};

context.count = 0; //set the counter back to 0 for the next go
return [newMsg]; //then shove it out to the next node
}
