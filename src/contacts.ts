import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";
import Contact from "./routes/pessoa";

export interface ContactInterface {
  id: string;
  first?: string;
  last?: string;
  createdAt: number;
  avatar?: string;
  twitter?: string;
  notes?: string;
  favorite?: boolean;
}

export async function getContacts(query?: string) {
  await fakeNetwork(`getContacts:${query}`);
  let contacts = await localforage.getItem("contacts") as ContactInterface[];
  if (!contacts) {
    contacts = [];
  }
  if (query) {
    contacts = matchSorter(contacts, query, { keys: ["first", "last"] });
  }
  return contacts.sort(sortBy("last", "createdAt"));
}

export async function createContact() {
  await fakeNetwork();
  let id = Math.random().toString(36).substring(2, 9);
  let contact = { id, createdAt: Date.now() };
  let contacts = await getContacts();
  contacts.unshift(contact);
  await set(contacts);
  return contact;
}

export async function getContact(id: string) {
  await fakeNetwork(`contact:${id}`);
  let contacts = await localforage.getItem("contacts") as ContactInterface[];
  let contact = contacts.find(contact => contact.id === id) as ContactInterface;
  return contact ?? null;
}

export async function updateContact(id: string, updates: ContactInterface) {
  await fakeNetwork();
  let contacts = await localforage.getItem("contacts") as ContactInterface[];
  let contact = contacts.find(contact => contact.id === id) as ContactInterface;
  if (!contact) throw new Error("No contact found for " + id);
  Object.assign(contact, updates);
  await set(contacts);
  return contact;
}

export async function deleteContact(id: string) {
  let contacts = await localforage.getItem("contacts") as ContactInterface[];
  let index = contacts.findIndex(contact => contact.id === id);
  if (index > -1) {
    contacts.splice(index, 1);
    await set(contacts);
    return true;
  }
  return false;
}

function set(contacts: ContactInterface[]) {
  return localforage.setItem("contacts", contacts);
}

// fake a cache so we don't slow down stuff we've already seen
let fakeCache: { [key: string]: boolean } = {};

async function fakeNetwork(key?: string) {
  if (!key && Object.keys(fakeCache).length === 0) {
    fakeCache = {};
  } else if (key && key.length > 0) {
    fakeCache[key] = true;
  }

  
  return new Promise(res => {
    setTimeout(res, Math.random() * 800);
  });
}