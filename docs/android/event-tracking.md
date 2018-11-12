---
id: event-tracking
title: Event Tracking
sidebar_label: Event Tracking
---

Event tracking is record the all event that a user perform on your app.You can see event as an action that take place on your app.
Each event/action is associated with an identity.That is used to identify which user perform this event.An event can have multiple property associated with it.Like Add to Cart event have additional property like 
amount,item name,color etc.You can use there property to create segment.Below you see the list of property that an event can have.


|Attributes|Type|Description|
|---|---|---|
|`name`|String|It describe the event|
|`city`|String|city from where event occur|
|`state`|String|state from where event occur|
|`country`|String|country name from which event occur|
|`latitude`|String|Location Latitude|
|`longitude`|String|Location Longitude|
|`attributes`|Map|Here you can store properties of an event like amount,color etc.|