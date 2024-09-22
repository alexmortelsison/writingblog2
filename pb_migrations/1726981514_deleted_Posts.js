/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("cy4868zv0dc0dhk");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "cy4868zv0dc0dhk",
    "created": "2024-09-22 04:41:58.823Z",
    "updated": "2024-09-22 04:41:58.823Z",
    "name": "Posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "3gturpid",
        "name": "Title",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "2teb8apl",
        "name": "Field",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
