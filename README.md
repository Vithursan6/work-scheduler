# Work Day Scheduler Application
A simple application that assists in planning a regular 8 hour work day.

## Third-Party APIs: Work Day Scheduler

Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.


## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## Description
The app has 9 time slots ranging from 9am to 5pm. The current date is displayed at the top of page.
The user can click in the text are next to corresponding time and input their tasks to complete.
The app stores user data in local storage once save button is clicked.
When the current time is greater than the time corresponding to a task, the text area field is greyed out.
When the current time is equal to the the time corresponding to a task, the text field is highlighted in red.
If current time is less than the time corresponding to a task, the text field will remain green.
The page will keep data stored in localStorage and retrieve most recent saved data if refreshed.

## Link to project/repository

https://vithursan6.github.io/work-scheduler/

https://github.com/Vithursan6/work-scheduler




## Screenshot
![screenshot link](https://vithursan6.github.io/work-scheduler/screenshot.png)


## Video Demonstration

https://vithursan6.github.io/work-scheduler/video.mp4

## License
MIT License

Copyright (c) 2021 Vithursan6

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
