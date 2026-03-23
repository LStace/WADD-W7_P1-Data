// Exercice 1.1

let address1 = {
    buildingNumber: "60",
    streetName: "Woodland Road",
    city: "Rushden",
    postcode: "NN10 6UT"

}

let address2 = {
    buildingNumber: "47",
    streetName: "Palgrave Road",
    city: "Bedford",
    postcode: "MK42 9DH"
}

let address3 = {
    buildingNumber: "The Crest",
    streetName: "Garrow Hill",
    city: "York",
    postcode: "YO10 3CL"
}

console.log(address1, address2, address3)



// Exercise 1.2

class Address {
    #buildingNumber
    #streetName
    #city
    #postcode 

    constructor(buildingNumber, streetName, city, postcode){
        this.#buildingNumber = buildingNumber;
        this.#streetName = streetName;
        this.#city = city;
        this.#postcode = postcode;
    }
}

let classAddress = new Address(60, "Woodland Road", "Rushden", "NN10 6UT");

console.log(classAddress);