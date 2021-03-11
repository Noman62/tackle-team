import React from 'react';
import { useHistory } from 'react-router';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight } from '@fortawesome/free-solid-svg-icons';



const LeagueInfo = (props) => {
    const { strTeam, idTeam, strTeamBadge, strSport } = props.league;
    let history = useHistory();
    const teamStyle={ border: '1px solid #17252A', margin: '20px', padding: '20px',backgroundColor:'white' }


    return (
        <div style={teamStyle}>
            <img style={{ width: '200px' }} src={strTeamBadge}></img>
            <div style={{textAlign:'center'}}>
                <h1>{strTeam}</h1>
                <p>Sports Type:{strSport}</p>
                <Button variant="contained" color="primary" onClick={() => history.push(`/leagueInfo/${idTeam}`)} >Explore <FontAwesomeIcon icon={faArrowRight} /></Button>
            </div>
        </div>
    );
};

export default LeagueInfo;