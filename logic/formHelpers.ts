import { type Ref } from 'vue';

export function deselect(e: Event, model: Ref) {
  const { target } = e;
  if (!(target instanceof HTMLInputElement)) return;
  if (model.value === target.value) {
    model.value = undefined; // NoSonar deselect everything if the currently selected item is clicked
  }
}
