{{ $name := split .Name "-" }}
---
layout: location
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
address_1: 400 Broad St
address_2: ""
city: Seattle
state: WA
zip_code: 98109
phones:
- toll_free: 800-555-8888
- phone: 206-555-1212
- fax: 206-555-1313
hours: |
  Mon-Fri: 8:00 AM - 6:00 PM
  Weekends: closed.
staff: []
images:
- https://res.cloudinary.com/bugo/image/upload/c_scale,w_980/v1563774135/seattle-space-needle-from-kerry-park.jpg
- https://res.cloudinary.com/bugo/image/upload/c_scale,w_980/v1563774134/leo-szeto-33036-unsplash.jpg
weight: 100
---