# sh curl-scripts/index.sh
API="http://localhost:4741"
URL_PATH="/groceryLists"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "groceryList": {
      "title": "'"${TITLE}"'",
        "list": "'"${LIST}"'"
    }
  }'

echo
