#!/bin/sh

# `$#` expands to the number of arguments and `$@` expands to the supplied `args`
printf "Running scripts with %d arguments: %s\n" "$#" "$@"
deno run --allow-env scripts/main.ts "$@"
