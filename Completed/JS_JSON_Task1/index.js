const jsonData = {
    "data":
    {
        "me":
        {
            "id": "f6da9985-ceaa-4f9b-8967-		bfd52fa73715", "first_name": "Ibrahim", "last_name": "Elsanosi", "email": "ibrahim@evidencebased.education", "role": "ROLE_SCHOOL_COORDINATOR", "organisation": "Tribe", "great_teaching_lead": false, "created_at": "2022-04-04 21:04:03.170882", "subscription_type": "paid", "slots": 6, "fsm": 4, "sen": 3, "ehcp": 5, "eal": 5, "category_1": "Independent/fee-paying", "category_2": "Primarily local students", "category_3": "Open to all", "role_type": null, "qualifications": null, "link": "https:\/\/preview.toolkit.greatteaching.com/register?t=3e05eb3569db1b3656acec2123541187\u0026r=teacher"
        }
    }
}


const data = {}

for (const [key, value] of Object.entries(jsonData.data.me)) {
    data[key] = value;
    console.log(key, value)
}

//console.log(data)



const dataString = JSON.stringify(data, null, "\t")

const prettyDataString = dataString.replace(/"([^"]+)":/g, '$1:');

const doc = document.getElementById("hello");
doc.innerHTML += prettyDataString;

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
            console.log(`${key} ${value}`);
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
