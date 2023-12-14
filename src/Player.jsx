import React from 'react'
// import records from './Player_detail.json';
import {useState} from 'react'
import PlayerList from './PlayerList'



function Player() {
const [rec, setRec] = useState(
    [

        {
        
          "name": "Saka",
          "team": "Arsenal",
           "nationality": "English, Nigeria",
           "jerseyNumber": 7,
            "age":  "21",
            "URL":   "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/Headshot_Saka_1510x850_0.jpg?auto=webp&itok=yZpptHcr"
        },
        {
        
          "name": "GABRIEL MAGALHÃES",
          "team": "Arsenal",
           "nationality": "Brazil",
           "jerseyNumber": 6 ,
            "age": 25 ,
            "URL":   "https://www.arsenal.com/sites/default/files/styles/tablet_16x9/public/images/Headshot_Gabriel_1510x850_0.jpg?auto=webp&itok=_-uqxa4V"
        },
        {
          "name": "Martin Odegaard",
          "team": "Arsenal",
           "nationality": "Norway",
           "jerseyNumber": 8,
            "age": 24 ,
            "URL":   "https://www.arsenal.com/sites/default/files/styles/tablet_16x9/public/images/Headshot_Odegaard_1510x850_0.jpg?auto=webp&itok=o6c67iiG"
        },
        {
        
          "name": "Eddie Nketiah",
          "team": "Arsenal",
           "nationality": "England",
           "jerseyNumber": 14,
            "age": 24,
            "URL":   "https://www.arsenal.com/sites/default/files/styles/tablet_16x9/public/images/Headshot_Nketiah_1510x850_0.jpg?auto=webp&itok=_uzLO6uQ"
        }
        ]
)
  return (
    <div>
   <PlayerList  rec={rec}  />
    </div>
  )
}

export default Player