(() => {
  // ../ce_theme/ce_theme/public/js/theme-switcher.js
  frappe.provide("frappe.ui");
  frappe.ui.ThemeSwitcher = class CustomThemeSwitcher extends frappe.ui.ThemeSwitcher {
    constructor() {
      super();
    }
    fetch_themes() {
      return new Promise((resolve) => {
        this.themes = [
          {
            name: "light",
            label: "Frappe Light",
            info: "Light Theme"
          },
          {
            name: "dark",
            label: "Timeless Night",
            info: "Dark Theme"
          },
          {
            name: "automatic",
            label: "Automatic",
            info: "Uses system's theme to switch between light and dark mode"
          },
          {
            name: "ce_theme",
            label: "CE Theme",
            info: "CE Theme"
          }
        ];
        resolve(this.themes);
      });
    }
  };

  // ../ce_theme/ce_theme/public/js/ce.bundle.js
  console.log("INJECTED FILE");
})();
//# sourceMappingURL=ce.bundle.NSRH2ZUF.js.map
