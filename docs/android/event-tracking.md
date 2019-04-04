---
id: event-tracking
title: Event Tracking
sidebar_label: Event Tracking
---

To make your marketing campaign successful you need to have a way to track all your events. In a broader sense events are triggers provided by your users through your mobile application which can be tracked. You can see the event as an action that takes place on your app. Each event/action is associated with an identity. The identity is used to identify which user perform this event. 

An event can have multiple properties associated with it like Add to Cart event have an additional property like amount, item name, colour etc. In case of an e-commerce mobile application when a user adds an item to its wish list, you would want to record the "Added to Wish-List" event along with all the product details. Events can play an important role in [segmenting](/d/docs/fundamentals/segments) users which in turn may provide you with a good rate of engagement from your campaign. Below you see the list of property that an event can have.


|Attributes|Type|Description|
|---|---|---|
|`name`|String|It describe the event|
|`city`|String|city from where event occur|
|`state`|String|state from where event occur|
|`country`|String|country name from which event occur|
|`latitude`|String|Location Latitude|
|`longitude`|String|Location Longitude|
|`attributes`|Map|Here you can store properties of an event like amount,color etc.|

The below steps will help you in integrating the code to track events - 

## Step 1:
**Create an object of event**

```kotlin
var event = Event()
```

## Step 2:
**Assign event properties to the object instance**

```kotlin
event.name = "Add to Cart"
```

## Step 3:
**Add attributes to the event instance** 

```kotlin
event.attributes= HashMap()
event.attributes.put("Item","Shoes")
event.attributes.put("new","new")
````
> **Note :** You can add any number of attributes as a key value pair.

## Step 4:
**Send event to userndot**

```kotlin
defaultInstance?.pushEvent(event)
```
