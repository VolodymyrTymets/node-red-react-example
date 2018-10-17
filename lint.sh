cd ./src/client
../../node_modules/.bin/eslint ./ --fix

cd ../../
./node_modules/.bin/eslint src/server src/utils/ --fix