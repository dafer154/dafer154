import React from 'react'
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 205,
    },
    
});

const Work = () => {

    const works = [
        { id: 1, title: "Poke-Api", public: true, image: require('../assets/work/poke-api.PNG'), tec: "React, Redux, Axios, HTML 5, CSS 3, JS", tecnologies: ['React', 'Redux', 'Axios', 'HTML 5', 'CSS 3', 'JS'], url: 'https://dafer154.github.io/poke-api-react/#/' },
        { id: 2, title: "Covid-19", public: true, image: require('../assets/work/covid-19.PNG'), tec: "React, Hooks, Context, Axios, HTML 5, CSS 3, JS", tecnologies: ['React', 'Hooks', 'Context', 'Axios', 'HTML 5', 'CSS 3', 'JS'], url: 'https://dafer154.github.io/covid-19/' },
        { id: 3, title: "Objetos virtuales De Aprendizaje", public: true, image: require('../assets/work/cier-sur.png'), tec: "Javascript, HTML 5, CSS 3, Jquery", tecnologies: ['Javascript', 'HTML 5', 'CSS 3', 'Jquery'], url: 'http://ciersur.univalle.edu.co/media-main/ovas#' },
        { id: 4, title: "Starmovie-List", public: true, image: require('../assets/work/starmovielist.png'), tec: "Angular, Bootstrap, API-TMDB, Angular-UI, Typescript, HTML 5, CSS 3", tecnologies: ['Angular', 'Bootstrap', 'API-TMDB', 'Angular-UI', 'Typescript', 'HTML 5', 'CSS 3'], url: 'https://dafer154.github.io/starmovielist/' },
        { id: 5, title: "Portfolio David Zuluaga", public: true, image: require('../assets/work/portfolio-david.png'), tec: "Angular, Bootstrap, Typescript, HTML 5, CSS 3", tecnologies: ['Angular', 'Bootstrap', 'Typescript', 'HTML 5', 'CSS 3'], url: 'https://dafer154.github.io/portafolio/' },
        { id: 5, title: "Ortho 360", public: false, image: require('../assets/work/ortho.png'), tec: "Angular 7, Angular Material, Typescript, HTML 5, CSS 3", tecnologies: ['Angular 7', 'Angular Material', 'Typescript', 'HTML 5', 'CSS 3'], url: '' },
    ]

    const classes = useStyles();

    return (
        <div style={{ paddingTop: "6%" }}>
            <Fade top>
                <section className="work" id="work">
                    <h2 className="section-title">Work</h2>

                    <div className="cards__work">
                        {works.map((work) => {
                            return (
                                <div className="card__custom">
                                    <Card className={classes.root} key={work.id}>
                                        <CardActionArea>
                                            <CardMedia
                                                className={classes.media}
                                                image={work.image}
                                                title="Contemplative Reptile"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    {work.title}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    {/* {listTecnhologies(work.tecnologies)} */}
                                                    {work.tec}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <div className="card__footer">
                                                <div>
                                                    {work.url != '' ? <Link href={work.url} target="_blank"><a href={work.url} target="_blank">Url</a></Link> : ''}
                                                </div>
                                                <div className={classes.root}>

                                                    {work.public ? <Chip label="Public" color="primary" variant="outlined" />
                                                        : <Chip label="Private" color="secondary" variant="outlined" />}
                                                </div>
                                            </div>
                                        </CardActions>
                                    </Card>
                                </div>
                            )
                        })}
                    </div>
                </section>
            </Fade>
        </div>
    )
}

export default Work
