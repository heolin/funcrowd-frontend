import posed  from 'react-pose';

const ListContainer = posed.div({
    enter: { staggerChildren: 50 },
    exit: { staggerChildren: 20, staggerDirection: -1 },
    initialPose: 'exit'
});

export default ListContainer;
