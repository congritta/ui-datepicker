/// <reference types="react" />
export default function DatePicker(props: {
    value: string;
    transitionDuration?: number;
    gapBetweenInputWrapperAndCalendar?: number;
    monthNames?: string[];
    weekdayNames?: string[];
    weekStart?: number;
    toHumanDate?(date: Date): string;
    onDateUpdate(isoDate: string): void;
    datePickerClassName?: string;
    inputWrapperClassName?: string;
    calendarClassName?: string;
    timePeriodSelectorClassName?: string;
    calendarDaysGridClassName?: string;
    calendarDayClassName?: string;
    arrowIcon?: JSX.Element;
}): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=index.d.ts.map