curl "http://localhost:4741/items/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --data '{
    "item": {
      "itemName": "'"${ITEM}"'",
      "amount": "'"${AMOUNT}"'",
      "groceryListId": "'"${GROCERY_ID}"'"
    }
  }'
