import React from 'react';
import Calendar from "../../src/components/BottomHead/Calendar";
import { describe, test, expect } from '@jest/globals';
import { render, fireEvent } from "@testing-library/react-native";
import {queries} from "@testing-library/react";

jest.mock('react-native-vector-icons/MaterialIcons', () => 'Icon');
describe("Calendar test", () => {
    const date = new Date();
    const dayString = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    test("The previous day when i click on the previous button and vice versa", () => {
        const component = render(<Calendar />)

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
    test("test Calendar Tab", () => {
        const component = render(<Calendar />)

        const allDate = [];

        for(let i = 7; i > 0; i--){
            let previousDate = new Date();
            previousDate.setDate(date.getDate() - i);
            allDate.push(previousDate.getDate());
        }

        allDate.push(date.getDate());

        for(let i = 1; i < 7; i++){
            let previousDate = new Date();
            previousDate.setDate(date.getDate() + i);
            allDate.push(previousDate.getDate());
        }

        const allComponentDate = [];
        for(let i = 0; i < 14; i++){
            allComponentDate.push(component.getByTestId(`calendarDate${i}`).props.children);
        }

        expect(allComponentDate).toEqual(allDate);

    })
})