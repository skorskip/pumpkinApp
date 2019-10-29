#!/usr/bin/env bash

curl -X POST \
	-H "Content-Type: application/json" \
	-d '{"id":2, "petType": "dog", "name": "jackson", "age": 14, "breed": "basset-hound"}' \
	http://localhost:3001/pets