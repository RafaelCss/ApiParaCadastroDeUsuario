
import { getFirestore } from "firebase-admin/firestore";
import { initializeApp, cert } from "firebase-admin/app";
import certificacao from "./certificado.json";
import { IloginDataBase } from "../interface";
initializeApp({ credential: cert(certificacao as IloginDataBase) });
const db = getFirestore();
export const userDb = db.collection("usuarios");
export const produtoDb = db.collection("produtos");
