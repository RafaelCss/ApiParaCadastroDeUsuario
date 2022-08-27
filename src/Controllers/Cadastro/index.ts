import { userDb } from '../../data/db'
import { Cadastro } from '../../util/interface'

export async function salvarUsuario(dados: Cadastro) {
  userDb.get()

  return JSON.stringify(user.query)
};

/* { "_query":
{ "_firestore": { "projectId": "cadastroprodutosteste" },
"_queryOptions": { "parentPath": { "segments": [] },
"collectionId": "usuarios", "converter": { }, "allDescendants": false,
"fieldFilters": [{ "serializer": { "allowUndefined": false }, "field": { "segments": ["email"] }, "op": "EQUAL", "value": "rf20ddd14soudddza@gail.com" }],
 "fieldOrders": [],
 "kindless": false,
 "requireConsistency": true },
 "_serializer": { "allowUndefined": false }, "_allowUndefined": false },
 "_readTime": { "_seconds": 1661539129, "_nanoseconds": 714612000 },
 "_size": 0,
 "_materializedDocs": [],
 "_materializedChanges": null, "_docs": null } */

/*  {"_firestore":{"projectId":"cadastroprodutosteste"},
 "_queryOptions":{
  "parentPath":{"segments":[]},"collectionId":"usuarios","converter":{},"allDescendants":false,
  "fieldFilters":[{"serializer":{"allowUndefined":false},"field":{"segments":["email"]},"op":"EQUAL","value":"rf20ddd14soudddza@gail.com"}],"fieldOrders":[],"kindless":false,"requireConsistency":true},"_serializer":{"allowUndefined":false},"_allowUndefined":false} */