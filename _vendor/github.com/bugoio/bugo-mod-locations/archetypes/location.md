{{ $name := split .Name "-" }}
---
layout: location
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
address_1:
address_2: ""
city:
state:
zip_code:
phones:
- toll_free:
- phone:
- fax:
hours:
staff: []
images: []
weight: 100
---