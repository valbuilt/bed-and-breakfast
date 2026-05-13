// src/homepage/ts/components/autocompleteLocation/autocompleteLocation.ts

export interface Suggestion {
  label: string;
  subLabel: string;
  value: string;
}

export function initAutocomplete(
  input: HTMLInputElement,
  onSearch: (query: string) => Promise<Suggestion[]>,
  onSelect: (value: string) => void,
): void {
  const wrapper = input.closest(".autocomplete-wrapper") as HTMLElement;
  const dropdown = document.createElement("ul");
  dropdown.className = "autocomplete-dropdown";
  wrapper.appendChild(dropdown);

  let debounceTimer: ReturnType<typeof setTimeout>;
  let activeIndex = -1;

  input.addEventListener("input", () => {
    clearTimeout(debounceTimer);
    const query = input.value.trim();

    if (query.length < 2) {
      hideDropdown(dropdown);
      return;
    }

    debounceTimer = setTimeout(async () => {
      const results = await onSearch(query);
      renderDropdown(dropdown, results, input, onSelect);
    }, 350);
  });

  input.addEventListener("keydown", (e) => {
    const items = dropdown.querySelectorAll("li");
    if (!items.length) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      activeIndex = Math.min(activeIndex + 1, items.length - 1);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      activeIndex = Math.max(activeIndex - 1, 0);
    } else if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault();
      (items[activeIndex] as HTMLElement).click();
      return;
    } else if (e.key === "Escape") {
      hideDropdown(dropdown);
      return;
    }

    items.forEach((el, i) => el.classList.toggle("active", i === activeIndex));
  });

  document.addEventListener("click", (e) => {
    if (!wrapper.contains(e.target as Node)) {
      hideDropdown(dropdown);
    }
  });
}

function renderDropdown(
  dropdown: HTMLUListElement,
  suggestions: Suggestion[],
  input: HTMLInputElement,
  onSelect: (value: string) => void,
): void {
  dropdown.innerHTML = "";
  activeIndex = -1;

  if (!suggestions.length) {
    hideDropdown(dropdown);
    return;
  }

  suggestions.forEach((s) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span class="autocomplete-label">${s.label}</span>
      <span class="autocomplete-sublabel">${s.subLabel}</span>
    `;

    li.addEventListener("click", () => {
      input.value = s.value;
      onSelect(s.value);
      hideDropdown(dropdown);
    });

    dropdown.appendChild(li);
  });

  dropdown.classList.remove("hidden");
}

function hideDropdown(dropdown: HTMLUListElement): void {
  dropdown.innerHTML = "";
  dropdown.classList.add("hidden");
}

/*There are three things worth understanding here before you move on:
Suggestion is an interface — it defines the shape of data this component expects. label is the main text (e.g. "Bergen"), subLabel is the smaller detail text (e.g. "Vestland, Norway"), and value is what actually gets written into the input when selected.
onSearch and onSelect are callbacks — they're functions passed in from outside. This is what keeps the component generic. The component doesn't call Nominatim directly, it just asks whoever is using it: "go fetch me some suggestions for this query" and "tell me when the user picks something."
input.closest('.autocomplete-wrapper') climbs up the DOM from the input to find the wrapper div you added in Step 1 — the dropdown gets appended inside that so it positions correctly beneath the input.
Save that file and let me know when you're ready for Step 3 — the Nominatim API call.*/
