# Enable_Magnify.js

### Description
**_Enable_Magnify.js_** is a lightweight (<0.5kb minified) jQuery plugin that allows for magnifying an image on hover.

## Usage
The `enable_magnify( )` plugin takes two arguments:

| Name | Type | Function |
|--- | --- | --- |
|lg_img_src | String | The source of the larger image|
|lg_container_id | String | The ID name you want to use for the container _(optional - defaults to 'magnify')_|

A div with the specified ID (lg_container_id) containing the larger image (lg_img_src) will be inserted after the element the plugin is called on and hides it to begin with.

When the user then hovers over the small image, larger image container becomes visible. The plugin calculates the sizing and positioning of the small and large images in relation to location of the mouse and adjusts the position of the large image accordingly within its container.

---
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
<div id='large-image' style='position:relative;overflow:hidden;'>
	<img src='img/large-img.jpg' style='position:relative;'/>
</div>
```
_On Hover_:

![image](http://i64.tinypic.com/zwb4vr.png)

---
## Notes
The larger image container must have a height and width specified in the CSS. This is one of the purposes of having the plugin assign a `lg_container_id`.

This plugin should work for any two images, as long as the 'larger image' _is_ actually larger than the original image (it doesn't matter if it's 1000px larger or 2px larger, it just needs to be larger).