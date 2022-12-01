const formData = {
    dogName: "Byron",
    dogBreed: "Poodle",
  };
  
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(formData),
  };
  
  fetch("http://localhost:3000/dogs", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      console.log(object);
    });


    const formDataWithError = {
        dogName: "Error Dog",
        dogBreed: "Poodle",
      };
      
      // method: "POST" is missing from the object below
      const configurationObjectWithError = {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formDataWithError),
      };
      
      fetch("http://localhost:3000/dogs", configurationObjectWithError)
        .then(response => response.json())
        .then(object => console.log(object))
        .catch(error => 
          alert("Bad things! Ragnarők!");
          console.log(error.message);
        });