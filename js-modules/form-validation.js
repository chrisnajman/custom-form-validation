export default function formValidation() {
  const form = document.getElementById("contact-form")
  form.setAttribute("novalidate", "")
  const completionMessage = document.getElementById("completion-message")

  function validateField(field) {
    const errorEl =
      field.type === "radio"
        ? field.closest("fieldset").querySelector(".error-message")
        : field.closest(".form-group").querySelector(".error-message")

    if (!field.validity.valid) {
      errorEl.textContent = field.dataset.error || "This field is required"
      return false
    }

    errorEl.textContent = ""
    return true
  }

  form.querySelectorAll("input, textarea").forEach((input) => {
    input.addEventListener("blur", () => {
      validateField(input)
    })
  })

  form.addEventListener("submit", (e) => {
    let isValid = true

    const fields = document.querySelectorAll("input, textarea")

    fields.forEach((field) => {
      if (!validateField(field)) {
        isValid = false
      }
    })

    if (!isValid) {
      e.preventDefault()
      completionMessage.textContent = ""
      form.querySelector(":invalid").focus()
      return
    }

    // valid but JS-handled
    // e.preventDefault()
    completionMessage.textContent = "Thanks. We will be in contact shortly."
    completionMessage.focus()
    form.reset()
  })
}
