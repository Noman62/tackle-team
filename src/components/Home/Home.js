import React, { useEffect, useState } from 'react';
import LeagueInfo from '../LeagueInfo/LeagueInfo';
import { Container, Grid, makeStyles } from "@material-ui/core";
import Header from '../Header/Header';
import './Home.css';

const useStyle = makeStyles((theme) => ({
    root: {
        background: '#f8f8f8',
        minHeight: 'calc(100vh - 65px)'
    },
    containerRoot: {
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(11)
    }
}));

const Home = () => {
    const [footballLeagues, setFootballLeagues] = useState([]);
    const classes = useStyle();
    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';
        fetch(url)
            .then(res => res.json())
            .then(data => setFootballLeagues(data.teams))
    }, [])

    return (

            <main className={classes.root} style={{backgroundColor:'#116466'}}>
                <Header></Header>
                <Container className={classes.containerRoot} maxWidth="md" >
                    <Grid container spacing={3} justify="center">
                        {
                            footballLeagues.map(league => <LeagueInfo league={league}></LeagueInfo>)
                        }
                    </Grid>
                </Container>
            </main>
    );
};

export default Home;