import React, { useState, useEffect } from 'react';
import {View, Text, ScrollView, TouchableOpacity, StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

const Calendar = () => {

    const month = ["January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"];
    const dayString = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const [activeDate, setActiveDay] = useState(new Date());

    function twoWeeks(){
        const days = []
        const today = new Date();
        for(let i = 7; i > 0; i--){
            let previousDate = new Date();
            previousDate.setDate(today.getDate() - i);
            days.push(previousDate);
        }

        days.push(today);

        for(let i = 1; i < 7; i++){
            let previousDate = new Date();
            previousDate.setDate(today.getDate() + i);
            days.push(previousDate);
        }

        const date = [];
        days.forEach((day, i) => {
            date.push({
                dayString: dayString[day.getDay()],
                day: day.getDate(),
                month: month[day.getMonth()],
            })
        })
        return date;
    }

    function arrowLeftClick() {
        const newActiveDate = new Date(activeDate);
        if(activeDate.getDate() !== twoWeeks()[0].day){
            newActiveDate.setDate(activeDate.getDate() - 1);
            setActiveDay(newActiveDate);
        }
    }

    function arrowRightClick() {
        const newActiveDate = new Date(activeDate);
        if(activeDate.getDate() !== twoWeeks()[twoWeeks().length-1].day){
            newActiveDate.setDate(activeDate.getDate() + 1);
            setActiveDay(newActiveDate);
        }
    }

    function dateClick(date){
        const newActiveDate = new Date(activeDate);
        newActiveDate.setDate(date);
        setActiveDay(newActiveDate);
    }


    return(
        <View style={styles.container}>
            <View style={styles.top}>
                <Text testID="titleDate" style={styles.title}>{dayString[activeDate.getDay()]}</Text>
                <View style={styles.topRight}>
                    <TouchableOpacity testID="previousDay" onPress={() => arrowLeftClick()}>
                        <Icon name="arrow-back-ios" size={30} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity testID="nextDay" onPress={() => arrowRightClick()}>
                        <Icon name="arrow-forward-ios" size={30} color="#fff" />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.calendar}>
                    {twoWeeks().map((date, idx) => {

                        const activeStyle = date.day === activeDate.getDate() ? styles.dateActive : null;
                        const activeDayString = date.day === activeDate?.getDate() ? styles.dayStringActive : styles.dayString;
                        const activeDay = date.day === activeDate?.getDate() ? styles.dayActive : styles.day;

                        return(
                            <TouchableOpacity testID={`touchable${idx}`} key={idx} style={[styles.date, activeStyle]} onPress={() => dateClick(date.day)}>
                                <Text style={activeDayString}>{date.dayString.substring(0, 3)}</Text>
                                <Text testID={`calendarDate${idx}`} style={activeDay}>{date.day}</Text>
                            </TouchableOpacity>
                        )
                    })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        height: "39%",
    },
    top: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: "38%",
    },
    topRight: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    title: {
        fontSize: 37,
        fontWeight: "600",
        color: "#fff",
    },
    calendar: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
    },
    date: {
        display :"flex",
        flexDirection: "column",
        backgroundColor: "",
        alignItems: "center",
        justifyContent: "space-between",
        marginLeft: 5,
        marginRight: 5,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 3,
        paddingRight: 3,
    },
    dateActive: {
        backgroundColor: "#fff",
        borderRadius: 14,
    },
    dayString: {
        color: "#B3B3B3",
        fontSize: 20,
    },
    dayStringActive: {
        color: "#324359",
        fontSize: 20,
    },
    day: {
        color: "#fff",
        fontSize: 20,
    },
    dayActive: {
        color: "#324359",
        fontSize: 20,
    },
})

export default Calendar;