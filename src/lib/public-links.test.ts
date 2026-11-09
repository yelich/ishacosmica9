import { describe, test } from "node:test";
import { strict as assert } from "node:assert";
import { ENTREVISTA_INICIAL, REDES, WHATSAPP, waLink } from "./public-links";
import { CUADERNILLO_PATH } from "./lead-magnet.config";
import { emailDomain, isEmailFormatValid } from "./email-validation";

describe("Public destinations", () => {
  test("initial interviews open WhatsApp with a prefilled request", () => {
    const url = new URL(ENTREVISTA_INICIAL);
    assert.equal(`${url.origin}${url.pathname}`, WHATSAPP);
    assert.equal(url.searchParams.get("text"), "¡Hola Judy! Me gustaría solicitar una entrevista inicial.");
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
  test("email validation accepts real addresses and rejects malformed ones", () => {
    assert.equal(isEmailFormatValid("judy@gmail.com"), true);
    assert.equal(isEmailFormatValid("  nombre.apellido@empresa.com.ar "), true);
    assert.equal(isEmailFormatValid("sin-arroba.com"), false);
    assert.equal(isEmailFormatValid("dos@@gmail.com"), false);
    assert.equal(isEmailFormatValid("falta@dominio"), false);
    assert.equal(isEmailFormatValid("@gmail.com"), false);
    assert.equal(emailDomain("Judy@GMAIL.com"), "gmail.com");
  });
});