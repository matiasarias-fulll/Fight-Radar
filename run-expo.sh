#!/bin/bash

# ========================
# Fix Expo adb + Run Dev
# ========================

echo "🧹 Fixing adb env..."
unalias adb 2>/dev/null
unset ANDROID_ADB
export PATH="/usr/bin:$PATH"

echo "🚀 Starting Metro bundler with correct adb..."
yarn start
