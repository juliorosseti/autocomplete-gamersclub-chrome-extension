import Storage from "./storage/index";
import Consumer from "./events/consumer/index";
import { STORAGE_KEY_IS_SEARCHING, STORAGE_KEY_AVAILABLE_MAPS } from "./consts";

(async function () {
  let countAccept = 0;
  let countConfirm = 0;

  // Info Log
  const debug = (text, count) => {
    console.info(`[debug] ${count}) ${text}`);
  };

  // Accept Invite Popup
  const acceptInvite = {
    interval: false,
    element: async () => {
      const maps = await Storage.get(STORAGE_KEY_AVAILABLE_MAPS);
      const cards = Array.from(
        document.querySelectorAll(".card-normal .map-name")
      );
      const card = cards.find((el) => {
        return maps.includes(el.textContent.toLowerCase());
      });

      if (card) {
        return card.closest(".card-normal").querySelector(".accept-btn");
      }
    },
    hasElement: async () => {
      const el = await acceptInvite.element();
      return !!el;
    },
    cancel: () => clearInterval(acceptInvite.interval),
    ok: async () => {
      const el = await acceptInvite.element();
      el.click();
    },
  };

  // Confirm Invite Modal
  const confirmInvite = {
    interval: false,
    element: () =>
      document
        .getElementById("completePlayerModal")
        .querySelector(".sm-button-accept"),
    hasElement: () => !!confirmInvite.element(),
    cancel: () => clearInterval(confirmInvite.interval),
    ok: () => confirmInvite.element().click(),
  };

  // Start Handler
  const startHandler = async () => {
    await Storage.set(STORAGE_KEY_IS_SEARCHING, true);

    acceptInvite.interval = setInterval(async () => {
      if (await acceptInvite.hasElement()) {
        debug(`desafio encontrado.`, countAccept);

        await acceptInvite.ok();
        acceptInvite.cancel();

        confirmInvite.interval = setInterval(async () => {
          if (confirmInvite.hasElement()) {
            debug(`desafio aceito.`, `${countAccept}.${countConfirm}`);

            confirmInvite.ok();
            acceptInvite.cancel();
            await Storage.set(STORAGE_KEY_IS_SEARCHING, false);
          }
          countConfirm++;
          debug(`confirmando...`, `${countAccept}.${countConfirm}`);
        }, 200);
        debug(`tornando a busca inativa.`, countAccept);
        return false;
      }
      countAccept++;
      debug(`buscando...`, countAccept);
    }, 1000);
  };

  // Stop Handler
  const stopHandler = async () => {
    if (acceptInvite) {
      acceptInvite.cancel();
    }

    if (confirmInvite) {
      confirmInvite.cancel();
    }

    countAccept = countConfirm = 0;

    await Storage.set(STORAGE_KEY_IS_SEARCHING, false);

    debug(`desafio cancelado pelo cliente.`, 0);
  };

  // Listeners
  Consumer.getMessage(async (event) => {
    if (event.handler === "start") {
      await startHandler();
    }

    if (event.handler === "stop") {
      await stopHandler();
    }
  });

  // Init
  const hasSearching = await Storage.get(STORAGE_KEY_IS_SEARCHING);
  if (hasSearching === true) {
    await startHandler();
  }
})();
