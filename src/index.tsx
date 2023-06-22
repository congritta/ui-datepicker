import React, {useRef, useState} from "react";

import styles from "./index.module.css";

const defaultTransitionDuration = 210;
const defaultGapBetweenInputWrapperAndCalendar = 10;
const defaultMonthNames = [
  "January",
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
  "December"
];
const defaultWeekdayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const defaultWeekStart = 0;

function daysInMonth(year: number, month: number): number {
  return (new Date(year, month, 0)).getDate();
}

function monthDaysOffset(year: number, month: number) {
  return (new Date(year + "-" + month + "-01")).getDay();
}

function CalendarCell(props: {
  dayNumber?: number,
  isSelected?: boolean,
  contents?: string | JSX.Element,

  calendarDayClassName?: string

  onClick?(): void
}) {

  return (
    <div
      onClick={() => props.onClick?.()}
      className={[
        styles.calendarDay,
        ...(props.dayNumber ? ['_isHoverable'] : []),
        ...(props.isSelected ? ['_isSelected'] : []),
        ...(props.calendarDayClassName ? [props.calendarDayClassName] : [])
      ].join(' ')}
    >
      {props.dayNumber ?? props.contents}
    </div>
  );
}

function DefaultArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
    </svg>
  );
}

export default function DatePicker(props: {
  value: string,

  transitionDuration?: number,
  gapBetweenInputWrapperAndCalendar?: number,

  monthNames?: string[],
  weekdayNames?: string[],
  weekStart?: number;

  toHumanDate?(date: Date): string,
  onDateUpdate(isoDate: string): void,

  datePickerClassName?: string,
  inputWrapperClassName?: string,
  calendarClassName?: string,
  timePeriodSelectorClassName?: string,
  calendarDaysGridClassName?: string,
  calendarDayClassName?: string,

  arrowIcon?: JSX.Element
}) {

  // Refs
  const datePickerRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);

  // State
  const [date, setDate] = useState(new Date(`${props.value}`));
  const [isOpened, setIsOpened] = useState(false);
  const [isCalendarRemovedFromLayout, setIsCalendarRemovedFromLayout] = useState(!isOpened);
  const [floatingDirection, setFloatingDirection] = useState<{top: boolean, left: boolean;}>({top: false, left: false});

  // Handle opening
  function handleOpening() {
    makeCalendarFloatingSide();
    setIsCalendarRemovedFromLayout(false);
    setTimeout(() => {
      setIsOpened(true);
      window.addEventListener('click', handleClosing);
    }, 0);
  }

  // Handle closing
  function handleClosing(event?: Event) {

    if(event?.target && datePickerRef.current?.contains(event.target as HTMLElement)) return;

    setIsOpened(false);
    setTimeout(() => {window.removeEventListener('click', handleClosing);}, 0);
    setTimeout(() => {setIsCalendarRemovedFromLayout(true);}, props.transitionDuration ?? defaultTransitionDuration);
  }

  // Make calendar floating side function
  function makeCalendarFloatingSide() {

    setTimeout(() => {
      const selectWrapperRect = datePickerRef.current?.getBoundingClientRect();
      const calendarRect = calendarRef.current?.getBoundingClientRect();

      if(!selectWrapperRect || !calendarRect) {
        throw new Error('No rect found');
      }

      const gap = props.gapBetweenInputWrapperAndCalendar ?? defaultGapBetweenInputWrapperAndCalendar;
      const {height: calendarHeight} = calendarRect;

      setFloatingDirection({
        top: selectWrapperRect.top + selectWrapperRect.height + gap + calendarHeight > window.innerHeight,
        left: selectWrapperRect.left + selectWrapperRect.width + gap > window.innerWidth
      });
    }, 0);
  }

  // Update current date function
  function updateCurrentDate(year: number, month: number, day: number) {

    if(month > 12) {
      month = 1
      year++
    }

    if(month <= 0) {
      month = 12
      year--
    }

    setDate(new Date(`${year}-${month}-${day}`))
  }

  // Update date function
  function updateDate(year: number, month: number, day: number) {
    updateCurrentDate(year, month, day)

    props.onDateUpdate((new Date(`${year}-${month}-${day}`)).toISOString());
    handleClosing()
  }

  // Get date from value
  const valueDate = new Date(props.value)

  // Render
  return (
    <div
      ref={datePickerRef}
      className={[
        styles.DatePicker,
        ...(isOpened ? ["_isOpened"] : []),
        ...(props.datePickerClassName ? [props.datePickerClassName] : [])
      ].join(' ')}
      style={{
        '--transition-duration': `${props.transitionDuration ?? defaultTransitionDuration}ms`,
        '--gap-between-input-wrapper-and-calendar': `${props.gapBetweenInputWrapperAndCalendar ?? defaultGapBetweenInputWrapperAndCalendar}px`
      } as never}
    >

      {/* Input wrapper */}
      <div
        className={[
          styles.inputWrapper,
          ...(props.inputWrapperClassName ? [props.inputWrapperClassName] : [])
        ].join(" ")}
        onClick={() => !isOpened ? handleOpening() : null}
      >
        <input type="text" value={props.toHumanDate ? props.toHumanDate(date) : date.toLocaleDateString()} readOnly />
      </div>

      {/* Calendar */}
      <div
        ref={calendarRef}
        className={[
          styles.calendar,
          ...(floatingDirection.top ? ["_isRevealedFromBottom"] : []),
          ...(floatingDirection.left ? ["_isRevealedFromRight"] : []),
          ...(isCalendarRemovedFromLayout ? ["_isRemovedFromLayout"] : []),
          ...(props.calendarClassName ? [props.calendarClassName] : [])
        ].join(" ")}
        style={{zIndex: !isCalendarRemovedFromLayout ? 999999 : undefined}}
      >

        <div
          className={[
            styles.timePeriodSelector,
            ...(props.timePeriodSelectorClassName ? [props.timePeriodSelectorClassName] : [])
          ].join(" ")}
        >

          <button
            type="button"
            className="_isZeroed"
            onClick={() => updateCurrentDate(date.getFullYear(), date.getMonth(), date.getDate())}
          >
            {props.arrowIcon ?? (<DefaultArrowIcon />)}
          </button>

          <span>{(props.monthNames ?? defaultMonthNames)[date.getMonth()]}</span>

          <button
            type="button"
            className="_isZeroed"
            onClick={() => updateCurrentDate(date.getFullYear(), date.getMonth() + 2, date.getDate())}
          >
            {props.arrowIcon ?? (<DefaultArrowIcon />)}
          </button>
        </div>

        <div
          className={[
            styles.timePeriodSelector,
            ...(props.timePeriodSelectorClassName ? [props.timePeriodSelectorClassName] : [])
          ].join(" ")}
        >

          <button
            type="button"
            className="_isZeroed"
            onClick={() => updateCurrentDate(date.getFullYear() - 1, date.getMonth() + 1, date.getDate())}
          >
            {props.arrowIcon ?? (<DefaultArrowIcon />)}
          </button>

          <span>{date.getFullYear()}</span>

          <button
            type="button"
            className="_isZeroed"
            onClick={() => updateCurrentDate(date.getFullYear() + 1, date.getMonth() + 1, date.getDate())}
          >
            {props.arrowIcon ?? (<DefaultArrowIcon />)}
          </button>
        </div>


        <div
          className={[
            styles.calendarDaysGrid,
            ...(props.calendarDaysGridClassName ? [props.calendarDaysGridClassName] : [])
          ].join(" ")}
        >

          {(props.weekdayNames ?? defaultWeekdayNames).map((weekDay) => (
            <CalendarCell key={weekDay} contents={weekDay} calendarDayClassName={props.calendarDayClassName} />
          ))}

          {Array.from(Array((monthDaysOffset(
            date.getFullYear(),
            date.getMonth() + 1
          ) || 7) - (props.weekStart ?? defaultWeekStart)).keys()).map((day) => (
            <CalendarCell key={day} contents="" calendarDayClassName={props.calendarDayClassName} />
          ))}

          {Array.from(Array(daysInMonth(date.getFullYear(), date.getMonth() + 1)).keys()).map((day) => (
            <CalendarCell
              key={day + 1}
              dayNumber={day + 1}
              onClick={() => updateDate(date.getFullYear(), date.getMonth() + 1, day + 1)}
              isSelected={
                date.getFullYear() === valueDate.getFullYear()
                &&
                date.getMonth() === valueDate.getMonth()
                &&
                day + 1 === valueDate.getDate()
              }
              calendarDayClassName={props.calendarDayClassName}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
