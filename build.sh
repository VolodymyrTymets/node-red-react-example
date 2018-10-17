for PALLET_NAME in "$@"
do
 echo "Build fo $PALLET_NAME "
 PALLET_NAME=$PALLET_NAME npm run build ./pallets/$PALLET_NAME/ui
done