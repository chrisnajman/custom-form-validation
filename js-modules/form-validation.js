export default function formValidation() {
  const form = document.getElementById("contact-form")
  form.setAttribute("novalidate", "")
  const completionMessage = document.getElementById("completion-message")

  // Restore completion message after a real form submit + page reload
  if (sessionStorage.getItem("formSubmitted") === "true") {
    completionMessage.textContent = "Thanks. We will be in contact shortly."
    completionMessage.focus()
    // Remove completion message after reload or switching to new tab/page
    sessionStorage.removeItem("formSubmitted")
  }

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

  form.querySelectorAll("input, textarea, select").forEach((input) => {
    input.addEventListener("blur", () => {
      validateField(input)
    })

    // Clear completion message if user re-engages with (focusses within) the form
    input.addEventListener("focus", () => {
      completionMessage.textContent = ""
      sessionStorage.removeItem("formSubmitted")
    })
  })

  form.addEventListener("submit", (e) => {
    let isValid = true

    const fields = document.querySelectorAll("input, textarea, select")

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

    // Submit form, but persist success state
    sessionStorage.setItem("formSubmitted", "true")
  })
}
