#!/bin/bash

echo "⌛ Please wait while the project gets checks passed" \
\
&& bash scripts/lint.sh \
&& bash scripts/build.sh \
\
&& echo "✅ Checks successfully done. Commiting..."
