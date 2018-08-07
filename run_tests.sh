#!/bin/bash -
#
# Requirements
#
#     sudo npm install -g htmlhint stylelint stylelint-config-recommended

# Code Review - Static Analysis
htmlhint *.html
stylelint "css/*.css"
