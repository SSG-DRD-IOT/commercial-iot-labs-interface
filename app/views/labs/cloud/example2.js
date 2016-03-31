[{
  "id": "2d6882db.d2977e",
  "type": "mqtt-broker",
  "z": "173e68b2.e8c197",
  "broker": "198.211.103.31",
  "port": "1883",
  "clientid": "",
  "usetls": false,
  "verifyservercert": true,
  "compatmode": true,
  "keepalive": "60",
  "cleansession": true,
  "willTopic": "",
  "willQos": "0",
  "willRetain": null,
  "willPayload": "",
  "birthTopic": "",
  "birthQos": "0",
  "birthRetain": null,
  "birthPayload": ""
}, {
  "id": "f6fa250a.0905d8",
  "type": "mqtt-broker",
  "z": "173e68b2.e8c197",
  "broker": "localhost",
  "port": "1883",
  "clientid": "",
  "usetls": false,
  "verifyservercert": true,
  "compatmode": true,
  "keepalive": "60",
  "cleansession": true,
  "willTopic": "",
  "willQos": "0",
  "willRetain": null,
  "willPayload": "",
  "birthTopic": "",
  "birthQos": "0",
  "birthRetain": null,
  "birthPayload": ""
}, {
  "id": "e6cd80fb.19328",
  "type": "mqtt in",
  "z": "173e68b2.e8c197",
  "name": "Incoming MQTT messages from Sensors",
  "topic": "sensors/temperature/data",
  "broker": "f6fa250a.0905d8",
  "x": 366.5,
  "y": 242,
  "wires": [
    [
      "a7ffb8a4.580048",
      "3b750487.c48afc"
    ]
  ]
}, {
  "id": "a7ffb8a4.580048",
  "type": "function",
  "z": "173e68b2.e8c197",
  "name": "Average of 5 consecutive sensor values",
  "func": "var totalValues = 5; //define the number of values to average\nvar gatewayId = \"1234\"; // Enter last 4 digit of your Gateway Wireless Mac Address\nvar payload = JSON.parse(msg.payload);\nvar data = payload.value;\n\ncontext.valueArray = context.valueArray || []; //setup a persistant array and initalise it\ncontext.count = context.count || 0; //init the counter and set it to 0 if its not already   \n\n//take whatever came in and add it to the position \"context.count\" in context.valueArray\n\nif (msg.payload ==\"false\") {\n    context.valueArray[context.count] = 0;\n} else {\n    context.valueArray[context.count] = parseInt(data);\n}\n\ncontext.count += 1; //add 1 to context count\nif (context.count == totalValues) { //if this function has been run x times, then we have all x values\n    var value = 0.00; //make a temp variavle and set it to 0\n    \n    for (j=0; j<totalValues; j++) {\n        //add the value of the item at position j in the array to our temp variable\n        value = value + context.valueArray[j];\n    }\n    var average = parseInt(value/totalValues);\n    var newMsg = {\n        topic:\"gateways/\" +gatewayId+ \"/sensors/\" +payload.sensor_id+ \"/data\",\n        payload:\n        {\n            gateway_id:gatewayId,\n            sensor_id: payload.sensor_id,\n            value: average,\n            timestamp: Date.now()\n        },\n        qos:0,\n        retain:false\n    };\n    \n    \n  //  var result = {\"value\": String(average)}; //dump the caluulated average and out temp var out\n    // add all the variables to a second message for debug\n  //  var parsedvalueArray = {\"payload\": \"Array = \" + context.valueArray + \"\\npreAverage = \" + value + \"\\nAverage = \" + average};\n    \n    context.count=0; //set the counter back to 0 for the next go\n    return [newMsg]; //then shove it out to the next node\n}",
  "outputs": 1,
  "noerr": 0,
  "x": 512.5,
  "y": 368,
  "wires": [
    [
      "c450d142.3baf3",
      "6569b65d.9a9648"
    ]
  ]
}, {
  "id": "c450d142.3baf3",
  "type": "mqtt out",
  "z": "173e68b2.e8c197",
  "name": "Outgoing MQTT message to Cloud",
  "topic": "",
  "qos": "",
  "retain": "",
  "broker": "2d6882db.d2977e",
  "x": 857.5,
  "y": 270,
  "wires": [

  ]
}, {
  "id": "6569b65d.9a9648",
  "type": "debug",
  "z": "173e68b2.e8c197",
  "name": "Debug Outgoing MQTT message",
  "active": true,
  "console": "false",
  "complete": "true",
  "x": 827.5,
  "y": 478,
  "wires": [

  ]
}, {
  "id": "3b750487.c48afc",
  "type": "debug",
  "z": "173e68b2.e8c197",
  "name": "Debug Incoming MQTT Messages",
  "active": true,
  "console": "false",
  "complete": "payload",
  "x": 760.5555555555555,
  "y": 164.44444444444443,
  "wires": [

  ]
}]
