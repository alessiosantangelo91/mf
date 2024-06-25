#!/bin/bash

cd app-shell && yarn && yarn dev

cd microfrontends/search-mf && yarn && yarn dev

cd microfrontends/star-wars-mf && yarn && yarn start
