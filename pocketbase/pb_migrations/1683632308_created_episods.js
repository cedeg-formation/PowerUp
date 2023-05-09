migrate((db) => {
  const collection = new Collection({
    "id": "oaie4bcvyafh8kl",
    "created": "2023-05-09 11:38:28.524Z",
    "updated": "2023-05-09 11:38:28.524Z",
    "name": "episods",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "b8lapwl8",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "bsar3ia3",
        "name": "image",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": [],
          "protected": false
        }
      },
      {
        "system": false,
        "id": "zzhfca9a",
        "name": "chapters",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("oaie4bcvyafh8kl");

  return dao.deleteCollection(collection);
})
