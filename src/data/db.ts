
import { getFirestore } from "firebase-admin/firestore";
import { initializeApp, cert } from "firebase-admin/app";
import connectionDb from "./certificado";
import { IloginDataBase } from "../util/interface";

initializeApp({ credential: cert(connectionDb as IloginDataBase)});
const db = getFirestore();
export const userDb = db.collection("usuarios");
export const produtoDb = db.collection("produtos");
