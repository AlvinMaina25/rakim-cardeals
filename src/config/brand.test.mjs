import assert from "node:assert/strict";
import { brand, whatsappLink } from "./brand.ts";

assert.equal(brand.name, "Cardeals by Rickmann");
assert.equal(brand.phones.primary.display, "0702348300");
assert.equal(brand.phones.primary.international, "+254702348300");
assert.equal(whatsappLink(), "https://wa.me/254702348300");
console.log("Brand name and contact details verified.");