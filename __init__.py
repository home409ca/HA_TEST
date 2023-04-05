"""Wtyczka zapisująca wybrane encje w panelu historii."""

DOMAIN = "history_save_entities"
VERSION = "0.1.0"
ISSUE_URL = "https://github.com/username/history-save-entities/issues"
VERSION = "0.1.1"
ISSUE_URL = "https://github.com/home409ca/history-save-entities/issues"

DEFAULT_OPTIONS = {
    "entities": []
}

def setup(hass, config):
    """Konfiguracja wtyczki."""
    options = dict(DEFAULT_OPTIONS)
    options.update(config.get(DOMAIN, {}))
    hass.data[DOMAIN] = options
    return True
