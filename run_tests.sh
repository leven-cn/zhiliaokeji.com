#!/bin/bash -
#
# Requirements
#
#     sudo npm install -g htmlhint stylelint stylelint-config-recommended

htmlhint *.html
stylelint "css/*.css"
