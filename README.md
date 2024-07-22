# Turborepo TMP var reproduction

This is a reproduction of a bug I found in turborepo. The bug is related to the way that turborepo handles temporary variables when running children scripts.

## Steps to reproduce

- Check your local `TMP` or `TEMP` environment variables
- Run `npm run example` and check the output, it shouldn't contain the `TMP` or `TEMP` environment variables as expected
