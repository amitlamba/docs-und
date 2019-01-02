---
id: overview
title: Overview
sidebar_label: Overview
---

UserNDot can easily be integrated with a web application or a website.
UserNDot js sdk is very simple to integrate.

Basic steps to integrate js sdk with you website are:

## 1. Set your domain name from UserNDot account:

Login into your account and 

## 2. Javascript code for SDK integration

Put the following code in the head section of your page for integrating 
javascript SDK

```
<script type="text/javascript">
(function(i,s,o,g,r,a,m){i.UserNDotObject=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','loader.js','_und');
_und('create', 'USERNDOT_ACTIVATION_CODE',{
            urls: ['https://userndot.com'],
            location: {active:true}
        });
</script>
``` 

> **Important** : Replace USERNDOT_ACTIVATION_CODE with the actual
activation code from your account, provided by UserNDot

> **Important** : Replace https://userndot.com with the url of your website.