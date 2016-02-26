# Enable_Magnify.js

### Description
**_Enable_Magnify.js_** is a lightweight jQuery plugin that allows for magnifying an image on hover.

## Usage
The `enable_magnify( )` plugin takes two arguments:

| Name | Type | Function |
|--- | --- | --- |
|lg_img_src | String | The source of the larger image|
|lg_container_id | String | The ID name you want to use for the container _(optional - defaults to 'magnify')_|

A div with the specified ID containing the larger image (lg_img_src) will be inserted after the element the plugin is called on.

### Example

_Original HTML Markup_:
```
<div id='smaller-image'><img src='img/small-img.jpg'/></div>
```

_Call the plugin_:

`$('#smaller-image').enable_magnify('img/large-img.jpg', 'large-image')`

_Resulting Markup_:
```
<div id='smaller-image'><img src='img/small-img.jpg'/></div>
<div id='large-image'><img src='img/large-img.jpg'/></div>
```