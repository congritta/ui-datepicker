# @congritta-ui/datepicker

This is datepicker React component and part of [Congritta UI](https://ui.congritta.com)

## How to install

1. Install `@congritta-ui/base` if you didn't it yet. (More info at: http://ui.congritta.com/docs/base);
2. Install `@congritta-ui/datepicker`;

Add

```javascript
import DatePicker from '@congritta-ui/datepicker';
```

into your code

## How to use

Example:

```jsx
export default function MyComponentWidthDatePicker() {
  const [value, setValue] = useState('2000-01-01'); // ISO Date

  return (
    <DatePicker value={value} onDateUpdate={setValue} />
  )
}
```

### Props

| Prop name                               | Description                                                                | Is Required | Default value                         |
|-----------------------------------------|----------------------------------------------------------------------------|-------------|---------------------------------------|
| value                                   | Active value (ISO String)                                                  | true        |                                       |
| onDateUpdate                            | Function that executes when user clicks on day in calendar                 | true        |                                       |
| transitionDuration                      | Duration in milliseconds to reveal or close calendar                       | false       | `210`                                 |
| gapBetweenInputWrapperAndCalendar       | Gap between input wrapper and picker (in pixels)                           | false       | `10`                                  |
| monthNames                              | Array of month names. Useful for i18n                                      | false       | `Array of months in English`          |
| weekDayNames                            | Array of weekday names. Useful for i18n                                    | false       | `Array of weekdays in English`        |
| weekStart                               | Number of day that week starts from (0 for sunday)                         | false       | `0 (Sunday)`                          |
| toHumanDate                             | Function that returns string formatted date                                | false       | `(date) => date.toLocaleDateString()` |
| datePickerClassName                     | Class name for DatePicker component wrapper for adding additional styles   | false       |                                       |
| inputWrapperClassName                   | Class name for input wrapper for adding additional styles                  | false       |                                       |
| timePeriodSelectorClassName             | Class name for time period selector for adding additional styles           | false       |                                       |
| calendarDaysGridClassName               | Class name for calendar days wrapper for adding additional styles          | false       |                                       |
| calendarDayClassName                    | Class name for calendar day cell for adding additional styles              | false       |                                       |
| arrowIcon                               | svg component of arrow icon                                                | false       | `<Internal icon>`                       |
