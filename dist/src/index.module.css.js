
const digest = '990b051c0671bf45fdcde9b90829465d10021988a01f0a7e295e2c52861501a3';
const css = `._DatePicker_1jm1a_1 {
  position: relative;
  width: 100%;
  flex: 1;
  min-width: 100px;
  height: var(--cui-inputs-height);
}

/* Date input wrapper */

._inputWrapper_1jm1a_11 {
  cursor: pointer;
}

._inputWrapper_1jm1a_11 > input {
  cursor: inherit;
  min-width: unset;
}
/* Calendar */

._calendar_1jm1a_21 {
  position: absolute;
  left: 0;
  top: calc(100% + var(--gap-between-input-wrapper-and-calendar));
  width: 100%;
  background: var(--cui-black-color-100);
  transition: var(--transition-duration);
  overflow: auto;
  overscroll-behavior: none;
}

@media(prefers-color-scheme: dark) {
  ._calendar_1jm1a_21 {
    background: var(--cui-black-color-900);
    color: var(--cui-black-color-300)
  }
}

._calendar_1jm1a_21[class*="_isRemovedFromLayout"] {
  display: none;
}

._calendar_1jm1a_21[class*="_isRevealedFromBottom"] {
  top: unset;
  bottom: calc(100% + var(--gap-between-input-wrapper-and-calendar));
}

._calendar_1jm1a_21[class*="_isRevealedFromRight"] {
  left: unset;
  right: 0;
  transform: none;
}

._DatePicker_1jm1a_1:not([class*="_isOpened"]) > ._calendar_1jm1a_21 {
  opacity: 0;
  visibility: hidden;
  transform: translateY(10%)
}

._DatePicker_1jm1a_1:not([class*="_isOpened"]) > ._calendar_1jm1a_21[class*="_isRevealedFromBottom"] {
  transform: translateY(-10%)
}

/* Time period selector */

._timePeriodSelector_1jm1a_66 {
  display: flex;
  align-items: center;
}

._timePeriodSelector_1jm1a_66:not(:first-child) {
  border-top: 1px solid var(--cui-black-color-300)
}

@media(prefers-color-scheme: dark) {
  ._timePeriodSelector_1jm1a_66:not(:first-child) {
    border-top-color: var(--cui-black-color-800)
  }
}

._timePeriodSelector_1jm1a_66 > button {
  padding: 15px
}

._timePeriodSelector_1jm1a_66 > button > svg {
  width: 1em;
  height: 1em;
}

._timePeriodSelector_1jm1a_66 > button:first-child > svg {
  transform: rotateZ(180deg)
}

._timePeriodSelector_1jm1a_66 > span {
  display: block;
  flex: 1;
  text-align: center;
  font-weight: bold;
}

/* Days grid */

._calendarDaysGrid_1jm1a_103 {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1px;
  padding: 1px
}

._calendarDay_1jm1a_103 {
  text-align: center;
  font-size: 10pt;
  padding: 10px 0;
  box-shadow: 0 0 0 1px var(--cui-black-color-300);
}

._calendarDay_1jm1a_103[class*="_isHoverable"] {
  cursor: pointer;
}

._calendarDay_1jm1a_103[class*="_isHoverable"]:hover {
  background: var(--cui-black-color-200)
}

@media(prefers-color-scheme: dark) {
  ._calendarDay_1jm1a_103 {
    box-shadow: 0 0 0 1px var(--cui-black-color-800)
  }

  ._calendarDay_1jm1a_103[class*="_isHoverable"]:hover {
    background: var(--cui-black-color-800)
  }
}

._calendarDay_1jm1a_103[class*="_isSelected"] {
  background: var(--cui-accent-color-700);
  color: #fff
}

@media(prefers-color-scheme: dark) {
  ._calendarDay_1jm1a_103[class*="_isSelected"] {
    background: var(--cui-accent-color-900)
  }  
}

._calendarDaysGrid_1jm1a_103 > ._calendarDay_1jm1a_103:nth-child(-n+7) {
  font-weight: bold;
  font-size: 12pt
}
`;

(function() {
  if (typeof document === 'undefined') {
    return;
  }
  if (!document.getElementById(digest)) {
    var el = document.createElement('style');
    el.id = digest;
    el.textContent = css;
    document.head.appendChild(el);
  }
})();
    
export default {"DatePicker":"_DatePicker_1jm1a_1","datePicker":"_DatePicker_1jm1a_1","inputWrapper":"_inputWrapper_1jm1a_11","calendar":"_calendar_1jm1a_21","timePeriodSelector":"_timePeriodSelector_1jm1a_66","calendarDaysGrid":"_calendarDaysGrid_1jm1a_103","calendarDay":"_calendarDay_1jm1a_103"};
export { css, digest };
  