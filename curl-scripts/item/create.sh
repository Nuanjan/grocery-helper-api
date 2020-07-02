curl 'http://localhost:4741/items' \
    --include \
    --request POST \
    --header "Content-Type: application/json" \
    --data '{
      "item": {
        "itemName": "'"${ITEM}"'",
        "amount": "'"${AMOUNT}"'",
        "groceryListId": "'"${GROCERY_ID}"'"
      }
    }'
