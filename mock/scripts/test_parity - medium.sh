#!/usr/bin/env bash

# Executes cleanup function at script exit.
trap cleanup EXIT

# Load helpers
cd ..
source ./scripts/integration_tests.sh
source ./scripts/install_reporter.sh
source ./scripts/launch_testrpc.sh

# -----------------------  Conditional TestRPC Launch on 8545 ---------------------------------------

if testrpc_running; then
  echo "Using existing client instance"
else
  echo "Starting our own ganache-cli instance"
  start_testrpc
fi

echo "now sleep 5"
# Buidler is super fast on launch
sleep 5

echo "awake"

# -----------------------  Install Reporter and run tests ------------------------------------------
echo "installing"
install_reporter
echo "installed"
echo "starting parity test"
test_truffle_parity_medium
# test_truffle_v5_with_options
# test_buildler_v5_plugin

read -r -p "Press any key to exit" -n 1 -s
