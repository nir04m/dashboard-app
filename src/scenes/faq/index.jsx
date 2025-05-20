import {Box, useTheme} from '@mui/material';
import Header from '../../components/Header';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {tokens} from '../../theme';

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel1a-header">
                    <Typography color={colors.greenAccent[500]} variant="h5">An Important Question</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel1a-header">
                    <Typography color={colors.greenAccent[500]} variant="h5">What is your dashboard About</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Understanding the dashboard is crucial for effective data analysis and decision-making. It provides a visual representation of key metrics, trends, and insights, enabling users to monitor performance, identify areas for improvement, and make informed choices based on real-time data.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel1a-header">
                    <Typography color={colors.greenAccent[500]} variant="h5">Are the data and names real</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        No the data and names are not real. They are generated for the purpose of this dashboard.
                        The data is not real and does not represent any actual individuals or organizations. It is purely fictional and created for demonstration purposes only.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel1a-header">
                    <Typography color={colors.greenAccent[500]} variant="h5">Do you plan to use real data</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Yes I plan to use real data in the future. The goal is to create a more realistic and practical dashboard that can be used for actual data analysis and decision-making.
                        Using real data will provide more accurate insights and allow for better understanding of the dashboard's capabilities.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}

export default FAQ;