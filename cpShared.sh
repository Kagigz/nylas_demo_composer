#!/bin/sh

#dbhelper
cp shared/dbHelper/index.ts src/helpers/dbHelper/index.ts
cp shared/dbHelper/index.ts functions/src/dbHelper/index.ts
cp shared/dbHelper/index.ts app-engine/src/dbHelper/index.ts

#loggerHelper
cp shared/loggerHelper/index.ts src/helpers/loggerHelper/index.ts
cp shared/loggerHelper/index.ts functions/src/loggerHelper/index.ts
cp shared/loggerHelper/index.ts app-engine/src/loggerHelper/index.ts