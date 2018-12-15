
var express = require('express');
var app = express();


const port = 3000

app.get('/', function (req, res) {
  res.send('Hello World!');
});

/*
app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});

*/





var fs = require("fs");


var myObj = {
    "posts": [
      { "id": 1, 
      "caption": "my dog #puppy ",
      "comments": {
        "id": 1, 
        "postId": 1 ,
        "created_time": "13 July",
        "text": "cute dog"
      },
      "created_time": "12 July",
      "image": "https://pbs.twimg.com/profile_images/904293852642590720/-fT9-283_400x400.jpg",
      "location": "Miami",
      "user": {
          "id": 1,
          "bio": "Programmer | Music | Food",
        "counts": {
          "followed_by": 1,
          "follows": 1,
          "media": 3
  },
      "full_name": "John Doe",
      "profile_picture": "http://www.galuxsee.com/wp-content/uploads//2016/08/Red-Window-Los-Angeles-20170404-Joe-Jonas-Instagram-Map-7b6e6e64c6fa6f9fbdabb6f689af814d.jpg",
      "username": "JohnD25",
      "website": "www.JDUs.com"
    },
    },   
    { "id": 2, 
    "caption": "family nite #dope",
    "comments": {
        "id": 2, 
        "postId": 2 ,
        "created_time": "13 June",
        "text": "beautiful family"

    },
    "created_time": "12 June",
    "image": "https://i.pinimg.com/originals/1d/95/df/1d95df62dc814d3bc9fd0368407e8cb6.jpg",
    "location": "Buenos Aires",
    "user": {
         "id": 2,
         "bio": " Sports | FCBarcelona ",
        "counts": {
          "followed_by": 1,
         "follows": 1,
         "media": 3
},
    "full_name": "Ian Martinez",
    "profile_picture": "https://pbs.twimg.com/media/Dbf5i4gVAAANO1j.jpg",
    "username": "Imartinez15",
    "website": "www.MartinezIan.com"
},
  }



    ],
    "comments": [
      { "id": 1, 
       "postId": 1 ,
       "created_time": "13 July",
       "text": "cute dog"
    
    },

    {   "id": 2, 
     "postId": 2 ,
     "created_time": "13 June",
       "text": "beautiful family"
      }

    ],
    "user":[ { 
        "id": 1,
        "bio": "DNCE | Music | Food",
        "counts": {
            "followed_by": 1,
            "follows": 1,
            "media": 3
    },
        "full_name": "John Doe",
        "profile_picture": "http://www.galuxsee.com/wp-content/uploads//2016/08/Red-Window-Los-Angeles-20170404-Joe-Jonas-Instagram-Map-7b6e6e64c6fa6f9fbdabb6f689af814d.jpg",
        "username": "JohnD25",
        "website": "www.JDUs.com"
  },{
    "id": 2,
    "bio": " Sports | FCBarcelona ",
    "counts": {
        "followed_by": 1,
        "follows": 1,
        "media": 3
},
    "full_name": "Ian Martinez",
    "profile_picture": "https://pbs.twimg.com/media/Dbf5i4gVAAANO1j.jpg",
    "username": "Imartinez15",
    "website": "www.MartinezIan.com"
  }
   ],
    "search": [
        {
         "userId": 1,
          "full_name": "John Doe",
          "profile_picture": "http://www.galuxsee.com/wp-content/uploads//2016/08/Red-Window-Los-Angeles-20170404-Joe-Jonas-Instagram-Map-7b6e6e64c6fa6f9fbdabb6f689af814d.jpg",
          "username": "JohnD25"
        }, {
            "userId": 2,
             "full_name": "Ian Martinez",
             "profile_picture": "https://pbs.twimg.com/media/Dbf5i4gVAAANO1j.jpg",
             "username": "Imartinez15"
           }
    ]


  };

//convert object to json string
var myJSON = JSON.stringify(myObj);
console.log(myJSON);


//convert string to Json Object
console.log(JSON.parse(myJSON)); 



fs.writeFile("./data.json", JSON.stringify(myObj, null, 4), (err) => {
  if (err) {
      console.error(err);
      return;
  };
  console.log("File has been created");
});




app.listen(port, () => console.log(`Listening on port ${port}!`))



