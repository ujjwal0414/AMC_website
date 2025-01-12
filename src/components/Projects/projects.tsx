import Card from '@/components/Projects/ProjectCard';
import { bgColor, color, h4, h5 } from '@/constants';
import { Box, Typography, useMediaQuery } from '@mui/material';

export default function Projects() {
    const breakPoint = useMediaQuery('(min-width:600px)');
    const breakPoint2 = useMediaQuery('(min-width:750px)');

    return (
        <>
            <Box
                bgcolor={bgColor}
                gap="35px"
                display="flex"
                width="85%"
                marginX="auto"
                flexDirection="column"
            >
                <Typography
                    variant="h1"
                    color={color}
                    textAlign="left"
                    fontSize={breakPoint ? h4 : h5}
                >
                    Our projects
                </Typography>
                <Box
                    display="grid"
                    gridTemplateColumns={
                        breakPoint2
                            ? '30% 30% 30%'
                            : breakPoint
                            ? '45% 45%'
                            : '80%'
                    }
                    justifyContent={breakPoint ? 'space-between' : 'center'}
                >
                    <Card
                        projectName="Drone mk1"
                        projectContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        projectThumbnail="/black drone new.jpg"
                    />

                    <Card
                        projectName="Drone mk1"
                        projectContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        projectThumbnail="/drone2.jpg"
                    />

                    <Card
                        projectName="Drone mk1"
                        projectContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        projectThumbnail="/flight2.jpg"
                    />

                    <Card
                        projectName="Drone mk1"
                        projectContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        projectThumbnail="/jets.jpg"
                    />

                    <Card
                        projectName="Drone mk1"
                        projectContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        projectThumbnail="/drone1.jpg"
                    />

                    <Card
                        projectName="Drone mk1"
                        projectContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        projectThumbnail="flight1.jpg"
                    />
                </Box>
            </Box>
        </>
    );
}
