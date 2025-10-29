# Redirect app

## Assignment
You are working at a big furniture company called FIKA. The company has a big e-commerce site with thousands of products listed in multiple countries and languages. The site has a problem. Once in a while a product is removed from sale and thus removed from the site. This creates an issue. The urls pointing to the products are still scattered around the web and still forwarding traffic to the removed pages causing millions of 404 responses. You are therefore tasked with creating a backend service which should redirect requests to other existing pages to not lose this traffic and thus potential sales.

## Requirements
* The service allows for adding new redirects.
* The service should make use of the added redirects and redirect accordingly. If the redirect is temporary, then the redirect should only be active between the start and end dates.

## General information

### Domain
* Sometimes a page url-slug (the last segment of the url path, eg. "fika-365-mugg-vit") is changed for SEO purposes.
* The page ID (the numbers at the end of the url, eg. 20282942) is always static and never change for a given page, even across country and language.

### Redirects
There are two types of redirects: Temporary and Permanent. A permanent redirect contains the following fields:
* A path, eg: "/se/sv/p/fika-365-mugg-vit-20282942/"
* A target path: "/se/sv/cat/muggar-koppar-16045/"

A temporary redirect extends a redirect with start and end date fields.

### Host name
You can assume that the host name of the service is www.fika.com and will never change.

## Examples

### Adding redirect
POST localhost:3000/se/sv/p/fika-365-mugg-vit-20282942/ -> 201

### Existing permanent redirect
GET localhost:3000/se/sv/p/fika-365-mugg-vit-20282942/ -> 301 www.fika.com/se/sv/cat/muggar-koppar-16045/

### Existing temporary redirect
GET localhost:3000/se/sv/p/fika-365-mugg-vit-20282942/ -> 302 www.fika.com/se/sv/cat/muggar-koppar-16045/

### Non-existing redirect
GET localhost:3000/se/sv/p/fika-365-mugg-vit-20282942/ -> 404
