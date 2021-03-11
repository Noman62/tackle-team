import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import TeamDetails from '../TeamDetails/TeamDetails';

const Teams = () => {
    const {idTeam}=useParams();
    const [Teams,setTeams]=useState([]);

    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)
        .then(res=>res.json())
        .then(data=>setTeams(data.teams))
    },[idTeam])
    
    return (
        <div>
           {
               Teams.map(team=><TeamDetails team={team}></TeamDetails>)
           }
        </div>
    );
};

export default Teams;