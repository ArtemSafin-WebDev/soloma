import Validator from "./classes/Validator";
import axios from "axios";

export default function forms() {
  const forms = Array.from<HTMLFormElement>(
    document.querySelectorAll(".js-form")
  );

  forms.forEach((form) => {
    const formValidator = new Validator(form);
    const controller = new AbortController();
    const submitBtn = form.querySelector<HTMLButtonElement>(
      'button[type="submit"]'
    );

    const handleFormSubmit = (event: SubmitEvent) => {
      event.preventDefault();
      if (!formValidator || !form) return;
      formValidator.validate();

      if (formValidator.valid) {
        const formData = new FormData(form);
        const type = form.querySelector<HTMLInputElement>('input[name="goal-type"]');
        const name = form.querySelector<HTMLInputElement>('input[name="goal-name"]');
        const goal = form.querySelector<HTMLInputElement>('input[name="goal"]');

        if (submitBtn) submitBtn.disabled = true;
        axios
          .post(form.action, formData, {
            signal: controller.signal,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((res) => {

            const goalName = (goal && goal.value ? goal.value : 'popup_form_success');
            // @ts-ignore
            ym(94532040,'reachGoal',goalName, {
              // @ts-ignore
              'type': type.value,
              // @ts-ignore
              'name': name.value
            });

            const parentModal = form.closest<HTMLElement>(".js-modal");
            parentModal?.classList.remove("active");
            const modal = document.querySelector<HTMLElement>("#success-modal");
            if (modal) {
              modal.classList.add("active");
              document.body.classList.add("modal-open");
            }
            if (form) {
              form.reset();
            }
          })
          .catch((err) => {
            console.error(err);
          })
          .finally(() => {
            if (submitBtn) submitBtn.disabled = false;
          });
      }
    };
    form.addEventListener("submit", handleFormSubmit);
  });
}
