#!/bin/sh

sep=,
git log --since='last year' --date=short  --pretty=format:'%h;%an;%ad;%s' > ./commit-history.csv
