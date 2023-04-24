import vr from '../images/vr.jpg';
import speech from '../images/speech.jpg'
import body from '../images/body.jpg'
import heart from '../images/heart.jpg'
import graphs from '../images/graphs.jpg'

const features = [
    {
        title : "Virtual Reality",
        img : vr,
        icon : 'bx bx-dribble',
        description : 'VR app to get the full immersive experience',
        isAnalysis : false
    },
    {
        title : "Speech Analyis",
        img : speech,
        icon : 'bx bx-dribble',
        description : 'Analysis of the spoken speech on 5 different parameters',
        isAnalysis : true
    },
    {
        title : "Body Language Analysis",
        img : body,
        description : 'Analysis of body language on the basis of 3 different categories',
        isAnalysis : true
    },
    {
        title : "Nervousness Analysis",
        img : heart, 
        description : 'Analysis of how nervous you were during the session',
        isAnalysis : true
    },
    {
        title : "Comparison Graphs",
        img : graphs,
        description : 'Comparison graphs of all sessions so that you can compare your progress with time',
        isAnalysis : false
    },
    {
        title : "Realistic Environment",
        img : vr,
        description : 'The VR environment is as close to reality as possible so that you can feel that you\'re in a real classroom',
        isAnalysis : false
    }
];

export default features;
