---
id: events
title: Events
sidebar_label: Events
---

Events means any activity of the user like page view, click of a button, login, register,
etc or any other activity tracked for the user.
Apart from it activities like Email Sent, SMS sent, Email read, Notification sent, 
App Uninstalled, etc could also be tracked as events.

While tracking events, please be careful that the name of the events are unique and 
consistent over your application and across devices. 
> **For Example**:  An event named `Xyz` in AndroidApp should be named `Xyz` 
in Web application as well if the purpose of the event is same.

> **Caution**: Name of the Event is case sensitive. 
So, name of the event should always be used in the same case.

## Events Classification

Events could be classified as Custom Events and System Events. Custom Events could be 
defined as the events you define explicitly in your application, while System Events are the 
events UserNDot tracks automatically.

## Event Attributes