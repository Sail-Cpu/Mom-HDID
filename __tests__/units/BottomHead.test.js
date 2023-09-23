import React from 'react';
import Calendar from "../../src/components/BottomHead/Calendar";
import { describe, test, expect } from '@jest/globals';
import { render, fireEvent } from "@testing-library/react-native";

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
})