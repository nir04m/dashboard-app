import { useState } from "react";
import FullCalender from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { Box, List, ListItem, ListItemText, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { formatDate } from "@fullcalendar/core/index.js";



const Calendar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentEvents, setCurrentEvents] = useState([]);
    const handleDateClick = (selected) => {
        const title = prompt('Please enter a new title for your event');
        const calendarApi = selected.view.calendar;
        calendarApi.unselect(); // clear date selection
        if (title) {
            calendarApi.addEvent({
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay,
            });
        }
    };

    const handleEventClick = (selected) => {
        if (
            window.confirm(`Are you sure you want to delete the event '${selected.event.title}'`   
            )
        ) {
            selected.event.remove();
        }
    };

    return(
        <Box m="20px">
            <Header title="CALENDAR" subtitle="Full Calendar Interactive Page" />
            <Box display="flex" justifyContent="space-between">
                {/* Calendar SideBar */}
                <Box flex="1 1 20%" backgroundcolor={colors.primary[400]} p="15px" borderRadius="4px">
                    <Typography variant="h5">Events</Typography>
                    <List>
                        {currentEvents.map((event) => (
                            <ListItem key={event.id} sx={{ backgroundColor: colors.greenAccent[500], margin: "10px 0", borderRadius: "2px" }}>
                                <ListItemText
                                    primary={event.title}
                                    secondary={
                                        <Typography>
                                            {formatDate(event.start, {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric',
                                            })}
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>
                {/* Calendar */}
                <Box flex="1 1 100%" ml="15px">
                    <FullCalender
                        height="75vh"
                        plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
                        headerToolbar={{
                            left: "prev,next today",
                            center: "title",
                            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
                        }}
                        initialView="dayGridMonth"
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        select = {handleDateClick}
                        eventsSet={(events) => setCurrentEvents(events)}
                        initialEvents={[
                            { id: '1234', title: 'Tire Change', date: '2025-05-24' },
                            { id: '4321', title: 'Volunteer', date: '2025-05-25' },
                        ]}
                        
                        eventClick={handleEventClick}
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default Calendar;
