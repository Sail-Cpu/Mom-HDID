import React from 'react';
import Calendar from "../../src/components/BottomHead/Calendar";
import { describe, test, expect } from '@jest/globals';
import { render, fireEvent, waitFor } from "@testing-library/react-native";

jest.mock('react-native-vector-icons/MaterialIcons', () => 'Icon');
describe("Calendar test", () => {
    const date = new Date();
    const dayString = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const allDate = [];

    for(let i = 7; i > 0; i--){
        let previousDate = new Date();
        previousDate.setDate(date.getDate() - i);
        allDate.push(previousDate);
    }
    allDate.push(date);
    for(let i = 1; i < 7; i++){
        let previousDate = new Date();
        previousDate.setDate(date.getDate() + i);
        allDate.push(previousDate);
    }
    test("The previous day when i click on the previous button and vice versa", () => {
        const component = render(<Calendar />);

        const previousButton = component.getByTestId("previousDay");
        const nextButton = component.getByTestId("nextDay");
        let titleDate = component.getByTestId('titleDate');

        expect(titleDate.props.children).toBe(dayString[date.getDay()]);

        fireEvent.press(previousButton);
        titleDate = component.getByTestId('titleDate');

        if (date.getDay() !== 0){
            expect(titleDate.props.children).toBe(dayString[date.getDay()-1]);
        }else{
            expect(titleDate.props.children).toBe(dayString[dayString.length -1]);
        }

        fireEvent.press(nextButton);
        titleDate = component.getByTestId('titleDate');

        expect(titleDate.props.children).toBe(dayString[date.getDay()]);
    })
    test("Calendar Tab", () => {
        const component = render(<Calendar />);

        const allComponentDate = [];
        for(let i = 0; i < 14; i++){
            allComponentDate.push(component.getByTestId(`calendarDate${i}`).props.children);
        }
        const dates = [];
        for(let i = 0; i < allDate.length; i++){
            dates.push(allDate[i].getDate());
        }

        expect(allComponentDate).toEqual(dates);
    })
    test("Choose Date", async() => {
        const component = render(<Calendar />);

        let titleDate = component.getByTestId("titleDate");
        expect(titleDate.props.children).toBe(dayString[date.getDay()]);

        const allComponentDate = [];

        await Promise.all(
            Array.from({ length: 14 }, (_, i) =>
                waitFor(() => {
                    const touchable = component.getByTestId(`touchable${i}`);
                    allComponentDate.push(touchable);
                })
            )
        );

        const touchableStyle = allComponentDate[0];
        expect(touchableStyle.props.style.backgroundColor).toBe("");

        fireEvent.press(touchableStyle);
        expect(touchableStyle.props.style.backgroundColor).toBe("#fff");

        titleDate = component.getByTestId("titleDate");
        expect(titleDate.props.children).toBe(dayString[allDate[0].getDay()]);
    })
})