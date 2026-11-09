import { describe, test } from "node:test";
import { strict as assert } from "node:assert";
import { CALENDLY, REDES, WHATSAPP, waLink } from "./public-links";
import { CUADERNILLO_PATH } from "./lead-magnet.config";

describe("Public destinations", () => {
  test("initial interviews use the 30-minute Calendly event", () => {
    assert.equal(CALENDLY, "https://calendly.com/judyben9/30min");
  });
  test("WhatsApp uses the confirmed phone number and preserves the service message", () => {
    assert.equal(WHATSAPP, "https://wa.me/5491161979623");
    assert.equal(new URL(waLink("Consultá Carta Natal")).searchParams.get("text"), "Consultá Carta Natal");
  });
  test("social icons retain the six configured accounts", () => {
    assert.deepEqual(REDES.map(({ url }) => url), [
      "https://www.instagram.com/ishacosmica/",
      "https://wa.me/5491161979623",
      "https://t.me/+laZUpJV0Skk2MDMx",
      "https://www.tiktok.com/@ishacosmica",
      "https://www.youtube.com/@ishacosmicaencomunidad",
      "https://open.spotify.com/user/judyben-1320",
    ]);
  });
  test("the email gift is the user's attached PDF, not the sample", () => {
    assert.equal(CUADERNILLO_PATH, "Sol_y_Luna_a_traves_del_Zodiaco.pdf");
  });
});