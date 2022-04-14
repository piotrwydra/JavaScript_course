const jsonData = {
    "data":
        [
            {
                "id": "ab9e6280-f30c-4ee2-9db1-fd2b7a06358d",
                "title": "Step one",
                "message": "Set your academic year dates in :organisation_management_link",
                "type": "automated",
                "start_date": "2022-04-04T00:00:00+00:00",
                "end_date": null,
                "read": false
            },

            {
                "id": "82b2c0b0-96b5-479a-afdb-9e02a1608fae",
                "title": "Step two",
                "message": "Decide how you\u0027ll implement the GTT in your organisation this year. Click :knowledge_base_link for guidance",
                "type": "automated",
                "start_date": "2022-04-04T00:00:00+00:00",
                "end_date": null,
                "read": false
            },

            {
                "id": "1812a890-c915-42b1-b066-120b52b784c0",
                "title": "Step three",
                "message": ":add_development_periods_link for your teachers that align with your plans for GTT implementation",
                "type": "automated",
                "start_date": "2022-04-04T00:00:00+00:00",
                "end_date": null,
                "read": false
            },

            {
                "id": "61088312-f70b-44ce-8dbd-8da983b2fed9",
                "title": "Step four",
                "message": "We recommend that all teachers begin their GTT experience by taking the :foundation_course_link for orientation and to learn how to make the most of the subscription. Read about delivery options :delivery_options_link.",
                "type": "automated",
                "start_date": "2022-04-04T00:00:00+00:00",
                "end_date": null,
                "read": false
            },

            {
                "id": "8d4538a9-4595-4062-83a9-2e8786d6a240",
                "title": "Step five",
                "message": "Organise a kick-off meeting with your teachers to introduce the GTT and discuss how it will be implemented by your organisation.\nTip: Present the video of Rob Coe introducing the GTT from the start of the :foundation_course_link at the start of your meeting",
                "type": "automated",
                "start_date": "2022-04-04T00:00:00+00:00",
                "end_date": null,
                "read": false
            },

            {
                "id": "a1288032-7e72-4aad-bb9e-e8efc7c2cfba",
                "title": "Step six",
                "message": "When you\u0027re ready for your teachers to create their accounts and begin the Foundation course, copy the registration link in :user_management_link and share it with them", "type": "automated",
                "start_date": "2022-04-04T00:00:00+00:00",
                "end_date": null,
                "read": false
            },

            {
                "id": "13d81f93-0758-4d79-a75d-63be8d8c4a60",
                "title": "Step seven",
                "message": "If your chosen implementation pathway includes teams of teachers working together, tag one or more teachers as GT Team Lead in :user_management_link",
                "type": "automated",
                "start_date": "2022-04-04T00:00:00+00:00",
                "end_date": null,
                "read": false
            }
        ]
}


let myMap = new Map()

for (const [key, value] of Object.entries(jsonData.data)) {
    myMap.set(key, Object.entries(value));
    console.log(key, value)
}

console.log(myMap)

const doc = document.getElementById("hello");


for (let [key, value] of myMap) {
    doc.innerHTML += `Index ${key}` + ("<br><br>")
    for ([key2, value2] of value) {
        doc.innerHTML += `${key2}: ${value2} ` + ("<br>")
    }
    doc.innerHTML += ("<br><br>")
}

doc.innerHTML += "Array size: " + myMap.size



/*
doc.innerHTML += Array.from(myMap).join(" ")

for (map in myMap) {
    myMap.forEach((value, key) => doc.innerHTML = `Key: ${ key }, value: ${ value } ` + ("<br>"))
}
console.log(myMap.size)
*/

// winning solution below
/*
const data = {}

for (const [key, value] of Object.entries(jsonData.data.me)) {
    data[key] = value;
    console.log(key, value)
}


const dataString = JSON.stringify(data, null, "\t")

const prettyDataString = dataString.replace(/"([^"]+)":/g, '$1:');

const doc = document.getElementById("hello");
doc.innerHTML = prettyDataString;
*/





/*
for (i = 0; i++; i < data.length) {
    console.log(i + ". " + data[i])
}
*/

/*
const data = jsonData.reduce((a, { sources }) => [...a, ...sources], [])
    .reduce((a, { uri, state }) => ({ ...a, [uri]: state }), {});

console.log(data)
*/


/*
for (data in jsonData.data.me) {
    console.log(data)
    for (value in data) {
        console.log(data, value)
    }
}
*/


/*for (data in jsonData) {
    for (y in data) {
        console.log(y)
        jsonData.forEach(([key, value]) => {
            console.log(key, value)
        });
    }
}
*/
/*
function fetchData() {
    jsonData.forEach(obj => {
        (([key, value]) => {
            console.log(`${ key } ${ value } `);
        });
        console.log('-------------------');
    });
}
fetchData()
*/
/*
jsonData.forEach((data) => {
    console.log(data)
})
*/
