import React from 'react'
import Fade from 'react-reveal/Fade';

import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
}));

const Resume = () => {

    const listResume = [
        {
            date: 'May 19 - Dec 19',
            title: 'Frontend Developer',
            company: 'Squareball Studios, Cali, Colombia',
            description: [
                'Project Ortho 360',
                'Back stack: C#, .net, MySql',
                'Front stack: Angular 7, Angular Material, Typescript, HTML 5, CSS 3'
            ]
        },
        {
            date: 'Feb 18 - Jul 18',
            title: 'FullStack Developer',
            company: 'CIER Sur(Univalle), Cali, Colombia',
            description: [
                'Project GIMNASIO DE HABILIDADES',
                'Back stack: Python, Django rest framework for the manage of API, PostgreSQL, Postman',
                'Front stack: React, CSS3, JavaScript with interfaces responsives and adaptatives with Flexbox and @media'
            ]
        },
        {
            date: 'Nov 17 - Feb 18',
            title: 'Frontend Developer',
            company: 'CIER Sur(Univalle), Cali, Colombia',
            description: [
                'Project OBJETOS VIRTUALES DE APRENDIZAJE PARA EDUCACIÓN SUPERIOR',
                'Technologies and skills: HTMl5, CSS3 with interfaces responsives and adaptatives with Flexbox and @media, JQuery and JavaScript.'
            ]
        },
        {
            date: 'Dec 15 - May 16',
            title: 'Software Engineer',
            company: 'Banco de occidente, Cali, Colombia',
            description: [
                'Project UNIFICACION PSP-OCCIRED',
                'Managing services with SOAP UI, Managing of data base ORACLE, and control of logs of data through ESB(Bus enterprise service).',
            ]
        },
        {
            date: 'Jun 15-Dec 15',
            title: 'Software Tester',
            company: 'Banco de occidente, Cali, Colombia',
            description: [
                'Project SISTEMA DE CARTERA FACTORING',
                'Evaluating the quality of the product. Identifying the scope of the test. Design and performing of test cases.',
                'Analyse of test results. Conducting time estimation on assigned projects.',
                'Elaboration and evaluation of a the test plan and a test strategy for the project.',
                'Recording and tracking identified issues.'
            ]
        }
    ]

    const listDescription = (list) => {
        return (
            <ul>
                <Typography>
                    {list.map((item, i) => {
                        return (

                            <li key={i}>{item}</li>
                        )
                    })}
                </Typography>
            </ul>
        )
    }

    const classes = useStyles();

    return (
        <div style={{ paddingTop: "6%" }}>
            <Fade top>
                <section className="skills" id="skills">
                    <h2 className="section-title">Resume</h2>

                    <div className="skills__container">
                        <Timeline align="alternate">
                            {listResume.map((resume, i) => {
                                return (
                                    <TimelineItem key={i}>
                                        <TimelineOppositeContent>
                                            <Typography variant="body2" color="secondary">
                                                {resume.date}
                                            </Typography>
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineDot color="primary">
                                                <LaptopMacIcon />
                                            </TimelineDot>
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <Paper elevation={3} className={classes.paper}>
                                                <Typography variant="h6" component="h1" color="primary">
                                                    {resume.company}
                                                </Typography>
                                                {listDescription(resume.description)}
                                            </Paper>
                                        </TimelineContent>
                                    </TimelineItem>
                                )
                            })}
                        </Timeline>
                    </div>
                </section>
            </Fade>
        </div>
    )
}

export default Resume
